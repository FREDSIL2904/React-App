import React from 'react'
import ReactDOM from 'react-dom/client'
import Todo from './Todo.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className="container-fluid">
    <Todo/>
    </div>
  </React.StrictMode>,
)
