
'use client'
import { useEffect, useState } from 'react'

export default function DateDisplay() {
  const [day, setDay] = useState<string | null>(null)

  useEffect(() => {
    const fetchDate = async () => {
      const response = await fetch('/api/date')
      const result = await response.json()
      setDay(result.todayDate)  // todayDate로 수정!
    }
    fetchDate()
  }, [])

  return (
    <span>{day}</span>    
  )
}
