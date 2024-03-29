import { NavLink } from 'react-router-dom'
import githubIcon from '../assets/Vector.svg'
import twitterIcon from '../assets/ant-design_twitter-circle-filled.svg'
import linkedinIcon from '../assets/entypo-social_linkedin-with-circle.svg'
const Navbar = () => {
  
  return (
    <div className='flex items-center justify-between my-6 h-[5vh]'>
        <header>
          <h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-4xl font-extrabold'>&#10627;Oladee&#10628;</h1>
        </header>
        <nav className='hidden lg:flex gap-12 mr-28'>
          <ul className='flex gap-7 text-xl'>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink onClick={(e)=>{
            e.preventDefault()
            window.scrollTo({
              top: document.querySelector('#techStack').offsetTop,
              behavior: 'smooth'
            })
          }}>Tech Stack</NavLink>
            <NavLink onClick={(e)=>{
            e.preventDefault()
            window.scrollTo({
              top: document.querySelector('#projects').offsetTop,
              behavior: 'smooth'
            })
          }}>Projects</NavLink>
            <NavLink>Contact</NavLink>
          </ul>
          <div className='flex gap-4 '>
            <img className='w-[25px]' src={githubIcon} alt="github icon" />
            <img className='w-[25px]' src={twitterIcon} alt=" twitter icon" />
            <img className='w-[25px]' src={linkedinIcon} alt="linkedin Icon" />
          </div>
        </nav>
    </div>
  )
}

export default Navbar
