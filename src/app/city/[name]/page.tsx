import { fetchWeather } from '../../../utils/fetchData'
import CityPageClient from './CityPageClient'

export default async function CityPage({ params }: { params: { name: string } }) {
  const cityName = params.name
  const weatherData = await fetchWeather(cityName)

  return (
    <div>
      <CityPageClient weatherData={weatherData} />
    </div>
  )
}
