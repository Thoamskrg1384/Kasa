import   { useState } from 'react';
import './style.scss';
import arrow_top from '../../assets/images/arrow_top.svg'

// Méthode de structure conseillée
// src / components

// partials 
    // navbar
    // footer
    // ...
// composants
  // card
  // title
  // description

// css (javascript)

export default function Dropdown ({ title, children }) {
  
    const [isOpen, setIsOpen] = useState(false);

    /**
     * Inverse la valeur de isOpen
    //  */
    const invertDropdownOpen = () => {
        setIsOpen(prev => !prev)
    }

    return (
    <div className='dropdown__container'>
      <div className={ isOpen && 'active' }>
        <div className={ 'dropdown__button--background' }>
          <div className={ 'dropdown__button--display' }>
            <span className='dropdown__button--title'>{title}</span>
            <span>
              <button className={ `dropdown__button ${isOpen && 'rotated'}`} onClick={ invertDropdownOpen }>
                  <img src={arrow_top} alt="afficher le texte"/>
              </button>
            </span>
          </div>
        </div>
        { isOpen && <div className={ 'dropdown__content' }>{ children }</div> }

      </div>
    </div>
    )
}

