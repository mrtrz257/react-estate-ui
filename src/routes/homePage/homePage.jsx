import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

const HomePage = () => {
  return (
    <div className='homePage'>
        <div className="textContainer">
            <div className="wrapper">

                <h1 className='title'>
                    Find Real Estate & Get Your Dream Place
                </h1>

                <p>
                    Search places to buy or rent. You can search based on city, minimum
                    and maximum price. Find the house that fits your necesities!
                </p>

                <SearchBar />

                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Awards Gained</h2>
                    </div>
                    <div className="box">
                        <h1>1200</h1>
                        <h2>Properties Ready</h2>
                    </div>
                </div>

            </div>
        </div>

        <div className="imgContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage