import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as AuthorizationAction from "../Reducers/Auth";
const arr =
  "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.channel-memberships.creator https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtubepartner https://www.googleapis.com/auth/youtubepartner-channel-audit";


const GoogleAuth = ({ dispatch, isSignedIn, userId }) => {
  const [auth, setAuth] = useState(null);
  console.log(isSignedIn);
  useEffect(() => {
    const params = {
      clientId:
        "59123210809-f1467bc10457beus037q99lqdjl0q3be.apps.googleusercontent.com",
      scope: arr,
      plugin_name: "My Project 23712",
    };

    window.gapi.load("client:auth2", () => {
      window.gapi.client.init(params).then(() => {
        setAuth(window.gapi.auth2.getAuthInstance());
        onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        console.log(
          window.gapi.auth2.getAuthInstance().currentUser.yb.Cc.access_token,
          "lund"
        );
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange);
      });
    });
  }, []);

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      console.log(isSignedIn, "LUNCH");
      dispatch(
        AuthorizationAction.signIn(
          window.gapi.auth2.getAuthInstance().currentUser.get().getId()
        )
      );
    } else {
      dispatch(AuthorizationAction.signOut());
    }
  };

  const onSignInClick = () => {
    auth.signIn();
  };

  const onSignOutClick = () => {
    auth.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <div>
          <button onClick={onSignOutClick} className="ui red google button">
            {" "}
            <i className="google icon" />
            Signout
          </button>
        </div>
      );
    } else {
      return (
        <button onClick={onSignInClick} className="ui red google button">
          {" "}
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = (state) => {
  console.log(state.auth);
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

export default connect(mapStateToProps)(GoogleAuth);
