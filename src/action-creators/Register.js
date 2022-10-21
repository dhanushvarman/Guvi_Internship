import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function Register() {

    const images = ["https://swansoftwaresolutions.com/wp-content/uploads/2020/04/05.14.20-Meet-a-Full-Stack-Developer-Vlad-Ryba.jpg", "https://d3mxt5v3yxgcsr.cloudfront.net/courses/5926/course_5926_image.jpg", "https://miro.medium.com/max/2400/2*FMIQlirVkoZ0_w72krYr-w.jpeg"];

    const [index, setIndex] = useState(0);
    const delay = 3000;

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay);
        return () => { };
    }, [index]);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            state: "",
            dob: "",
            phonenumber: "",
            age: "",
            gender: "",
        },
        validate: (values) => {
            let error = {};

            if (!values.name) {
                error.name = "Please enter a name";
            }
            if (values.name && (values.name.length <= 2 || values.name.length > 15)) {
                error.name = "Name must be between 3 to 15 characters";
            }
            if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.email)) {
                error.email = "Please enter a email";
            }
            if (values.phonenumber.toString().length != 10) {
                error.phonenumber = "Please enter a valid number";
            }

            let age = new Date().getFullYear() - parseInt(values.dob.split("-")[0]);

            if (age < 18) {
                error.dob = "You must be above 18"
            }

            return error
        },
        onSubmit: async (values) => {
            navigate("/")
            try {
                await axios.post("https://634579c9dcae733e8ff3a795.mockapi.io/internship", values);
                
            } catch (error) {
                alert("Error")
            }
        }

    })

    return (

        <div className='container-fluid'>
            <h1>Welcome to Register !</h1>
            <Link to={"/"} href="#" class="d-none d-sm-inline-block btn btn-sm btn-warning shadow-sm mb-5"><i
            class="fas fa-arrow-left fa-lg text-grey-50"></i> Back</Link>
            <div className='row'>
                <div className='col-md-4'>
                    <div className="slideshow">
                        <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                            {images.map((image, index) => (
                                <img src={image} className="slide" key={index} />
                            ))}
                        </div>
                        <div className="slideshowDots">
                            {images.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`slideshowDot${index === idx ? " active" : ""}`}></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='col-md-8'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label>Username</label>
                                    <input name="name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                        className={`form-control ${formik.errors.name ? 'error-box' : ''} 
                        ${formik.touched.name && !formik.errors.name ? 'success-box' : ''}`}
                                        type={"text"}>

                                    </input>
                                    {
                                        formik.errors.name ? <span style={{ color: "red" }}>{formik.errors.name}</span> : null
                                    }
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label>Email</label>
                                    <input name="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        className={`form-control ${formik.errors.email ? 'error-box' : ''} 
                        ${formik.touched.email && !formik.errors.email ? 'success-box' : ''}`}
                                        type={"text"}>

                                    </input>
                                    {
                                        formik.errors.email ? <span style={{ color: "red" }}>{formik.errors.email}</span> : null
                                    }
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='form-group'>
                                    <div className='form-group'>
                                        <label>Password</label>
                                        <input name="password"
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                            className='form-control'
                                            type={"text"}></input>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='form-group'>
                                    <div className='form-group'>
                                        <label>State</label>
                                        <select name="state"
                                            onChange={formik.handleChange}
                                            value={formik.values.state}
                                            className='form-control'>
                                            <option>Tamil Nadu</option>
                                            <option>Karnataka</option>
                                            <option>Bangalore</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='form-group'>
                                    <label>Date of Birth</label>
                                    <input name="dob"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.dob}
                                        className={`form-control ${formik.errors.dob ? 'error-box' : ''} 
                        ${formik.touched.dob && !formik.errors.dob ? 'success-box' : ''}`}
                                        type={"date"}>
                                    </input>
                                    {
                                        formik.errors.dob ? <span style={{ color: "red" }}>{formik.errors.dob}</span> : null
                                    }
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='form-group'>
                                    <label>Phone Number</label>
                                    <input name="phonenumber"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.phonenumber}
                                        className={`form-control ${formik.errors.phonenumber ? 'error-box' : ''} 
                        ${formik.touched.phonenumber && !formik.errors.phonenumber ? 'success-box' : ''}`}
                                        type={"number"}>
                                    </input>
                                    {
                                        formik.errors.phonenumber ? <span style={{ color: "red" }}>{formik.errors.phonenumber}</span> : null
                                    }
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='form-group'>
                                    <label>Age</label>
                                    <input name="age"
                                        onChange={formik.handleChange}
                                        value={formik.values.age}
                                        className='form-control'
                                        type={"number"}></input>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='form-group'>
                                    <label>Gender</label>
                                    <select name="gender"
                                        onChange={formik.handleChange}
                                        value={formik.values.gender}
                                        className='form-control'>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <input type={"submit"}
                                    className="btn btn-primary" ></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Register