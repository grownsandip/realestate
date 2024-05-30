import Slider from "../../components/slider/Slider";
import "./singlepage.scss";
import { singlePostData, userData } from "../../lib/dummyData";
import Map from "../../components/map/Map";
function SinglePage() {
  const data = singlePostData;
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={data.images} />
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
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="./images/utilities.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="./images/pets.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="./images/utilities.png" alt="" />
              <div className="featureText">
                <span>Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">
          <div className="feature">
              <img src="./images/school.png" alt="" />
              <div className="featureText">
                <span>school</span>
                <p>250 m away</p>
              </div>
            </div>
            <div className="sizes">
              <img src="./images/bus.png" alt="" />
              <span>Bus Stop</span>
              <p>100 m away</p>
            </div>
            <div className="sizes">
              <img src="./images/station.png" alt="" />
              <span>Railway Station</span>
              <p>300 m away</p>
            </div>
            <div className="sizes">
              <img src="./images/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </p>
          <div className="sizes"></div>
          <p className="title">Nearby places</p>
          <div className="listHorizontal"></div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="./images/chat.png" alt="" />
              Send a Message.
            </button>
            <button>
              <img src="./images/save.png" alt="" />
              Save the place.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
