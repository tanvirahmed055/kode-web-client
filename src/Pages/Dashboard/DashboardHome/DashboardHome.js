import React from 'react';
import { useSelector } from "react-redux";


const DashboardHome = () => {

    const user = useSelector((state) => state?.user?.value);
    return (
        <div>
            <h2 className="fw-bold fst-italic pt-5">Welcome to your Dashboard, <span className="text-primary">{user?.displayName}</span></h2>

            <h3 className="fw-bold fst-italic pt-5">Your Email:<span className="text-primary">&nbsp;{user?.email}</span></h3>

        </div>
    );
};

export default DashboardHome;