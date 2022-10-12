import { useState } from 'react'

const Search = ({ handleSearch, setError, error }) => {
  const [searchInput, setSearchInput] = useState('')

  const submitSearch = (e) => {
    e.preventDefault()
    handleSearch(searchInput)
  }

  const removeError = () => {
    setError((prev) => !prev)
  }

  return (
    <section className='form_container'>
      <form onSubmit={submitSearch}>
        <input
          type='text'
          className='search_input'
          placeholder='Search GitHub username…'
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value)
          }}
          required
          maxLength={39}
          onInput={(e) => {
            if (error) {
              removeError()
            }
          }}
        />
        <div>{error && <div className='no-results'>No results</div>}</div>
        <button className='search_submit-btn'>Search</button>
      </form>
    </section>
  )
}
export default Search
