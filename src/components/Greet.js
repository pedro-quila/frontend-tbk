import React from 'react';

//  function Greet() {
//      return <h1>Wena guacho</h1>
//  }
const Greet = (props) => {
    const {name, heroName} = props;
    return (
        <div>
        <h1>Greet guacho {name} a.k.a {heroName}</h1>
        </div>
    )    
}

export default Greet;