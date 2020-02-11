import React, { Component } from 'react'
import './App.css'


class catSynth extends Component {
    
    render() {
        const {title, img} = this.props;
        const superPowers = this.props.superPowers.map((ing, index)=> (<li key = {index}>{ing}</li>));
        return (
            <div className= "SynthCat"> 
                <img src={img}/>
                <div>
                <h1>{title}</h1>
            
                    <ul>
                        {superPowers}
                    </ul>
                </div>  
            </div>
        )
    }
}
export default catSynth;