import s from './Nav.module.scss'
import cn from 'classnames'
import logo from './../assets/img/logo.png'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import SearchForm from './SearchForm'
import { Link, NavLink } from 'react-router-dom'

const Nav = ({ search, setSearch, location }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setSearch('')
  }, [setSearch, location])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const linkClass = ({isActive}) => (isActive ? 'active-style' : '')

  return (
    <nav className={s.Nav}>
      <div className={cn('container', s.Nav_container)}>
        <Link className={s.Nav_brand} to='/'>
          <img src={logo} alt='logo' />
        </Link>
        <div className={cn(s.Nav_collapseWrap, menuOpen ? s.open : '')}>
          <button className={cn('btn', s.Nav_closeIcon)} type='button' onClick={toggleMenu}>
            <AiOutlineClose />
          </button>
          <ul className={s.Nav_navigation} onClick={toggleMenu}>
            <li className={cn(s.Nav_item)}>
              <NavLink to='/' className={cn('navLink', s.Nav_link, linkClass)}>Stories</NavLink>
            </li>
            <li className={s.Nav_item}>
              <NavLink to='post' className={cn('navLink', s.Nav_link, linkClass)}>Post</NavLink>
            </li>
            <li className={s.Nav_item}>
              <NavLink to='author' className={cn('navLink', s.Nav_link, linkClass)}>Author</NavLink>
            </li>
          </ul>
          { (location.pathname === '/') ? <SearchForm search={search} setSearch={setSearch} /> : <></> }
        </div>
        <button className={cn('btn', s.Nav_toggler)} type='button' onClick={toggleMenu}>
          <RxHamburgerMenu />
        </button>
      </div>
    </nav>
  )
}

export default Nav