import React, { useEffect, useState } from 'react';
import Menu from './menu/Menu'
import LoGo from "./../../image/logo.png"
import { useNavigate } from 'react-router-dom';

const Heder = () => {
  const navigate = useNavigate()
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? 'is-sticky' : ''}`}>
      <div className='container'>
        <div className="v-center">
          <div className="header-item item-left">
            <div className="logo">
              <a href='*' onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/')
              }}>
                <img src={LoGo} alt='logo' />
              </a>
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </header>
  )
}

export default Heder