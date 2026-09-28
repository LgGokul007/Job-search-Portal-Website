import "./HomePage.css"
import imgfile from "../../assets/image-to-logo-result-vector.svg"
import { useNavigate } from "react-router"

export function HomePage() {
    console.log(4)

    const navigate=useNavigate()

    let description="Your personal hub to organize,manage and land your dream job efficiently. "

    
    return (
        <>
            <div id="mainbox" >
                <div id="welcomebox" style={{"gridArea":"box-1"}}>
                   <h2>WELCOME TO </h2>
                   <h1>CAREER TRACKER!</h1>
                   <p>{description}</p>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
                </div>
                
                <img  src={imgfile} alt="logo" style={{"gridArea":"box-2"}}></img>
               
                <div id="buttonbox" style={{"gridArea":"box-3"}}>
                    <button onClick={()=>navigate("/login")} id="startbtn">GET STARTED</button>
                    <button onClick={()=>navigate("/signup")} id="haveaccbtn">I'M NEW USER !!</button>
                    
                </div>
                <p style={{"gridArea":"box-4"}}>Simplyfy your job search journey.Track every application effortlessly</p>
            </div>
        </>
    )
}