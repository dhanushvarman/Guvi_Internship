import React from 'react'
import "../App.css";

import { useFormik } from "formik";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';




function Login() {

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
          username: "",
          password: ""
        },
        validate: (values) => {
          let error = {}
          if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i.test(values.username)) {
            error.username = "Please enter a username";
          }
          if (!values.password) {
            error.password = "please enter a password"
          }
          return error
        }
      });

  return (
    <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5" >
          <div class="card-body p-0" >
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block"><img style={{padding:"70px",marginTop:"150px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeZ-vYOWQhpPkh236LofUz877Dqi4GUqBV6A&usqp=CAU" /></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form onSubmit={formik.handleSubmit} class="user">
                    <div class="form-group">
                      <input
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type={"text"}
                        className={`form-control form-control-user ${formik.errors.username ? 'error-box' : ''} 
                        ${formik.touched.username && !formik.errors.username ? 'success-box' : ''}`}
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                      />

                      {
                        formik.errors.username ? <span style={{ color: "red" }}>{formik.errors.username}</span> : null
                      }

                    </div>

                    <div class="form-group">
                      <input
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password"
                        className={`form-control form-control-user ${formik.errors.password ? 'error-box' : ''} 
                        ${formik.touched.password && !formik.errors.password ? 'success-box' : ''}`}
                        id="exampleInputPassword"
                        placeholder="Password"
                      />
                      {
                        formik.errors.password ? <span style={{ color: "red" }}>{formik.errors.password}</span> : null
                      }
                    </div>
                    <button
                      type='button'
                      class="btn btn-primary btn-user btn-block"
                      onClick={()=>{navigate("/profile")}}
                    >
                      Login
                    </button>
                    <hr />
                    <div style={{textAlign:"center",borderTop:"1px solid lightgray",padding:"15px"}}><b>NEW HERE ?</b></div>
                    <p style={{textAlign:"center"}}>Register and discover a great amount of new opportunities ! </p>
                  </form>       
                  <hr />
                  <button onClick={()=>{navigate("/register")}}
                      class="btn btn-danger btn-user btn-block"
                    >
                      REGISTER
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login