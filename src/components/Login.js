import React from "react";
import {useState} from "react";
import {Link} from 'react-router-dom'
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from './firebase-config';


export default function Login() {
    const [LoginEmail, setaLoginEmail] = useState("");
    const [LoginPassword, setLoginPassword] = useState("");
    const [sk, setsk] = useState("");
    const [sh, setsh] = useState("");

    const login = async (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, LoginEmail, LoginPassword).then((userCredential) => { // Signed in
            const user = userCredential.user;
            setsh("user signed in successfully")
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            setsk(errorCode);
        });
    };

    return (
        <div>
            <p className="mt-5 text-warning text-center">
                {sh} </p>
            <form onSubmit={login}
                className="mt-3 bg-secondary position-absolute top-50 start-50 translate-middle border border-dark border border-3 border-opacity-100 rounded">
                <h5 className="text-center m-3">Login</h5>
                <div className="m-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={
                            (e) => {
                                setaLoginEmail(e.target.value);
                            }
                        }/>
                </div>
            <div className="m-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                    onChange={
                        (e) => {
                            setLoginPassword(e.target.value);
                        }
                    }/>
            </div>
        <p className="m-3 text-warning">
            {sk} </p>
        <p className="m-3">If you don't have an account :
            <Link to="/signup" className="nav-link text-warning">Signup</Link>
        </p>
        <button type="submit" className="btn btn-dark m-3"
            onClick={login}>Login</button>
    </form>
    <div className=" mt-5 position-absolute top-100 start-50 translate-middle">
        <h5 className=" text-center">Made ♡  by Yash</h5>
    </div>
</div>
    );
}