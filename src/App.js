import React, {Component} from 'react';
import CatSynth from './catComponent'
import PickYourFighter from './PickYourFighter'
import './App.css';
import images from './images.jpeg'



class App extends Component {
  render() {
    return (
      <div>
          <PickYourFighter tittel = "Pick Your Fighter"
          />
         
          <CatSynth 
                    img = {images}
                    title = "Synth Cat" 
                    superPowers = {["Synths", "SubBass"]}
                    />
      </div>
    )
  }
}


export default App;
