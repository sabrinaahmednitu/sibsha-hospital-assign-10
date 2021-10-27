import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2 col-sm-12">
                     <h2>Other </h2>
                     <ul>
                         <li>Support</li>
                         <li>Privacy Policy</li>
                         <li>Terms of Service</li>
                     </ul>
                    </div>

                    <div className="col-lg-3 col-md-2 col-sm-12">
                     <h2 className="me-5">Opening Hours</h2>
                        <ul>
                            <li>saturday: 09:00AM-09:00PM</li>
                             <li>Sunday:  10:00 AM-10:00 PM</li>
                             <li>Monday:  24 Hour</li>
                             <li>Thuesday:  10:00 AM-10:00 PM</li>
                             <li>Wednesday:  09:00 AM-09:00 PM</li>
                            <li>Thursday:  24 Hour</li>
                         </ul>
                    </div>


                    <div className="col-lg-3 col-md-2 col-sm-12">
                     <h2 className="ms-3">Patient CARE </h2>
                     <ul>
                         <li>Sibsha clinik Patient Portal Login</li>
                         <li>Find a Doctor you want</li>
                         <li>International Medicine</li>
                         <li>Is My Medical Insurance Accepted?
</li>
                            <li>Is My Medical Insurance Accepted?</li>
                            <li>Financial Assistance and Pricing part</li>
                     </ul>
                    </div>

                    <div className="col-lg-3 col-md-2 col-sm-12">
                     <h2 className="ms-3">Contact Us </h2>
                     <ul>
                         <li>6890 Blvd, The Bronx, NY 1058 New York, USA</li>
                         <li>Shibshahospital@gmail.com
                 </li>
                         <li>+1 (514) 367-5678</li>
                     </ul>
                    </div>
                    
                    
                    
                </div>
                </div>
                <hr />
            <span className=" text-muted" >&copy;Copyright, All right reserved by Sabrina Ahmed Nitu</span>
        </div>
    );
};

export default Footer;