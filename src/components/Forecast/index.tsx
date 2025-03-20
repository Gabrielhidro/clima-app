/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { fetchForecast } from '@/utils/fetchForecast'

interface ForecastItem {
  dt: number
  main: {
    temp: number
  }
  weather: {
    description: string
    icon: string
  }[]
}

export default function Forecast({ city }: { city: string }) {
  const [forecast, setForecast] = useState<ForecastItem[]>([])

  useEffect(() => {
    const loadForecast = async () => {
      try {
        const data = await fetchForecast(city)
        console.log(data)

        setForecast(data.list)
      } catch (error) {
        console.error('Erro ao carregar previsão:', error)
      }
    }

    loadForecast()
  }, [city])

  console.log(forecast)

  const groupedForecast = forecast.reduce((acc: Record<string, ForecastItem[]>, item) => {
    const date = format(new Date(item.dt * 1000), 'yyyy-MM-dd')
    if (!acc[date]) {
      acc[date] = []
    }
    acc[date].push(item)
    return acc
  }, {})

  return (
    <div>
      <h2>Previsão para os Próximos 5 Dias</h2>
      {Object.entries(groupedForecast).map(([date, items]) => (
        <div key={date}>
          <h3>{format(new Date(date), 'EEEE, d MMM', { locale: ptBR })}</h3>
          <div>
            {items.map((item, index) => (
              <div key={index}>
                <p>
                  {format(new Date(item.dt * 1000), 'HH:mm')} - {item.main.temp}°C - {item.weather[0].description}
                </p>
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt={item.weather[0].description}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
