import React from 'react';
import Tutors from '../Tutors/Tutors';
import Test from '../Test/Test';
import Tests from '../Test/Tests';
import Banner from './Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="my-8 text-3xl">Top Courses</h2>
            <Tests></Tests>
            <h2 className="my-8 text-2xl">Our Top Tutors</h2>
            <Tutors></Tutors>

        </div>
    );
};

export default Home;