import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//       href: 'https://google.com',
//       target: '_blank'
//     },
//   children: 'Click me to visit Google'
//   }

  const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
  )

const anotherUser = "chai chai aur chai"

  const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to go to google',
    anotherUser
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement

  
)
