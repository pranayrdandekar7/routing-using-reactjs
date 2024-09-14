import Navbar from "../../compoments/Navbar/Navbar"
import "./Home.css"
import homeimage from"./home.png"


function Home() {
  return (<>
    <Navbar/>
    <div>
      <h1>You are in Home Page</h1>
      <img src= {homeimage}className="homepage-image"/>
    
    </div>
 
    </>
  )
}

export default Home