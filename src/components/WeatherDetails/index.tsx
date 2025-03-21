import Link from 'next/link'
import { StyledContainer } from './styled'
import { WiHumidity } from 'react-icons/wi'
import { TiWeatherPartlySunny, TiWeatherWindy } from 'react-icons/ti'

export default function WeatherDetails({ weatherData }: any) {
  return (
    <Link href={`/city/${weatherData?.name}`} style={{ flex: 1 }}>
      <StyledContainer>
        <div className="mainInfo">
          <h1>{weatherData?.name}</h1>
          <div className="icon">
            <h1>{weatherData?.main?.temp.toFixed(0)}°C</h1>
            <img src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`} alt="Weather Icon" />
          </div>
        </div>
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
      </StyledContainer>
    </Link>
  )
}
