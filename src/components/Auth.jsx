import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../actions/AuthActions";
import Button from "./Button";

function Auth() {
    const auth = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();

  const loginHandler = () => {
      console.log("Authenticate");
      dispatch(authenticate());
  };

  return (
    <div>
      <Button primary onClick={loginHandler}>
        {auth ? "Logout" : "Login"}
      </Button>
    </div>
  );
}

export default Auth;
