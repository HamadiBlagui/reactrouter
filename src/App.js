import React, { useState } from 'react'
import MyNav from './Components/MyNav/MyNav'
import MoviesData from './Components/MoviesData/MoviesData'
import MoviesListe from './Components/MoviesListe/MoviesListe'
import './App.css'
import AddMovie from './Components/AddMovie/AddMovie'
import {Switch,Route} from 'react-router-dom'
import MovieDetails from './Components/MovieDetails/MovieDetails'




function App() {

  const [titleSearch,setTitleSearch]=useState('')
  const handleTitle=(input)=>{
  setTitleSearch(input)

  };


  const [ratingSearch,setRatingSearch]=useState(0)
  const handleStar=(input)=>{
    setRatingSearch (input)


  }

  const [data,setData]= useState(MoviesData)

const getData = (input)=>{
  setData([... data, input]);


}

  const[MoviesListData , setMoviesListData]=useState(MoviesData)
  const getMoviesData=(input)=>{
    setMoviesListData([...MoviesListData , input])
  }
  return (
    <div className="App"  >
     <Switch> 
       <Route exact path="/">

      <MyNav
      handleTitle={handleTitle}
      handleStar={handleStar}/>

      <AddMovie getData={getData}/>

      <MoviesListe
 
      titleSearch={titleSearch}
      ratingSearch={ratingSearch}
      data={data}
      />
      </Route>
      <Route path="/details/:id" component={MovieDetails} />
      </Switch>
    </div>
  )
}

export default App
