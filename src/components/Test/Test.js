import React from 'react';
import './Test.css';
import { Link } from 'react-router-dom';

const Test = (props) => {
    const { id, courseName, review, reviewCount, studentEnrolled, price, img } = props.course;
    return (
        <div>

            <div className=" p-8 rounded overflow-hidden shadow-lg">
                <img className="w-full course-image" src={img} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{courseName}</div>
                    <p className="text-gray-700 text-base">
                    <small className="review"><span>Review: {review} |</span><span>{reviewCount} Reviews |</span><span>{studentEnrolled} Enrolled</span></small>
                    </p>
                    <p className="text-yellow-400 font-bold mt-4">Fee: $ {price}</p>
                    <br />
                    <Link to={`/test/${id}`}><button className='lg:my-2 lg:px-4 md:px-2 md:my-2 lg:py-2 bg-red-700 hover:bg-blue-700 text-xs font-bold py-1 text-white font-normal px-2 rounded-full'>Enroll Course</button></Link>

                </div>
            </div>

        </div>
    );
};

export default Test;