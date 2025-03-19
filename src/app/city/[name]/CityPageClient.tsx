'use client'
import { Title } from './styled'

export default function CityPageClient({ weatherData }: { weatherData: any }) {
  return (
    <div>
      <Title>{weatherData.name}</Title>
    </div>
  )
}
