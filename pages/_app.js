import React from 'react';
import PropTypes from 'prop-types';
import '../styles/globals.css'

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}