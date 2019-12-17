import React from 'react'
import { Link } from 'react-router-dom'


const AboutPage = () => (
    <div>
        <h1>About Page</h1>
        <p>This app uses React, Redux, React Router, and many other helpful libraries</p>
        <Link to={"/"} className="btn btn-primary btn-lg">
            Home
        </Link>
    </div>
)

export default AboutPage
