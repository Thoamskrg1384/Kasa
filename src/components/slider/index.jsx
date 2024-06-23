import { useState, useEffect } from 'react';
import Slide from '../slide';
import arrow_left from '../../assets/images/arrow_left.png'
import arrow_right from '../../assets/images/arrow_right.png'
import './style.scss'

export default function Slider({ pictures }) {
  
  const [currentSlide, setCurrentSlide] = useState(0)

  /**
   * affiche la photo précédente et renvoie à la dernière photo du carrousel après la première.
   */
  const onPrevious = () => {
    setCurrentSlide(prev => (prev === 0 ? pictures.length - 1 : prev - 1) )
  }

  /**
   * affiche la photo suivante et renvoie à la première photo du carrousel après la dernière.
   */
  const onNext = () => {
    setCurrentSlide(prev => (prev === pictures.length - 1 ? 0 : prev + 1))
    
  }

  return (
    <div className={ 'slider' }>

      {pictures.length > 1 && (
        <div className='buttons__slide'>
          <button className='button__slide--previous' onClick={onPrevious}>
            <img src={arrow_left} alt="photo précédente" />
          </button>
          <button className='button__slide--next' onClick={onNext}>
            <img src={arrow_right} alt="photo suivante" />
          </button>
        </div>

        )}


        <Slide picture={ pictures[currentSlide] } alt={`Image n°${currentSlide + 1}`} />

        {pictures.length > 1 && (
          <span className='slide__indicator'>
            {currentSlide + 1}/{pictures.length}
          </span>
        )}
        
    </div>
  )
}