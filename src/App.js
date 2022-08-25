import { useState, useEffect } from 'react'
import useLocalStorage from 'use-local-storage'
import axios from 'axios'

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ProfileCard from './components/ProfileCard'

import './App.css'

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  const [user, setUser] = useState(null)

  const DEFAULT_USER = 'octocat'

  function getUser(userHandle = '') {
    return axios.get(`https://api.github.com/users/${userHandle}`)
  }

  async function handleSearch(userHandle) {
    const user = await getUser(userHandle).then((res) => res.data)
    setUser(user)
  }

  useEffect(() => {
    handleSearch(DEFAULT_USER)
  }, [])

  return (
    <div className='app' data-theme={theme}>
      <div className='app-container'>
        <main>
          <Header toggle={switchTheme} theme={theme} />
          <SearchBar onSearch={handleSearch} />
          <ProfileCard user={user} />
        </main>
      </div>
    </div>
  )
}

export default App
