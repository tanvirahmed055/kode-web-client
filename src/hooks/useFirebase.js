import { useState, useEffect } from 'react';
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";



initializeAuthentication();

const useFirebase = () => {

    const [userInfo, setUserInfo] = useState(null);

    const [loading, setLoading] = useState(true);




    const auth = getAuth();

    const dispatch = useDispatch();




    const handleRegistration = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }


    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }





    useEffect(() => {

        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                //console.log(user?.email);
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // setUserInfo(user);
                // ...

                dispatch(login(user));





            } else {
                // User is signed out
                // ...
                // setUserInfo({});
                dispatch(logout());


            }
            setLoading(false);
        });
        return () => unsubscribed;
    }, [])


    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setLoading(false);
            dispatch(logout());
        }).catch((error) => {
            // An error happened.
        });

    }

    return {
        handleRegistration,
        handleLogin,
        userInfo,
        setUserInfo,
        handleLogOut,
        updateProfile,
        auth,
        loading,
        setLoading
    };

};

export default useFirebase;