import "./Signup.css"
import { useNavigate } from "react-router-dom"

export function Signup() {
    console.log(7)

    const navigate=useNavigate()

    async function register(formdata) {
        console.log(7.1)

        try {
           

            const send = await fetch("http://localhost:2000/auth/signup", {
                method: "POST",
            
                body: formdata
            })

            const response = await send.json()
            console.log(response)

            if(response.inserted){
                navigate("/login")
            }

            else{
                alert("SIGNING UP Failed!! Please Try again")
            }

        }

        catch (err) {
            console.log(err)
        }
    }



    return (
        <>
            <form action={register} id="formContainer">
                <label className="labels">Upload Profile:
                    <br />
                    <input className="input" name="profilepic" type="file" accept="image/*"></input>
                </label>


                <label className="labels">Username:
                    <br />
                    <input className="input" name="username" type="text"></input>
                </label>

                <label className="labels">Mail ID:
                    <br />
                    <input className="input" name="email" type="text"></input>
                </label>

                <label className="labels">Password:
                    <br />
                    <input className="input" name="password" type="text"></input>
                </label>

                <button className="button">
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <div className="front">
                        <span>Sign Up</span>
                    </div>
                </button>

            </form>
        </>
    )

}