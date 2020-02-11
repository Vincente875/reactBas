import React, {Component} from 'react';
import CatSynth from './catComponent'
import PickYourFighter from './PickYourFighter'
import './App.css';



class App extends Component {
  render() {
    return (
      <div>
          <PickYourFighter tittel = "Pick Your Fighter"/>
          <CatSynth title = "SynthCat" />
          
      </div>
    )
  }
}


export default App;
