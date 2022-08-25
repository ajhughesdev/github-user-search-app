import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('')

  const submitSearch = (e) => {
    e.preventDefault()
    onSearch(searchInput)
  }

  return (
    <section className='form-container'>
      <form onSubmit={submitSearch}>
        <input
          type='text'
          id='search-input'
          placeholder='Search GitHub username…'
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value)
          }}
        />
        <button className='search-submit'>Search</button>
      </form>
    </section>
  )
}

export default SearchBar
