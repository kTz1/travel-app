import { useState, useRef } from "react";
import { Room, Cancel } from "@material-ui/icons";
import "./register.scss";
import axios from "axios";

export default function Register({ setShowRegister }) {
    const [succes, setSucces] = useState(null);
    const [error, setError] = useState(null);

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            username: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        try {
            await axios.post("/users/register", newUser);
            setError(false);
            setSucces(true);
        } catch(err) {
            setError(true);
        }
    }
    return (
        <div className="registerContainer">
            <div className="logo">
                <Room />
                TravelPin
            </div>
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder="username" ref={nameRef} />
                <input type="text" placeholder="email" ref={emailRef} />
                <input type="password" placeholder="password" ref={passwordRef} />
                <button className="registerBtn">Register</button>
                {succes && (
                    <span className="succes">Register succesfull! You can login!</span>
                )} {" "} 
                {error && (
                    <span className="failure">Something went wrong!</span>
                )} {" "}
            </form>
            <Cancel className="registerCancel" onClick={() => setShowRegister(false)} />
        </div>
    )
}
