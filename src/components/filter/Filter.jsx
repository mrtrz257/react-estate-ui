import './filter.scss';

const filter = () => {
  return (
    <div className='filter'>
        <h1>Search results for <b>London</b></h1>

        <div className="top">
          <div className="item">
            <label htmlFor="city">Location</label>
            <input type="text" id='city' name='city' placeholder='City Location' />
          </div>
        </div>

        <div className="bottom">
          <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type" id="type">
                <option value="any">Any</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
              </select>
            </div>
          <div className="item">
              <label htmlFor="property">Property</label>
                <select name="property" id="property">
                  <option value="any">Any</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
            </div>
          <div className="item">
              <label htmlFor="minPrice">Min Price</label>
              <input type="number" id='minPrice' min={0} max={10000000} name='minPrice' placeholder='any' />
            </div>
            <div className="item">
              <label htmlFor="maxPrice">Max Price</label>
              <input type="number" id='maxPrice' min={0} max={10000000} name='maxPrice' placeholder='any' />
            </div>
          <div className="item">
              <label htmlFor="bedroom">Bedroom</label>
              <input type="text" id='bedroom' name='bedroom' placeholder='any' />
            </div>

            <button>
              <img src="/search.png" alt="search-btn" />
            </button>
        </div>
    </div>
  )
}

export default filter