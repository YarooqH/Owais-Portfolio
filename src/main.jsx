import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {App, StarCanvas} from './App'
import './index.css'

function Overlay () {
  return (
    <div style={{ position: 'absolute', top: '50%', left: '0%', transform: 'translate3d(0,-50%,0)' }}>
        <h1 style={{ margin: 0, padding: 0, fontSize: '11em', fontWeight: 500, textAlign: 'left', lineHeight: '200px', color: 'black' }}>Mohammad <br/> Owais <br/> Siddiqui </h1>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Suspense>
    <StarCanvas/>
    <App />
  </Suspense>
  </>
)
