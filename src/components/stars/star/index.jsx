import './style.scss'

export default function Star ({lightOn}) {
  return (
    <div className={lightOn ? 'star--lightOn' : 'star'}>
      <i className="fa-solid fa-star"></i>
    </div>

  )
}

