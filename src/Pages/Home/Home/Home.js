import React from 'react';
import { Helmet } from 'react-helmet-async';
import Experts from '../../Experts/Experts';
import Banneer from '../Banner/Banneer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home-Genius Car Repair</title>
            </Helmet>
            <Banneer></Banneer>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;