import {useState, useEffect} from 'react';
import Card from "../card"
import './style.scss'

export default function Gallery () {

  const [data, setData] = useState([])

  useEffect(() => {
      fetch('/data/flats.json')
        .then(response => response.json())
        .then(results => {
            setData(results)
        })
  }, [])

// console.log(data);

  return (
    <div className='gallery__padding'>
      <div className="gallery__container">
          {data.map(flat => (
            <Card
              key= {flat.id}
              id={ flat.id }
              title={flat.title}
              cover={flat.cover}
              />
          ))}
      </div>
    </div>

  )
}