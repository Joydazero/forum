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
      <h1>글쓰기</h1>
      <input 
        type="text" 
        placeholder="제목" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="text" placeholder='제목을 작성해주세요' value={title}
      onChange={(e) => setTitle(e.target.value)} />
      <br />
      <textarea 
        placeholder="내용" 
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>저장</button>
    </div>
  )
}
