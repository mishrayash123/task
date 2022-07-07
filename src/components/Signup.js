import React from "react";
import {useState} from "react";
import {Link} from 'react-router-dom'
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from './firebase-config';
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {FcGoogle} from "react-icons/fc";

export default function Signup() {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [sy, setsy] = useState("");
    

    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    auth.languageCode = 'it';
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
      });

    const sum2 = async (event) => {
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
        
    };

    const signup = async (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, Email, Password).then((userCredential) => { // Signed in
            const user = userCredential.user;
            alert("user signed up successfully")
        }).catch((error) => {
            const errorCode = error.code;
            setsy(errorCode);
        });
    };

    return (
        <div className="mt-36 mb-56">
            
            <form onSubmit={signup}
                className=" mx-auto w-50 mt-5 bg-gradient-to-r from-rose-900 via-fuchsia-900 to-purple-900   border border-dark border border-3 border-opacity-100 rounded">
                <h5 className="text-center m-3 text-white">Sign up</h5>
                <a className=" btn  text-1xl text-center text-light bg-light  bg-opacity-10  w-100 flex items-center justify-center" rel="noreferrer noopener" onClick={sum2}>
                    Sign up with
                    <span className="mx-1 text-3xl">
                        <FcGoogle/>
                    </span>
                </a>
                <h5 className="text-center m-3 text-light text-2xl">OR</h5>
                <div className="m-3">
                    <label className="form-label text-white">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={
                            (e) => {
                                setEmail(e.target.value);
                            }
                        }/>
                </div>
            <div className="m-3">
                <label className="form-label text-white">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                    onChange={
                        (e) => {
                            setPassword(e.target.value);
                        }
                    }/>
            </div>
        <p className="m-3 text-warning">
            {sy} </p>
        <p className="m-3 text-white">If you have an account :
            <Link to="/login" className="nav-link text-warning">Log in</Link>
        </p>
        <button type="submit" className="btn btn-dark m-3"
            onClick={signup}>Sign up</button>
    </form>
    
</div>
    );
}
