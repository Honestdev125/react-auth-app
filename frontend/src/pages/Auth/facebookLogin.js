import React, { useEffect } from 'react';
import config from '../../socialConfig';

const FacebookLogin = () => {

    useEffect(() => {
        const loadFacebookSDK = () => {
            window.fbAsyncInit = function() {
                window.FB.init({
                    appId: config.facebook,
                    cookie: true,
                    xfbml: true,
                    version: 'v2.8'
                });
            };

            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            })(document, 'script', 'facebook-jssdk');
        }

        loadFacebookSDK();
    }, []);

    const facebookLogin = () => {
        window.FB.login(
            function(resp) {
                statusChangeCallback(resp);
            }.bind(this),
            { scope: 'email,user_work_history,user_education_history,user_location,public_profile' }
        );
    }

    const checkLoginState = () => {
        alert("Checking Login Status");
        console.log("Checking login status...........");

        window.FB.getLoginStatus(function(response) {
            alert("FB Callback");
            console.log("----------->");
            console.log(response);
            statusChangeCallback(response);
        });
    }

    const statusChangeCallback = (response) => {
        console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected') {
            alert("Connected to Facebook. Retrieving user from Facebook");
            fetchDataFacebook();
        } else if (response.status === 'not_authorized') {
            console.log('Import error', 'Authorize app to import data', 'error');
        } else {
            console.log('Import error', 'Error occurred while importing data', 'error');
        }
    }

    const fetchDataFacebook = () => {
        console.log('Welcome! Fetching your information....');

        window.FB.api('/me', function(user) {
            console.log(user);
            console.log('Successful login from Facebook: ' + user.name);
            alert('Successful login for: ' + user.name);
        });
    }

    return (
        <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png'
            className='w-10 h-10'
            title="facebook login"
            alt="facebook"
            onClick={facebookLogin}
        />
    );
}

export default FacebookLogin;