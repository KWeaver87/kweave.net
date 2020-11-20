import React from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
MyApp.propTypes = {
  Component: React.Component,
  pageProps: {},
}

export default MyApp
