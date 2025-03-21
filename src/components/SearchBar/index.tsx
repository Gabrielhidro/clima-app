import { MdSearch } from 'react-icons/md'
import { StyledSearchBar } from './styled'
import { fetchWeather } from '../../utils/fetchData'
import { useCallback, useState } from 'react'

export function SearchBar({ onSearch }: any) {
  const [searchterm, setSearchTerm] = useState('')

  const handleSearch = useCallback(async () => {
    const data = await fetchWeather(searchterm)
    onSearch(data)
  }, [searchterm, onSearch])

  return (
    <StyledSearchBar>
      <input type="text" placeholder="Pesquisar cidade" value={searchterm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>
        <MdSearch />
      </button>
    </StyledSearchBar>
  )
}
