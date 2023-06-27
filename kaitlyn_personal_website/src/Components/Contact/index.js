import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Navigation from '../Navigation'
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContactForm from "../ContactBox";
import ContactData from "./contactData";

function Contact() {
    
    const { data } = ContactData()
    if (data === null) {
        return (
            <div className="loading-container">
                <img src="../../../images/spinner.svg" alt="Loading" className="spinner" />
            </div>
        )
    }
    if (data) {
        return (
            <>
                <Navigation />
                <div className="contact-container">
                    <div className="row align-items-start justify-content-center text-center">
                        <div className="col-sm-10 col-md-8 col-lg-6">
                            <h1 className="contact-header-title"> LET'S CONNECT </h1>
                            <h2 className="contact-header-subtitle"> I would love to get to know you better! </h2>
                        </div>
                        <div className="row align-items-center justify-content-center text-center">
                            <div className="col-sm-12 col-md-12 col-lg-4">
                                <a className="link-contact" href={`mailto:@kaitlynwong23`}>
                                    <i class="contact-icon fa-solid fa-envelope fa-3x"></i>
                                    <h1 className="contact-header-title"> EMAIL </h1>
                                    <h1 className="contact-header-subtitle"> {data[0]?.email} </h1>
                                </a>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4">
                                <ContactForm />
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-4">
                                <a className="link-contact" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kaitlynwong23">
                                    <i class="contact-icon fa-brands fa-linkedin fa-3x"></i>
                                    <h1 className="contact-header-title"> LINKEDIN </h1>
                                    <h1 className="contact-header-subtitle"> {data[0]?.linkedin} </h1>
                                </a>
                            </div>

                        </div>
                        {/* <div className="row align-items-center justify-content-center text-center">
                        <div className="col-sm-12 col-md-12 col-lg-4 ">
                            <ContactForm />
                        </div>

                    </div> */}
                    </div>
                </div>
            </>
        );
    }

}
export default Contact;