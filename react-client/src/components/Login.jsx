import { GoogleLogin } from "react-google-login";

const clientId = "942096996649-p7fs4580cci6ai7o0m63klicvff1cl5l.apps.googleusercontent.com";

function Login() {

const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
}

const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
}

    return (
        <div id="signInButton">
            <GoogleLogin 
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;