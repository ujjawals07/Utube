import GoogleLogin from "react-google-login";
import React, { useState } from "react";

function GG() {
  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = (googleData) => {
    console.log(googleData);
  };

  return (
    <React.Fragment>
      <h1>React Google Login App</h1>
      <div>
        <GoogleLogin
          clientId={
            "444938917597-e2f4of6pm1v35g9fo9rms3u89n7ukfe6.apps.googleusercontent.com"
          }
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
        ></GoogleLogin>
      </div>
    </React.Fragment>
  );
}

export default GG;
