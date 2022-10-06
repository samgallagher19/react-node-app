import { GoogleLogin } from "react-google-login";

const clientId = "942096996649-p7fs4580cci6ai7o0m63klicvff1cl5l.apps.googleusercontent.com";

function Logout() {

const onSuccess = (res) => {
    console.log("LOGOUT SUCCESS!");
}
    return (
        <div id="signInButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;