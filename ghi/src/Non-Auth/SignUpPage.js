import React, { useState } from "react";
import { useToken } from '../Token'
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const { signup } = useToken();
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [noMatchClass, setnoMatchClass] = useState(
        "alert alert-danger d-none"
    );

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password == confirmPassword) {
            await signup(formData.email, formData.password, formData.name);
        } else {
            setnoMatchClass("alert alert-danger")
        }
    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-3 mt-4">
                    <h1>Sign Up Today</h1>
                    <form onSubmit={handleSubmit} id="form">
                        <div className="form-floating mb-3">
                            <input
                                onChange={handleFormChange}
                                placeholder="..."
                                type="text"
                                name="name"
                                className="form-control"
                            />
                            <label htmlFor="name">What's your name?</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                onChange={handleFormChange}
                                placeholder="..."
                                type="text"
                                name="email"
                                className="form-control"
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                onChange={handleFormChange}
                                placeholder="..."
                                type="text"
                                name="password"
                                className="form-control"
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                onChange={handleConfirmPasswordChange}
                                placeholder="..."
                                type="text"
                                name="confirm-password"
                                className="form-control"
                            />
                            <label htmlFor="confirm-password">Confirm your password</label>
                        </div>
                        <div className={noMatchClass} role="alert">
                            {" "}
                            Password must match!{" "}
                        </div>
                        <button className="btn btn-success">Done!</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
