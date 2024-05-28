import "./layout.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./routes/homePage/Home";
function App() {
  return (
    <div className="layout">
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="contents">
      <Home/>
      </div>
      </div>
  )
}
export default App
