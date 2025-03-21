'use client'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { StyledContainer } from './styled'

export default function DateTimeDisplay() {
  const [time, setTime] = useState(format(new Date(), 'HH:mm'))
  const [date, setDate] = useState(format(new Date(), 'EEEE, d MMM yyyy', { locale: ptBR }))

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      setTime(format(now, 'HH:mm'))
      setDate(format(now, 'EEEE, d MMM yyyy', { locale: ptBR }))
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <StyledContainer>
      <h1>{time}</h1>
      <span>{date}</span>
    </StyledContainer>
  )
}
