import React from 'react'

//function Greet() {
//    return <h1>HI</h1>
//}

const Greet = (props) => {
console.log(props)
return <div>
    <h1>HI {props.name} and {props.name2}</h1>
    {props.children}
    </div>}

export default Greet 