'use client'
import { Title } from './styled'

export default function CityPageClient({ weatherData }: { weatherData: any }) {
  return (
    <div>
      <Title>{weatherData.name}</Title>
      <p>Previsão para os próximos 5 dias</p>

      <p>Sensação térmica: {weatherData.main.temp}°C</p>

      <p>Indice UV: {weatherData.uvi}</p>
    </div>
  )
}
