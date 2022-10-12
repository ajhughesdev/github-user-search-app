import { useEffect, useState } from 'react'
import axios from 'axios'
import useLocalStorage from 'use-local-storage'

import './App.css'

import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Search from './components/Search'

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)

  const DEFAULT_USER = 'octocat'

  const getUser = async (username) => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`)
      setError(false)
      setUser(res.data)
    } catch {
      setError(true)
    }
  }

  const handleSearch = (username) => {
    getUser(username)
  }

  useEffect(() => {
    getUser(DEFAULT_USER)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='app_container' data-theme={theme}>
      <div className='app'>
        <Header toggle={switchTheme} theme={theme} />
        <main>
          <Search
            handleSearch={handleSearch}
            error={error}
            setError={setError}
          />
          <ProfileCard user={user} />
        </main>
      </div>
    </div>
  )
}

export default App
