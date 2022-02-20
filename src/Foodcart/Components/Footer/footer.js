import {Facebook, Linkedin, Instagram } from "react-bootstrap-icons";
import  "./Style/style.css"
const Footer =()=>{
    return(
        <>
            <div className=" container-fluid bg-light text-center mt-5">
                <div className="row">
                    <div className="col-md-12 mt-5 mb-3">
                        <img src="./ss1.png" alt="err" width="60"/>
                    </div>
                         <div className=" mt-3">
                        <Facebook className="me-3 fs-3"/>
                        <Linkedin className="me-3 fs-3"/>
                        <Instagram className="fs-3"/>
                        </div>
                    <div className="justify-content-center d-flex mt-3 mb-5">
                    <ul className="nav">
                      <li className="nav-item me-3">
                        <a className="nav-link active text-danger fw-bold" href="./">HOME</a>
                      </li>
                      <li className="nav-item me-3">
                        <a className="nav-link text-dark fw-bold" href="./">ABOUT US</a>
                      </li>
                      <li className="nav-item me-3">
                        <a className="nav-link text-dark fw-bold" href="./">HOW IT WORKS?</a>
                      </li>
                      <li className="nav-item me-3">
                        <a className="nav-link text-dark fw-bold" href="./" >MENU</a>
                      </li>
                      <li className="nav-item me-3">
                        <a className="nav-link text-dark fw-bold" href="./" >PROFILE</a>
                      </li>
                    </ul>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:""}}>
            <div className=" containerb" >
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <p className=" text-white-50 m-0 py-2">All Rights Are Reserved @ 2021 Lokal Grub | Designed by Cart Geek</p>
                    </div>
                    <div className="col-md-6 text-end align-self-center">
                        <img src="./Visa-Logo.png" className=" me-3" alt="err" width="40px"/>
                        <img src="./mastercard-logo.png" className="me-3" alt="err" width="70px"/>
                        <img src="./American-Express_Logo.png" className="me-3" alt="err" width="80px"/>
                        <img src="./discover-logo.png" className="" alt="err" width="70px"/>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};
export default Footer;