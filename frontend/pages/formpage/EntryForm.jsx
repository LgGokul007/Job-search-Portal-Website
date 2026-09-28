import "./EntryForm.css"

export function EntriesForm() {
    console.log(5)


    async function submitForm(formdata) {
        console.log(5.1)

        let formObj=Object.fromEntries(formdata)
        let posting= await fetch("http://localhost:2000/api",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            credentials:"include",
            body:JSON.stringify(formObj)
        })

        let response= await posting.text()
        console.log(response)
    }

    return (
        <>
            <form action={submitForm} id="formContainer">
                <label className="labels" id="companyName">Company Name :
                    <br />
                    <input className="input" id="nameinput" type="text" name="companyname" required></input>
                </label>

                <label className="labels" id="position">Position Applied For :
                    <br />
                    <input className="input" id="positioninput" type="text" name="position" required></input>
                </label>

                <label className="labels" id="status">Status
                    <br />
                    <select name="status" className="input" id="statusinput">
                        <option value="0">Applied</option>
                        <option value="1">Interviewing</option>
                        <option value="2">Selected</option>
                        <option value="3">Rejected</option>
                    </select>
                </label>

                <label className="labels" id="date">Applied Date :
                    <br />
                    <input className="input" id="dateinput" type="date" name="date"></input>

                </label>
                <button className="button">
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <div className="front">
                        <span>Submit</span>
                    </div>
                </button>
            </form>
        </>
    )
}