import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { useState } from "react";
const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGithubSignUp = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleGithubSignUp}>Github Sign In</button>
        </>
      )}
      {user && (
        <div>
          <img src={user.photoURL} alt="" />
          <h2>User: {user.displayName}</h2>
          <p>email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
