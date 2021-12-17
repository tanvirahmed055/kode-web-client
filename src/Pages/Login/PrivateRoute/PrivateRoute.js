import React from 'react';
import {
    useLocation,
    Navigate
} from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import useFirebase from '../../../hooks/useFirebase';
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {
    let { loading } = useFirebase();
    let location = useLocation();

    const user = useSelector((state) => state?.user?.value);

    if (loading) {
        return <Spinner animation="grow" />;
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default PrivateRoute;