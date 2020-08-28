import React from 'react';
import './Course.css'

const Course = (props) => {
    const {name, details, instructor, price, duration} = props.course;
    return (
        <div className="course">
            <h2 className="course-name">{name}</h2>
            <h6>Honorable Instructor: {instructor}</h6>
            <p>{details}</p>
            <p>Course Duration: {duration}</p>
            <p className="price"><b>Price: ${price}</b></p>
            <button className="enroll-button" onClick={() => props.handleAddCourse(props.course)}>Enroll Now</button>
        </div>
    );
};

export default Course;