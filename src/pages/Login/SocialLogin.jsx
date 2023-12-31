import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const SocialLogin = () => {
    const { googleSignIn,githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;                
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const loggedInUser = result.user;                
                console.log(loggedInUser)
                const saveUser = { name: loggedInUser.displayName || "demo name", email: loggedInUser.email || "demo@gmail.com"}
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div>
            <div className="divider">or</div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-accent btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
                <button onClick={handleGithubSignIn} className="btn ml-5 btn-circle btn-accent btn-outline">
                    <FaGithub />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;