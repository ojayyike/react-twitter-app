import React from "react";

export const Register = props =>
    pug`
        link(rel='stylesheet', href='/css/login.css')

        title Login Page
        .wrapper
            .loginContainer 
                h1 Register
                form(action="", method="post") 
                    input(type="text", name="firstName", placeholder="First Name", required="")
                    input(type="text", name="lastName", placeholder="Last Name", required="")
                    input(type="text", name="username", placeholder="Username", required="")
                    input(type="email", name="email", placeholder="Email", required="")
                    input(type="password", name="password", placeholder="Password", required="")
                    input(type="password", name="passwordConf", placeholder="Confirm Password", required="")
                    input(type="submit", value="Login")

                a(href="/Login") Already have an account? Login Here. 
`


export default Register