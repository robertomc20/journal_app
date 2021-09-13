import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { startLoginWithForm } from "../../actions/auth";

import { removeError, setError } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {
    // {
    //     name: 'Roberto',
    //     email: 'robertomarihuan@gmail.com',
    //     password: '123456',
    //     password2: '123456'
    // }

    const dispatch = useDispatch();
    const { msgError } = useSelector((state) => state.ui);

    console.log(msgError);

    const [formValues, handleInputChange] = useForm({
        name: "Roberto",
        email: "robertomarihuan@gmail.com",
        password: "123456",
        password2: "123456"
    });

    const { name, email, password, password2 } = formValues;

    // nueva funct handleRegister= (e) { imprimir de manera independiente valores actualizados de los campos}
    const handleRegister = (e) => {
        e.preventDefault();
        //console.log(name, email, password, password2)
        if (isFormValid()) {
            dispatch(startLoginWithForm(email, password, name))
        }
    };

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError("Name is required"));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError("Email is not valid"));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(
                setError(
                    "Password should be at least 6 characters and match each other"
                )
            );
            return false;
        }

        dispatch(removeError());
        return true;
    };

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>
                { msgError && 
                    <div className="auth__alert-error">{msgError}</div>
                }

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    autoComplete="off"
                    value={password2}
                    onChange={handleInputChange}
                />

                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                    Register
                </button>

                <Link className="link" to="/auth/login">
                    Already registered?
                </Link>
            </form>
        </>
    );
};
