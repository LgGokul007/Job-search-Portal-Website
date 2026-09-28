import React from "react"
import DefaulprofilePic from "../../assets/defaultpic.jpg"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export function Profile() {
    const navigate=useNavigate()

    console.log(2.2)


    const [profileInfo, setProfileInfo] = React.useState({
        "name": "guest",
        "mail": "Guest@gmail.com",
        "profilepic":DefaulprofilePic
    })

    React.useEffect(() => {
        async function fetching() {
            console.log(2.3)

            const getdata = await fetch("http://localhost:2000/api/profile", {
                method: "GET",
                credentials: "include"
            })
            const response = await getdata.json()
            console.log(response)

            setProfileInfo(() => {
                return {
                    "name": response.username,
                    "mail": response.mailid,
                    "profilepic": response.profilepic
                }
            }

            )

        }
        fetching()
    }, [])

    const data=useSelector(state=>state.value)
    const interviewCount={
        Applied:0,
        Interviewing:0,
        Rejected:0,
        Selected:0
    }

    data.filter(el=>{
        if(el.status==0){
            interviewCount.Applied+=1

        }
        else if(el.status==1){
            interviewCount.Interviewing+=1

        }
        else if(el.status==2){
            interviewCount.Selected+=1

        }
        else{
            interviewCount.Rejected+=1

        }
    })


    async function logout(){
        const sending=await fetch("http://localhost:2000/auth/logout",{
            method:"POST",
            credentials:"include"
        })
        const resp=await sending.json()
        if(resp.status=="success"){
            navigate("/login")


        }
        else{
            alert("LogOut failed Try Again...")
        }

        

    }

    
    
    return (
        <>
            <img id="profileimg" src={profileInfo.profilepic} alt="profile-pic"></img>
            <h1 id="profileName">{profileInfo.name}</h1>
            <p id="profilemail">{profileInfo.mail}</p>
            <h3>Applied:{interviewCount.Applied}</h3>
            <h3>Interviewing:{interviewCount.Interviewing}</h3>
            <h3>Rejected:{interviewCount.Rejected}</h3>
            <h3>Selected:{interviewCount.Selected}</h3>

            <button onClick={logout}>LOG OUT</button>
        </>
    )
}