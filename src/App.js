import React,{Component} from 'react';
import UpperSection from './components/UpperSection'
import './App.css';
import LowerSection from './components/LowerSection'

class App extends Component{
  render(){
    return (
      <div className="App">
       <UpperSection/>
       <LowerSection/>
    
      </div>
    );
  }
  
}

export default App;
