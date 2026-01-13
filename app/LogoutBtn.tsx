'use client'

import { signOut } from "next-auth/react"

export default function LogoutBtn( ) {
  return (
    <button  className="text-white cursor-pointer" onClick={() => signOut()}>로그아웃</button>
  )
}
