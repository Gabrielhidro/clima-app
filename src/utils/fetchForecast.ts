import axios from 'axios'

interface WeatherData {
  list: any
}

export async function fetchForecast(city: string): Promise<WeatherData> {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY

  if (!apiKey) {
    throw new Error('Chave incorreta')
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`
    )

    if (response.status !== 200 || !response.data) {
      throw new Error('Erro ao buscar dados do clima.')
    }

    return response.data
  } catch (error) {
    console.error('Erro na requisição à API:', error)
    throw new Error('Não foi possível obter os dados do clima. Verifique o nome da cidade.')
  }
}
