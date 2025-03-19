'use client'

import { useCallback, useEffect } from 'react'
import { fetchWeather } from '../utils/fetchData'

export default function Home() {
  const fetchDatas = useCallback(async () => {
    const data = await fetchWeather('Rio de Janeiro')
    console.log(data)
  }, [])

  useEffect(() => {
    fetchDatas()
  }, [fetchDatas])

  return (
    <div>
      <h1>weatherData</h1>
    </div>
  )
}
