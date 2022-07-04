import React, { useEffect } from "react";

const Mogin = () => {
  const handle = (res) => {
    console.log(res);
  };
  useEffect(() => {
    google.accounts.id.intialize({
      client_Id:
        "444938917597-e2f4of6pm1v35g9fo9rms3u89n7ukfe6.apps.googleusercontent.com ",
      callBack: handle,
    });

    google.accounts.id.renderButton(document.getElementById("signin"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="app">
      <div id="signin"></div>
    </div>
  );
};
export default Mogin;
