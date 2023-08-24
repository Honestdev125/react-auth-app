import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import config from '../../socialConfig';

import { googleRegisterUser } from '../../redux/actions/authActions';

const GoogleLogin = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const loadGooglePlatform = () => {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
            const firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
        }

        loadGooglePlatform();
    }, []);

    const googleLogin = () => {
        window.gapi.auth.signIn({
            callback: (authResponse) => {
                googleSignInCallback(authResponse);
            },
            clientid: config.google,
            cookiepolicy: "single_host_origin",
            requestvisibleactions: "http://schema.org/AddAction",
            scope: "https://www.googleapis.com/auth/plus.login email"
        });
    }

    const googleSignInCallback = (e) => {
        if (e["status"]["signed_in"]) {
            window.gapi.client.load("plus", "v1", () => {
                if (e["access_token"]) {
                    getUserGoogleProfile(e["access_token"]);
                } else if (e["error"]) {
                    console.log('Import error', 'Error occurred while importing data');
                }
            });
        } else {
            console.log('Oops... Error occurred while importing data');
        }
    }

    const getUserGoogleProfile = (accessToken) => {
        const request = window.gapi.client.plus.people.get({
            userId: "me"
        });
        request.execute((response) => {
            if (response.error) {
                console.log(response.message);
                console.log('Import error - Error occurred while importing data');
                return;
            } else if (response.id) {
                const newGoogleUser = {
                    email: response.emails[0].value,
                    firstName: response.name.givenName,
                    lastName: response.name.familyName
                }
                dispatch(googleRegisterUser(newGoogleUser))
                // alert("Successful login from Google: " + response.displayName);
               
                return;
            }
        });
    }

    return (
        <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png'
            className='w-10 h-10'
            title="google login"
            alt="google"
            onClick={googleLogin}
        />
    );
}

export default GoogleLogin;