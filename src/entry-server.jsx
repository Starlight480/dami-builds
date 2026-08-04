import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import App from './App.jsx'

// Used by prerender.mjs to emit static HTML into dist/index.html (GitHub Pages SEO).
export function render() {
  return '<!' + 'DOCTYPE html>' + renderToStaticMarkup(React.createElement(App))
}
