import Slider from "../../components/slider/Slider"
import"./singlepage.scss"
import { singlePostData, userData } from "../../lib/dummyData";
function SinglePage() {
  const data=singlePostData;
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={data.images}/>
          <div className="info">
            <div className="top">
              <div className="posts">
                <h1>{data.title}</h1>
                <div className="address">
                  <img src="./images/location.png" alt="" />
                  <span>{data.address}</span>
                </div>
                <div className="price">$ {data.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{data.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper"></div>
      </div>
    </div>
  )
}

export default SinglePage
