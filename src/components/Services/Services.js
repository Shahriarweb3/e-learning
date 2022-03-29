import React, { useEffect, useState } from 'react';
import Test from '../Test/Test';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/Courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
        console.log(courses);
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    courses.map(course => <Test
                        key={course.id}
                        course={course}
                    ></Test>)
                }
            </div>
        </div>
    );
};

export default Services;