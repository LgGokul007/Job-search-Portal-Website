export function Popup({logout,close}){

    return(
        <div id="popup-container" onClick={(e)=>e.stopPropagation()}>
            <h3>Are you sure do you want to Log out!!</h3>
            <div>
                <button onClick={logout}>Logout</button>
                <button onClick={()=>close(prev=>!prev)}>Close</button>
            </div>
          
        </div>
    )
}