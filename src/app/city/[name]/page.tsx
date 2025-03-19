import { fetchWeather } from '../../../utils/fetchData'

export default async function CityPage({ params }: { params: { name: string } }) {
  const weatherData = await fetchWeather(params.name)

  return (
    <div>
      <h1>{weatherData.name}</h1>
    </div>
  )
}
