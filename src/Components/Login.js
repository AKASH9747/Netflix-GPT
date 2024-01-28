import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background img"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl pb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input type="text" placeholder="Full Name" className="p-2 my-2 w-full rounded-md bg-gray-700" />
        )}
        <input type="text" placeholder="Email or phone number" className="p-2 my-2 w-full rounded-md bg-gray-700" />
        <input type="password" placeholder="Password" className="p-2 my-2 w-full rounded-md bg-gray-700" />
        <button className="p-2 my-4 bg-red-600 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p>
          {isSignInForm ? "New to Netflix?" : "Already a user?"}
          <span onClick={toggleSignIn} className="text-decoration-line: underline cursor-pointer mx-2">
            {isSignInForm ? "Sign Up" : "Sign In"}
          </span>{" "}
          now
        </p>
      </form>
    </div>
  );
};

export default Login;
