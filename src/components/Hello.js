import React from 'react';

const Hello = () => {
//  return (
//      <div className='guacho'>
//          <h1>Hello guacho</h1>
//      </div>
//  )
    return React.createElement(
        'div', {id: 'hello', className: 'guacho'}, React.createElement(
            'h1', null, 'Hello guacho'))
}

export default Hello;