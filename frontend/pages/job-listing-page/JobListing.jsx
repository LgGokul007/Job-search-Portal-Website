import React from "react"
import "./JobListing.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {pushstate} from "../../redux_store/slice"

export function JobListing(){
    console.log(3)

    const dispatch=useDispatch()
    const arrData=useSelector((state)=>state.value)

    const jobstatus=["APPLIED","INTERVIEWING","SELECTED","REJECTED"]

    React.useEffect(()=>{

        async function getData(){
            console.log(3.1)
            let response=await fetch("http://localhost:2000/api",{
                method:"GET",
                credentials:"include"
            })

            let dataReceived=await response.json()

            dispatch(pushstate(dataReceived))
               
        }
        console.log(3.2)
         getData()

    },[])

   

    let jobCards=arrData.map((el,index)=>{

        return(
            <div  id="card" key={index}>
                <div id="insideCard">
                <h1>Role: {el.position}</h1>
                <p>Company: {el.companyname}</p>
                
                    <p>Date Applied: {el.date}</p>
                    <p>Status of Application: {jobstatus[el.status]}</p>
                </div>
                
            </div>
        )
    })

    const emptyCards=<h1 id="emptylistings">use the entries button to add job descriptions here</h1>

    let cardsToshow=jobCards.length===0? emptyCards : jobCards


    return(<div>
            {cardsToshow}

            </div>


    )
}