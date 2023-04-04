import React from "react";
import { useNavigate } from "react-router-dom";

function handleLogin() {
    const navigate = useNavigate()

    // history.push("/test")
    navigate("/test")
}

export const Login = props =>
    pug`
        link(rel='stylesheet', href='/css/login.css')

        title Login Page
        .wrapper
            .loginContainer 
                h1 Login
                form(method="post") 
                    input(type="text", name="loginUserName", placeholder="Username or Email", required="")
                    input(type="text", name="loginPassword", placeholder="Password", required="")
                    input(type="submit", value="Login")
                a(href="/register") Need an account? Register Here. 
`


export default Login