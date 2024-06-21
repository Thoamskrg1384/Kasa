import './style.scss'

export default function Star ({lightOn}) {
  return (
    <div className={lightOn ? 'star--lightOn' : 'star'}>
      <i class="fa-solid fa-star"></i>
    </div>

  )
}

