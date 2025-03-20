'use client'

import { useCallback, useEffect, useState } from 'react'
import { fetchWeather } from '../utils/fetchData'
import { Container, MainContent } from './styled'
import Image from 'next/image'
import Wallpaper from '../public/main-background.webp'
import { SearchBar } from '@/components/SearchBar'
import DateTimeDisplay from '@/components/DateTimeDisplay'
import Forecast from '@/components/Forecast'
import WeatherDetails from '@/components/WeatherDetails'

export default function Home() {
  const [weatherData, setWeatherData] = useState<any | null>(null)

  const fetchDatas = useCallback(async () => {
    const data = await fetchWeather('Uberlandia')
    setWeatherData(data)
  }, [])

  useEffect(() => {
    fetchDatas()
  }, [fetchDatas])

  return (
    <Container>
      <Image src={Wallpaper} alt="Wallpaper" layout="fill" objectFit="cover" priority={false} />
      <MainContent>
        <SearchBar onSearch={setWeatherData} />
        <WeatherDetails weatherData={weatherData} />
        <DateTimeDisplay />
        <Forecast city={weatherData?.name} />
      </MainContent>
    </Container>
  )
}
