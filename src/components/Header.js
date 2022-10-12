import { ReactComponent as SunIcon } from '../assets/icon-sun.svg'
import { ReactComponent as MoonIcon } from '../assets/icon-moon.svg'

const Header = ({ toggle, theme }) => {
  return (
    <header>
      <a href='/'>
        <h1>devfinder</h1>
      </a>
      <button className='color-toggle_button' onClick={toggle}>
        <span className='color-toggle_text'>
          {theme === 'light' ? 'dark' : 'light'}
        </span>
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </button>
    </header>
  )
}

export default Header
