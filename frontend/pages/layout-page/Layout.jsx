
import { Outlet } from "react-router"
import "./Layout.css"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import { Profile } from "./ProfileLayout"
import { useState } from "react"


export function Layout() {

  const [popup,setPopup]=useState(false)
  console.log(2)

  const btn1 = useRef(null)
  const btn2 = useRef(null)

  const navigate = useNavigate()

  function MaindivClick(){
    if(popup){
      setPopup(prev=>!prev)
      
    }
    else{
      return
    }
  }


 

  function clicked(event) {
    console.log(2.1)

    if (event.target.id === "list1") {
      navigate("listings")

    }
    else {
      navigate("entries")

    }

  }

  return (
    <div  id="LayoutContainer"  onClick={MaindivClick}>
      <div id="profileContainer" style={{gridArea:"profile"}}>
        <Profile setPopup={setPopup} popup={popup}/>
      </div>

      <div id="mainContainer" style={{gridArea:"header"}}>
        <header>
          <button ref={btn1} className="links" id="list1" onClick={clicked} >Listings</button>
          <button ref={btn2} className="links" id="list2" onClick={clicked} >entries</button>

        </header>

        <Outlet />


      </div>

    </div>
  )
}