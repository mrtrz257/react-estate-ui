import Slider from '../../components/slider/Slider'
import './singlePage.scss'
import { singlePostData, userData } from '../../lib/dummydata'

export const SinglePage = () => {
  return (
    <div className='singlePage'>

      <div className="details">

        <div className="wrapper">
          <Slider images={singlePostData.images}/>
          <div className="info">

            <div className="top">

              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="pin-img" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">
                  ${singlePostData.price}
                </div>
              </div>

              <div className="user">
                <img src={userData.img} alt="user-img" />
                <span>{userData.name}</span>
              </div>
            </div>

            <div className="bottom">
              {singlePostData.description}
            </div>

          </div>
        </div>
      </div>


      <div className="features">
        <div className="wrapper">
                  
        </div>
      </div>
    </div>
  )
}
