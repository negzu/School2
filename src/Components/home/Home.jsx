import React, { useState } from 'react'
import axios from "axios"

function Home() {

    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");



    // THIS POST REQUESTION IS GIVING ERROR...
    function submitHanddler(e) {
        e.preventDefault();

      
        console.log(first, second, third);

        alert("OOPS! coudnt Find Anythng")

        try {
            axios.post(`$date=${first}&Announcement=${second}&Event=${third}`)
                .then(response => {
                    console.log(response);

                })

        } catch (e) {
            alert("OOPS! Error occured")
            console.log(e);
        }

    }

    return (
        <>
            <h1>Enter The Event </h1>
            <form onSubmit={submitHanddler}>
                <div className="form-group">
                    <label>Date</label>
                    <input type="text" className="form-control" placeholder="Date of event" onChange={(event) => setFirst(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Announcement</label>
                    <input type="text" className="form-control" placeholder="Announcement" onChange={(event) => setSecond(event.target.value)} />
                </div>


                <div className="form-group">
                    <label>Event Link</label>
                    <input type="text" className="form-control" placeholder="Event Link" onChange={(event) => setThird(event.target.value)} />
                </div>

               
            </form>
        </>
    )
}

export default Home
