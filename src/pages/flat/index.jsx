import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LayoutDefault from '../../layout/default';
import Error from '../404';
import Slider from '../../components/slider';
import Informations from '../../components/informations';



export default function Flat() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true)
  const [isError404, setIsError404] = useState(false);
  const [isError, setIsError] = useState(false);
  const [flat, setFlat] = useState(null)

  useEffect(() => {

    fetch('/data/flats.json')
    .then(response => response.json())
    .then(results => {
      const selectedFlat = results.find(flat => flat.id === id)
      if(selectedFlat){
        setFlat(selectedFlat);
        setIsLoading(false);
      } else {
        setIsError404(true)
      }
    })
    .catch ((error) => {
      setIsError(true)
    })

  }, [id])


  if(isError) {
    return <LayoutDefault>
      <p>Une erreur est survenue</p>
      </LayoutDefault>
  }
  
  if(isError404) return <Error />

  if(isLoading) {
    return <LayoutDefault>
      <p>Chargement en cours...</p>
      </LayoutDefault>
  }

  return (
    <LayoutDefault>
      {flat.pictures && <Slider pictures={flat.pictures} />}
      <Informations />
    </LayoutDefault>
  )
}
