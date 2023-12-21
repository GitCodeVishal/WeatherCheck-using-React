import React from 'react'
import searchIcon from './images/search.png'

const Search = ({setCity , handleSubmit}) => {
  return (
    <div className='Search'  >
       <form className='searchForm' onSubmit={handleSubmit} >
        <input
        className='searchINput'
        autoFocus
        type='text'
        placeholder='Enter City Name'
        required
        onChange={(e)=>setCity(e.target.value)}
        />
        <button className='searchIcon' type='submit'><img src={searchIcon}/></button>
       </form>
    </div>
  )

}

export default Search