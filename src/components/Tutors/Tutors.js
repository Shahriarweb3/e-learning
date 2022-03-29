import React from 'react';
import './Tutors.css'
import tutor1 from '../../images/Tutors/tutor1.jpg';
import tutor2 from '../../images/Tutors/tutor2.jpg';
import tutor3 from '../../images/Tutors/tutor3.jpg';
import tutor4 from '../../images/Tutors/tutor4.jpg';
import tutor5 from '../../images/Tutors/tutor5.jpg';


const Tutors = () => {
    return (
        <div className="px-8 mx-8 flex-none sm:flex-1 md:flex-initial lg:flex justify-evenly rounded shadow-inner">
            <div className="p-6 single-doctor">
                <img className="doctor-image" src={tutor1} alt="" />
                <br />
                <h4>Name: <span className="text-yellow-500 font-bold">Jason Steinberg</span></h4>
                <h6>Finincial Specialist</h6>
            </div>
            <div className="p-6 single-doctor">
                <img className="doctor-image" src={tutor2} alt="" />
                <br />
                <h4>Name: <span className="text-yellow-500 font-bold">Frank Lane</span></h4>
                <h6>Bookkeeping Specialist</h6>
            </div>
            <div className="p-6 single-doctor">
                <img className="doctor-image" src={tutor3} alt="" />
                <br />
                <h4>Name: <span className="text-yellow-500 font-bold">Alexander beith</span></h4>
                <h6>Investment Analyst</h6>
            </div>
            <div className="p-6 single-doctor">
                <img className="doctor-image" src={tutor4} alt="" />
                <br />
                <h4>Name: <span className="text-yellow-500 font-bold">Immanuel Jason</span></h4>
                <h6>Accounting Specialist</h6>
            </div>
            <div className="p-6 single-doctor">
                <img className="doctor-image" src={tutor5} alt="" />
                <br />
                <h4>Name: <span className="text-yellow-500 font-bold">Keith Davis</span></h4>
                <h6>Risk Management Expert</h6>
            </div>

        </div>
    );
};

export default Tutors;