import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase_init";
import { useState } from "react";

const Login = () => {

    const provider = new GoogleAuthProvider;

    const [user, setUser] = useState(null)

    const handleLogIn = () => {
        signInWithPopup(auth, provider)
        .then(result =>{
            console.log(result.user)
            setUser(result.user)
        })

        .catch(error =>{
            console.log(error)
            setUser(null)
        })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log("Sign out done");
            setUser(null)
        })
        .catch(()=>{
            console.log("Error")
        })
    }


    return (
        <div>
            <h4>Login page</h4>
            
            
            {
                user ? <button onClick={handleSignOut}>Sign out</button> : <button onClick={handleLogIn}>Login with google</button>
            }
            <div>
                {
                    user && <div>
                        <p>{user.displayName}</p>
                        <img src={user.photoURL} alt="" />
                    </div>
                }
            </div>
        </div>
    );
};

export default Login;