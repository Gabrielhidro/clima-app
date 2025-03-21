import Link from 'next/link'
import { StyledContainer } from './styled'
import { WiHumidity } from 'react-icons/wi'
import { TiWeatherPartlySunny, TiWeatherWindy } from 'react-icons/ti'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useEffect, useState } from 'react'

export default function WeatherDetails({ weatherData }: any) {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleToggleFavorite = () => {
    const favoriteCities = localStorage.getItem('favoriteCities')
    if (favoriteCities) {
      const cities = JSON.parse(favoriteCities)
      if (cities.includes(weatherData?.name)) {
        cities.splice(cities.indexOf(weatherData?.name), 1)
      } else {
        cities.push(weatherData?.name)
      }
      localStorage.setItem('favoriteCities', JSON.stringify(cities))
      setIsFavorite(!isFavorite)
    } else {
      localStorage.setItem('favoriteCities', JSON.stringify([weatherData?.name]))
      setIsFavorite(!isFavorite)
    }
  }

  useEffect(() => {
    const favoriteCities = localStorage.getItem('favoriteCities')
    if (favoriteCities) {
      const cities = JSON.parse(favoriteCities)
      setIsFavorite(cities.includes(weatherData?.name))
    }
  }, [weatherData?.name])

  return (
    <StyledContainer>
      <Link href={`/city/${weatherData?.name}`}>
        <div className="mainInfo">
          <h1>{weatherData?.name}</h1>
          <div className="icon">
            <h1>{weatherData?.main?.temp.toFixed(0)}°C</h1>
            <img src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`} alt="Weather Icon" />
          </div>
        </div>
      </Link>
      <div className="aditionalInfo">
        <span>
          <TiWeatherPartlySunny size={32} /> {weatherData?.weather[0].description}
        </span>
        <span>
          <WiHumidity size={32} /> Umidade {weatherData?.main?.humidity}%
        </span>
        <span>
          <TiWeatherWindy size={32} /> {weatherData?.wind?.speed} m/s
        </span>
      </div>

      <button
        className="favorite"
        type="button"
        title="Adicionar aos favoritos"
        onClick={(e) => {
          e.stopPropagation() // Impede a propagação do evento
          handleToggleFavorite()
        }}
      >
        {isFavorite ? <MdFavorite size={32} /> : <MdFavoriteBorder size={32} />}
      </button>
    </StyledContainer>
  )
}
