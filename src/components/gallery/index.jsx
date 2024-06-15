import React, {useState, useEffect} from 'react';
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

  return (
    <div className="gallery__container">
        {/* {data.map(flat => (
          <Card title={flat.title} />
        ))} */}
    </div>
  )
}