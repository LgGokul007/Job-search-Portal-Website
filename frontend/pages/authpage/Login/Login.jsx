import "./Login.css"
import { useNavigate } from "react-router-dom"

export function Login() {
    console.log(6)

    const navigate=useNavigate()

    async function Verify(formdata) {
        console.log(6.1)
        
        try {
            const forminfo = Object.fromEntries(formdata)
            const send = await fetch("http://localhost:2000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials:"include",
                body: JSON.stringify(forminfo)
            })
            const response = await send.json()

            if(response.login){
                navigate("/layout")
            }

            else{
                alert(`Login Failed!! Please try again...`)
            }
        }
        catch (err) {
            console.log(err)
        }

    }

    return (
        <>
            <form action={Verify} id="formContainer">
                <label className="labels">Mail ID:
                    <br />
                    <input type="email" title="enter password" name="email" className="input" placeholder="email"></input>
                </label>

                <label className="labels">Password:
                    <br />
                    <input type="password" title="enter password" name="password" className="input" placeholder="password" ></input>
                </label>
                <button className="button">
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <div className="front">
                        <span>Log IN</span>
                    </div>
                </button>
            </form>
        </>
    )
}