import React from "react"
import "./JobListing.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { pushstate } from "../../redux_store/slice"
import { ListingSkeleton } from "./Skeleton"
import { useState } from "react"


export function JobListing() {

    const [loading,setLoading]=useState(true)
    console.log(3)

    const dispatch = useDispatch()
    const arrData = useSelector((state) => state.value)

    const jobstatus = ["APPLIED", "INTERVIEWING", "SELECTED", "REJECTED"]

    React.useEffect(() => {

        setTimeout(()=>{
            async function getData() {

                console.log(3.1)
                let response = await fetch("http://localhost:2000/api", {
                    method: "GET",
                    credentials: "include"
                })

                let dataReceived = await response.json()

                dispatch(pushstate(dataReceived))

            
        }
        console.log(3.2)
        getData()
        setLoading(false)
        },5000)

            

        

    }, [])



    let jobCards = arrData.map((el, index) => {

        return (
            <div id="card" key={index}>
                <div id="insideCard">
                   <h1>Role: {el.position}</h1>
                    <p>Company: {el.companyname}</p>
                    <p>Date Applied: {el.date}</p>
                    <p>Status of Application: {jobstatus[el.status]}</p>
                </div>

            </div>
        )
    })

    const waitingTime = Array.from({length:10}).map((el,index)=> <ListingSkeleton key={index}/>) 
    const emptyCards=<h1 id="#emptylistings">Please add job description here !!!</h1>

    let cardsToshow = jobCards.length === 0 ? emptyCards : jobCards


    return (<div>
        {loading ?waitingTime:cardsToshow }

    </div>


    )
}