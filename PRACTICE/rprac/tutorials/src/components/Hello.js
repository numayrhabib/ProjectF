import React from 'react'

const Hello = () => {
    //return (
      //  <div><h1>HIHIHI</h1>
        //</div>
    //)

    return React.createElement('div',
    {id: 'hello', className: 'dummy'}, React.createElement('h1', null,  'HELLO'))
}

export default Hello