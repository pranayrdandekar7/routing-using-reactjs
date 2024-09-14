import Navbar from "../../compoments/Navbar/Navbar"
import "./About.css"
import aboutimage from "./smiley.png"

function About() {
  return (<>
    <Navbar/>
    <h1>You are in About Page</h1>
    <div>
        <img src ={aboutimage} className="aboutimage"/>
    </div>
    </>
  )
}

export default About