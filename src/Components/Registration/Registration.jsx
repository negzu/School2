import React, { useState } from 'react'
import { Form, Alert } from 'react-bootstrap';
import Login from '../Login/Login';


function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);
    




    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password || !phone || !profession) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));
            localStorage.setItem("phone", JSON.stringify(phone));
            localStorage.setItem("profession", JSON.stringify(profession));
            console.log("Saved in Local Storage");

            setLogin(!login)

        }

    }

    // Directly to the login page
    function handleClick() {
        setLogin(!login)
    }
    function infoClick() {
        setInfo(!info)
    }
   

    return (
        <>     <form onSubmit={handleFormSubmit}>
                <h3>Admin Registration</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Full Name" name="name" onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                </div>


                <div className="form-group">
                    <label>Phone No.</label>
                    <input type="Phone" className="form-control" placeholder=" 09xxxxxxxxx" onChange={(event) => setPhone(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>School Position</label>
                    <Form.Control as="select" onChange={(event) => setProfession(event.target.value)} >
                        <option>Teacher</option>
                        <option>Admin</option>
                        <option>Staff</option>
                    </Form.Control>
                </div>

                   <br></br>
                <button type="submit" className="btn btn-warning btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#" onClick={handleClick} >log in?</a>
                </p>
                {flag &&
                    <Alert color='primary' variant="danger" >
                         Every Field is important!
                </Alert>
                }

            </form> : <Login />
           
        </>
    )
}

export default Registration
