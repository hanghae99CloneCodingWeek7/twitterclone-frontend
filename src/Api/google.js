import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios'
import { useHistory } from "react-router";


function LoginGoogle(){
    const clientId = ""
    // const history = useHistory()
    
    const onSuccess = async(response) => {
    	console.log(response);
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy="single_host_origin"
            />
        </div>
    )
}

export default LoginGoogle