import './style.scss'

export default function Card ({ title } ) {
  return (
    <div className={ 'card' }> 
      <div className={ 'card__figure' }>
        <img src="" alt="" />
      </div>
      <h2 className={ 'card__title' }>{title}</h2>
    </div>
  )
}