import Link from 'next/link'

export default function WeatherDetails({ weatherData }: any) {
  return (
    <div>
      <h1>{weatherData?.name}</h1>
      <img src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`} alt="Weather Icon" />
      <p>Temperatura: {weatherData?.main?.temp}°C</p>
      <p>Clima: {weatherData?.weather[0].description}</p>
      <p>Umidade: {weatherData?.main?.humidity}%</p>
      <p>Vento: {weatherData?.wind?.speed} m/s</p>

      <Link href={`/city/${weatherData?.name}`}>Ver detalhes</Link>
    </div>
  )
}
