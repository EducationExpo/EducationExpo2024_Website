import React from 'react'
import { useMediaQuery } from 'react-responsive'

export default function TestScreen () {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const backgroundColor = isDesktopOrLaptop ? 'red' : 'blue'

  return (
    <div style={{ backgroundColor, height: '100vh', color: 'white' }}>
      <h1>Device Test!</h1>
   
    </div>
  )
}