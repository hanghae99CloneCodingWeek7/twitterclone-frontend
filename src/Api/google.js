import React, {useCallback, useEffect} from 'react';
import GoogleLogin from 'react-google-login';
import  {gapi} from "gapi-script";
import { useNavigate } from 'react-router-dom';


const clientId = "887841571801-8kgbi9f6the0jeji8kvd0d6ripinhe7m.apps.googleusercontent.com"


function LoginGoogle({onSocial}){
    useEffect(()=>{
        function start() {
            gapi.client.init({
                clientId,
                scope:'email',
            });
        }
        gapi.load('client:auth2', start);
    },[]);

    let navigate = useNavigate()

    const  onSuccess = (response) => {
        navigate("/home")
        console.log(response)
    };
    const onFailure = (response) =>{
        navigate("/")
        console.log(response);
    };
  return (
    <div>
        <GoogleLogin
         clientId={clientId}
         buttonText="구글아이디로 로그인하기"
         onSuccess={onSuccess}
         onFailure={onFailure}
         />
    </div>
  )
}
export default LoginGoogle
