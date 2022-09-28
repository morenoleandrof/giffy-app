import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import ListOfGifs from '../../components/ListOfGifs';
import { useGifs } from '../../hooks/useGifs';
import TrendingSearches from '../../components/TrendingSearches';


export default function Home () {

  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation() //devuelve un array de 2 posiciones 

  const {loading, gifs} = useGifs()

  const handleSubmit = evt => {
    evt.preventDefault()
    // navegar a otra ruta
    pushLocation(`/search/${keyword}`)
    
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input placeholder='Search a GIF here...' type="text" value={keyword} onChange={handleChange}/>
    </form>
    
    <h3>Ultima busqueda</h3>
    <ListOfGifs gifs={gifs}/>

    <h1 className='App-title'> Best Gifs you can find ⬇ </h1>
   
    <TrendingSearches />

    <h1 className='App-title'> Best Gifs you can find ⬆ </h1>
    </>
  )
}

