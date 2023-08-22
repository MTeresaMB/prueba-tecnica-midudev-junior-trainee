import { useState, useEffect } from 'react'
import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export const App = () => {
  const [fact, setFact] = useState('lorem ipsum cat fact whatever')
  const [imageUrl, setImageUrl] = useState()

  // saber hacer un fetch por sino nos dejan usar Axios u otra libreria
  // recupera cita al cargar la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, []) // no olvidar el array vacio para las dependencias, para que no se olvide poner useEffect(() => {}, []) aqui solo poner dependencias que pueden cambiar

  // recupera la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return
    // const firstWord = fact.split(' ').slice(0, 3).join(' ')
    const firstWord = fact.split(' ', 1).join(' ')
    console.log(firstWord)
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`image extracted using the first word for ${fact}`} />}
    </main>
  )
}

// usar renderizado condicional
