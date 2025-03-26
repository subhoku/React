import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export function LoginForm(){
    return (
        <div className="container mt-3">
         
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" />
                </div>
               
            </form>
            </div>
)
}