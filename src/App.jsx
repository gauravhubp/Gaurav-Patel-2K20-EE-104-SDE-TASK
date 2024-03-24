import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import ImageSlider from './components/ImageSlider.js';
import { SliderData } from './components/SliderData.js';

const App = () => {
    return (
        <div>
        <Navbar />
        <div className='Main'>Featured Products</div>
        <div className='Main2'>Explore and discover a variety of Products</div>
        <ImageSlider slides={SliderData}/>
        </div>
    )
}

export default App;