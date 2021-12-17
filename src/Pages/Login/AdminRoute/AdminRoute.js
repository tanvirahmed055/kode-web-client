import React from 'react';
import {
    useLocation,
    Navigate
} from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import useFirebase from '../../../hooks/useFirebase';
import { useSelector } from "react-redux";

const AdminRoute = ({ children, ...rest }) => {
    let { role, userLoading } = useFirebase();
    let location = useLocation();

    if (userLoading) {
        return <Spinner animation="grow" />;
    }
    if (role === 'admin') {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default AdminRoute;