import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import './index.scss'

import arrowIcon from './arrow.svg'

const breakpoint = 768

export default ({ menus }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isSmMenuOpen, setSmMenuOpen] = useState(false)
  const [isSmSubMenuOpen, setSmSubMenuOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [screenSize, setScreenSize] = useState(0)

  useEffect(() => {
    getScreenWdith()
    window.addEventListener('click', handleHideMenu)
    window.addEventListener('resize', getScreenWdith)
    return () => {
      window.removeEventListener('click', handleHideMenu)
      window.removeEventListener('resize', getScreenWdith)
    }
  }, [isMenuOpen, isSmMenuOpen])

  const getScreenWdith = () => {
    setScreenSize(document.body.offsetWidth)
    if (screenSize < breakpoint) {
      setMenuOpen(false)
    }
  }

  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  const handleOpenSubMenu = (e, index) => {
    stopPropagation(e)
    setSmSubMenuOpen(activeIndex === index ? !isSmSubMenuOpen : true)
    setActiveIndex(index)
  }

  const handleHideMenu = (e) => {
    stopPropagation(e)
    setMenuOpen(false)
    setSmMenuOpen(false)
    setSmSubMenuOpen(false)
  }

  const handleSmOpenMenu = (e) => {
    stopPropagation(e)
    setSmMenuOpen(!isSmMenuOpen)
  }


  const screenCls = screenSize >= breakpoint ? 'nofwl__lg' : 'nofwl__sm'

  const activeCls = isSmMenuOpen ? 'open' : ''

  return (
    <div className="nofwl-navbar">
      <button className="nofwl__menu__btn" onClick={handleSmOpenMenu}>Menu</button>
      <div className={`nofwl__menu ${screenCls} ${activeCls}`}>
        <ul>
          {menus.map((menuItem, index) => {
            let itemNode
            const active = isSmSubMenuOpen && activeIndex === index
            if (menuItem.link) {
              itemNode = (
                <li key={menuItem.name}>
                  <Link to={menuItem.link}>
                    {menuItem.name}
                  </Link>
                </li>
              )
            }
            if (!menuItem.link && menuItem.render) {
              itemNode = <li key={menuItem.name} className={menuItem.name}>{menuItem.render}</li>
            }
            if (menuItem.submenus) {
              itemNode = (
                <li key={menuItem.name} className="submenus"
                  onClick={(e) => handleOpenSubMenu(e, index)}
                >
                  <span>
                    {menuItem.name}
                    <img className="arrow-icon" alt="arrow" style={{ transform: `rotateZ(${active ? 0 : '-90deg'})` }} src={arrowIcon} />
                  </span>
                  <ul className={active ? 'open' : ''}>
                    {menuItem.submenus.map(subMenuItem => {
                      return (
                        <li key={subMenuItem.name}>
                          <Link to={subMenuItem.link}>
                            {subMenuItem.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            }
            return itemNode
          })}
        </ul>
      </div>
    </div>
  )
}
