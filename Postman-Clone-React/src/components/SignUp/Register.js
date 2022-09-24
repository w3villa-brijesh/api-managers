import React, { useState } from 'react'
// import { Cnpm iontainer, Grid, Paper, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import "./Register.scss"

function Registration() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    async function SignUp () {


        try{
            var authOptions = {
                method: 'POST',
                url: `http://52.33.80.175:1337/user/email/register`,
                data: { fullName: name , email, password },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            };
            return await axios(authOptions).then(res=>{
                if (res && res.status === 200 && res.data.success) {
                    console.log("err")
                    navigate("/OtpVerify", {
                      state: {
                        email: email,
                        // otp: otp,
                        previousPage: "SignUp",
                      },
                    });
                  } else {
                    console.log("error");
                  }
            })
        } catch(err){
            console.log(err)
        }
    }

return (
    <div>
        <section className="vh-100 bg-image" style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")' }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-5">
                                    <h2 className="text-capitalize text-center mb-5">Create an account</h2>
                                    <form>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example1cg">Full Name</label>
                                            <input type="text" id="fullName" placeholder='Enter your full name' className="form-control form-control-lg" onChange={(e) => setName(e.target.value)} value={name} />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example3cg">Email</label>
                                            <input type="email" id="email" placeholder='Enter your email' className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} value={email} />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                            <input type="password" id="password" placeholder='Enter your password' className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} value={password} />
                                        </div>
                                        <div className="form-check d-flex justify-content-start mt-5 pl-0">
                                            <input className="ml-3 mr-2" type="checkbox" defaultValue id="form2Example3cg" />
                                            <label className="form-check-label" htmlFor="form2Example3g">
                                                I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                            </label>
                                        </div>
                                        <br />
                                        <div className="d-flex justify-content-center">
                                            <button type="button" onClick={SignUp} className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                        </div>
                                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/Login/login.html" className="fw-bold text-body"><u>Login here</u></a></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);
}
export default Registration
