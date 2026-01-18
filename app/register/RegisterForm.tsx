'use client'

import { useRouter } from "next/router";
import { useState } from "react";

export default function RegisterForm() {
  const router = useRouter()
     type DataProps = {
       name: string;
       email: string;
       password: string;
     };
    const [regiForm, setRegiForm] = useState<DataProps>({
      name: "",
      email: "",
      password: "",
    });
    const handleChange = ( e: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target;
        setRegiForm((prev) => ({...prev, [name]:value}))
    }
   
    const handleSendDataSignUp = async (
      e: React.FormEvent<HTMLFormElement>
    ) => {
      e.preventDefault();
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regiForm),
      });

      if (response.ok) {
        alert("회원가입 성공!");
        router.push("/api/auth/signin"); // 로그인 페이지로 이동
      }
    };
  return (
    <div>
      <form
        className="flex flex-col items-start"
        onSubmit={handleSendDataSignUp}
      >
        <label htmlFor="">
          <span>이름</span>
          <input
            name="name"
            type="text"
            placeholder="이름"
            value={regiForm.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <span>이메일</span>
          <input
            name="email"
            type="text"
            placeholder="이메일"
            value={regiForm.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <span>비번</span>
          <input
            name="password"
            type="password"
            placeholder="비번"
            value={regiForm.password}
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          className="rounded-md bg-[#e5e5e5] flex text-base font-medium cursor-pointer border border-[#bbbbbb]"
        >
          id/pw 가입요청
        </button>
      </form>
    </div>
  );
}
