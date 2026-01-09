import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
    <div>
        <h1>my app</h1>
    </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.example.com',
//         target: '_blank',

//     },
//     children: 'Click here to visit example.com'
// }

 const anothercode = "chai and code "
const ReactElement = React.createElement(
    'a',
    {href:"https://google.com", target:"_blank"},
    'click me to visit google',
    anothercode 
)

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google </a>
)

createRoot(document.getElementById('root')).render(
  
    //  MyApp()
    // < MyApp/>
      ReactElement
    //  anotherElement
    // ReactElement
    // <App/>
 
)
