import { useState } from 'react'
import './searchBar.scss'


const SearchBar = () => {

  const [query, setQuery] = useState({
    type: 'buy',
    location: '',
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = ( value ) => {
    setQuery((prev) => ({...prev, type: value}));
  };

  return (
    <div className='searchBar'>

      <div className="type">
        <button onClick={()=>switchType('buy')} className={query.type === 'buy' ? 'active' : ''}>
          Buy
        </button>
        <button onClick={()=>switchType('rent')} className={query.type === 'rent' ? 'active' : ''}>
          Rent
        </button>
      </div>

      {/* should remove prevent default */}
      <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" name='location' placeholder='City Location' />
        <input type="number" name='minPrice' min={0} max={10000000} placeholder='Min Price' />
        <input type="number" name='maxPrice' min={0} max={10000000} placeholder='Max Price' />
        <button>
          <img src="/search.png" alt="search-btn" />
        </button>
      </form>

    </div>
  )
}

export default SearchBar