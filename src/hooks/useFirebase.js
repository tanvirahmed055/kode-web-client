import { useState, useEffect } from 'react';
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";



initializeAuthentication();

const useFirebase = () => {


    const [loading, setLoading] = useState(true);

    const [userLoading, setUserLoading] = useState(true);

    const [role, setRole] = useState('');


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

                const url = `https://sheltered-sea-63278.herokuapp.com/user?email=${user?.email}`

                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        setRole(data?.role)
                        //console.log('checking role', data?.role);
                        //console.log('printing role', role);
                        setUserLoading(false);

                    })



            } else {
                // User is signed out
                // ...
                // setUserInfo({});
                dispatch(logout());
                setRole('');

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
        handleLogOut,
        updateProfile,
        auth,
        loading,
        setLoading,
        userLoading,
        role
    };

};

export default useFirebase;