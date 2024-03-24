import React,{useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import { SliderData } from './SliderData';

const ImageSlider = ({slides}) => {
 const [current,setCurrent] = useState(0);
 const length = slides.length;

 const nextSlide = () => {
  setCurrent(current === length - 1 ? 0 : current+1)
 }

 const prevSlide = () => {
  setCurrent(current === 0 ? length -1 : current-1)
 }

 
 let [selectedImageIndex, setSelectedImageIndex] = useState(null);

 const handleClick = (index) => {
  if(selectedImageIndex===null) 
  {setSelectedImageIndex(index);}
  else
   {setSelectedImageIndex(null);}
 };

 if(!Array.isArray(slides) || slides.length<=0)
 {
  return null;
 } 

  
  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
    {SliderData.map((slide,index) => {
      return (
        <div>
          {index === (current==0 ? length-1 : current-1) && (<img src={slide.image} alt="img" className='imagebk' />)}
         
         <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (<img src={slide.image} alt="img" className={selectedImageIndex === index ? 'highlighted' : 'image'}
          onClick={() => handleClick(index)}/>)}
         </div>

         {index === (current==length-1 ? 0 : current+1) && (<img src={slide.image} alt="img" className='imagefk' />)}
      </div>
    )      
  })}
    </section>
  )
}

export default ImageSlider
