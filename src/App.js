import React from 'react';
import './App.css';
import Message from './components/Message';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <ClassClick/>
      {/* <FunctionClick></FunctionClick>
      <Counter />
      <Greet name="Ron" heroName="pelano"/>
      <Greet name="Bob" heroName="gato">
        <p>This is children props</p>  
      </Greet>
      <Greet name="Don" heroName="comedia">
        <button>Action</button>
      </Greet>
      <Greet name="Ron" heroName="pelano"/>
      <Welcome name="Bob" heroName="gato"/>
      <Welcome name="Don" heroName="comedia"/>
      <Welcome name="Ron" heroName="pelano"/>
      <Hello />
      <form>
        <label> Monto:
          <input type="text" name="amount" />
        </label><br/>
        <input type="submit" value="Submit" />
      </form> */}
    </div>
  );
}

export default App;
