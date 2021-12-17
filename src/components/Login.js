import React from 'react';
import '../styles/formStyle.css';

export const Login = () => {
    return (
        <div>
            <form className='m-5'>
                <div className="form-group ">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password" />
                </div>
                <br/>
                <div >
                    <button type="submit" className="btn btn-dark">Submit</button>
                </div>

            </form>
        </div>
    )
}
