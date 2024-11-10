import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "./firebase_init";

const Login2 = () => {


    const provider = new GithubAuthProvider;

    const handleGithub = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user)
        })
        .catch((error) => {
            console.log("ERROR" , error)
        })
    }

    return (
        <div>
            <h2>Login with Github</h2>
            <button onClick={handleGithub}>Log in with Github</button>
        </div>
    );
};

export default Login2;