'use client'

import { signIn } from "next-auth/react"

export default function LoginBtn() {
  return (
    <button onClick={()=>{
      signIn()}} className="text-white cursor-pointer">로그인</button>
  )
}
