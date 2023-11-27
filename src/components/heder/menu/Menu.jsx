import React, { useState } from 'react';
// import MenuItems from './MenuItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SubMenuItems from './SubMenuItems'
import AndroidMenuIcon from "./../../../image/menu-icon1.png"
import AndroidMegaIcon from "./../../../image/mega-icon1.png"
import IOSMenuIcon from "./../../../image/menu-icon2.png"
import IOSMegaIcon from "./../../../image/mega-icon2.png"
import FlutterMenuIcon from "./../../../image/menu-icon3.png"
import FlutterMegaIcon from "./../../../image/mega-icon3.png"
import ReactNativeMenuIcon from "./../../../image/menu-icon4.png"
import ReactNativeMegaIcon from "./../../../image/mega-icon4.png"
import MegaMenu from './megaMenu/MegaMenu'

import { useNavigate } from 'react-router-dom';
const Menu = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);
  const [currentMenuTitle, setCurrentMenuTitle] = useState('');
  const [subMenu, setSubMenu] = useState(null);
  const [megaMenuActive, setMegaMenuActive] = useState(false)

  const navigate = useNavigate()


  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const showSubMenu = (hasChildren) => {
    const subMenuElement = hasChildren.querySelector('.sub-menu');
    setSubMenu(subMenuElement);
    subMenuElement.style.animation = 'slideLeft 0.5s ease forwards';
    const menuTitle = hasChildren.querySelector('svg').parentNode.childNodes[0].textContent;
    setCurrentMenuTitle(menuTitle);
    setSubMenuActive(true);
  };

  const hideSubMenu = () => {
    if (subMenu) {
      subMenu.style.animation = 'slideRight 0.5s ease forwards';
      setTimeout(() => {
        setSubMenu(null);
        setSubMenuActive(false);
      }, 300);
    }
    setCurrentMenuTitle('');
  };

  const handleMenuMainClick = (e) => {
    if (!menuActive) {
      return;
    }
    if (e.target.closest('.menu-item-has-children')) {
      const hasChildren = e.target.closest('.menu-item-has-children');
      showSubMenu(hasChildren);
    }
  };


  return (
    <>
      <div className="header-item item-center">
        <div className={`menu-overlay ${menuActive ? 'active' : ''}`} onClick={toggleMenu} />
        <nav className={`menu ${menuActive ? 'active' : ''}`}>
          <div className={`mobile-menu-head ${subMenuActive ? 'active' : ''}`}>
            <div className="go-back" onClick={hideSubMenu}>
              <FontAwesomeIcon icon="fa fa-angle-left" />
            </div>
            <div className="current-menu-title">{currentMenuTitle}</div>
            <div className="mobile-menu-close" onClick={() => setMenuActive(false)}>×</div>
          </div>

          <ul className="menu-main" onClick={handleMenuMainClick}>
            <li>
              <a href='*' onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/')
              }}>Home</a>

            </li>
            <li className="menu-item-has-children">
              <a href='*' onClick={(e) => {e.preventDefault();setSubMenuActive((prev) => (prev === true ? false : true))}}>
                Who we are <FontAwesomeIcon icon="fa-solid fa-angle-down" />
              </a>
              <div className={`sub-menu sub-nav ${subMenuActive ? 'active' : ''}`}>
                <ul>
                  <SubMenuItems title={'Android Application'} imgurl1={AndroidMenuIcon} imgurl2={AndroidMegaIcon} />
                  <SubMenuItems title={'IOS Application'} imgurl1={IOSMenuIcon} imgurl2={IOSMegaIcon} />
                  <SubMenuItems title={'Flutter Application'} imgurl1={FlutterMenuIcon} imgurl2={FlutterMegaIcon} />
                  <SubMenuItems title={'React Native Application'} imgurl1={ReactNativeMenuIcon} imgurl2={ReactNativeMegaIcon} />
                </ul>
              </div>
            </li>
            <li className="menu-item-has-children">
              <a href='*' onClick={(e) => e.preventDefault()}>
                What we offer <FontAwesomeIcon icon="fa-solid fa-angle-down" onClick={() => setMegaMenuActive((prev) => (prev === true ? false : true))} />
              </a>
              <MegaMenu megaMenuActive={megaMenuActive} />
            </li>
            <li>
              <a href='*' onClick={(e) => e.preventDefault()}>Portfolio</a>
            </li>
            <li>
              <a href='*' onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/our-blog')
              }}>Blog</a>
            </li>
          </ul>

        </nav>
        <a href="javas" className="lest-talk" title="Let’s Talk">
          <span>let's Talk</span>
        </a>

      </div>
      <div className="item-right">
        <div className="mobile-menu-trigger" onClick={toggleMenu}>
          <span></span>
        </div>
      </div>
    </>

  )
}

export default Menu