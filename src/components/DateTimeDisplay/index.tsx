'use client'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export default function DateTimeDisplay() {
  const now = new Date()
  const time = format(now, 'HH:mm')
  const date = format(now, 'EEEE, d MMM yyyy', { locale: ptBR })

  return (
    <div>
      <h1>{time}</h1>
      <span>{date}</span>
    </div>
  )
}
