import Navbar from "../../compoments/Navbar/Navbar"
import "./Contact.css"
import contactimage from "./contact.png"

function Contact() {
  return (
    <>
    <Navbar/>
 
    <h1>You are in Contact Page</h1>
    <img src={contactimage} className="conatctimage"/>
    </>
  )
}

export default Contact