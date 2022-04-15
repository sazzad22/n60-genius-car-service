import React from 'react';
import Experts from '../../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <h1 className='text-primary'>This is home</h1>
            
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;