import { useState, useEffect } from 'react';
import Slide from '../slide';
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
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
            </svg>
          </button>
          <button className='button__slide--next' onClick={onNext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
            </svg>
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