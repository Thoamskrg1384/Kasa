import './style.scss'

export default function Slide( {picture, alt} ) {

  return (
    <div className={ 'slide__container' }>
      <img src={picture} alt={alt} />
    </div>
  )
}