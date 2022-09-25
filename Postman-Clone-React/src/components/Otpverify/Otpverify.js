import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Otpverify.css'

function Otpverify() {

    const [email, setEmail] = useState();
    const [otp, setOtp] =useState();
    const navigate = useNavigate();
    async function verifyOtp() {
        console.log("hello")
        try {
            var authOptions = {
                method: 'POST',
                url: `http://52.33.80.175:1337/user/email/verify`,
                data: { email: email, otp: otp},
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            };

            return await axios(authOptions).then(res=>{
                if (res && res.status === 200 && res.data.success) {
                    console.log(res,"Success")
                    localStorage.setItem("Token", res.data.data.token)
                    navigate("/OtpVerify", {
                        state: {
                          email: email,
                          // otp: otp,
                        },
                      });
                } else {
                    console.log("err")
                }
            })
        } catch(err) {
            console.log(err,"error")
        }
    }
  return (
    <div>
      <section className="vh-100 bg-image" style={{backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'}}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{borderRadius: '15px'}}>
                  <div className="card-body p-5">
                    <h2 className="text-capitalize text-center mb-5">Create an account</h2>
                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">Email</label>
                        <input type="email" id="form3Example3cg" placeholder='Enter your Email' className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} value={email} />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cg">OTP</label>
                        <input type="otp" id="form3Example4cg" placeholder='Enter your otp' className="form-control form-control-lg" onChange={(e) => setOtp(e.target.value)} value={otp} />
                      </div>
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={verifyOtp}>Verify Otp</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Otpverify