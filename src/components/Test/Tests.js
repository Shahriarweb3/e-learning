import React, { useEffect, useState } from 'react';
import Test from './Test';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/Courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data.slice(0,4)));
        console.log(courses);
    }, [])
    return (
        <div>
            <div className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default Courses;