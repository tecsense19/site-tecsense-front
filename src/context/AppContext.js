import React, { useState } from 'react'
import { createContext } from 'react'




export const context = createContext()

const AppContext = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <context.Provider value={{ currentSlide, setCurrentSlide }}>
      {children}
    </context.Provider>
  )
}

export default AppContext