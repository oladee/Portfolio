import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import githubIcon from '../assets/akar-icons_github-fill.svg'
const Navbar = (props) => {
  return (
    <div className='flex'>
        <header>
          <h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-3xl font-extrabold'>&#10627; Oladee &#10628;</h1>
        </header>
        <nav>
          <ul>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Tech Stack</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>contact</NavLink>
          </ul>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </nav>
    </div>
  )
}

export default Navbar
