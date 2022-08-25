import { ReactComponent as SunIcon } from './../assets/icon-sun.svg'
import { ReactComponent as MoonIcon } from './../assets/icon-moon.svg'

const Header = ({ toggle, theme }) => {
  return (
    <header>
      <h1>devfinder</h1>
      <button className='color-toggle' onClick={toggle}>
        <span className='toggle-text'>
          {theme === 'light' ? 'dark' : 'light'}
        </span>
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </button>
    </header>
  )
}

export default Header
