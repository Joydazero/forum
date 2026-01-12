'use client'

import { useState } from 'react'

export default function WritePage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')


  const handleSubmit = async () => {
    const response = await fetch('/api/test',{
      method : 'POST',
      headers : { 'Content-Type': 'application/json'},
      body: JSON.stringify({title,content})
    })

    const result = await response.json() // 서버에서 받은 시점
    console.log(result);
    if( result.insertedId){
      alert('저장 완료!')
      setTitle('')
      setContent('')
    }
    
  }

  return (
    <div>
      <h1 className="title">글쓰기</h1>
      <form onSubmit={handleSubmit}>
         <div className='p-2.5 m-2.5 box-border'>
        <input type="text" placeholder='제목을 작성해주세요' value={title}
        className='border border-[#ccc] rounded-[5px] p-1.5 w-full box-border'
        onChange={(e) => setTitle(e.target.value)} />
        <br />
        <textarea 
          placeholder="내용" 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className='border border-[#ccc] rounded-[5px] p-1.5 w-full box-border mt-5'
        />
        <br />
        </div>
        <button type="submit" className='mx-5 my-3 rounded-md bg-[#e5e5e5] flex px-3 py-2 text-base font-medium cursor-pointer border border-[#bbbbbb]'>저장</button>
      </form>
    </div>
  )
}
