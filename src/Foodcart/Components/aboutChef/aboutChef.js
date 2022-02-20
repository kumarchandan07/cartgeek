import {useState} from "react";
import './styles/aboutChef.css';
import {ArrowRight,StarFill} from "react-bootstrap-icons";

const aboutChef = (props) =>{
    const chefData=props.chef[0];
    return(
        <div className="master-red">
            <div className="background-div">
                <h2 className="chef-name">Chef of the Week</h2>
            </div>
            <div className="main-div">
                <div className="avatar-left-chef">
                    <img src={props.chef[0].chefprofile?"http://63.142.251.101:3000/"+ props.chef[0].chefprofile : "./avatar.jpg"} className="d-block" alt="" width="400" height="450"/> 
                </div>
                <div className="circle-center">
                    <img src="./cap.png" className="icon-box" alt="" width="50" height="50" />
                </div>
                <div className="avatar-chef">
                    <div className="data-name">
                        <h5 className="avtar-chef-name">{`Chef ${props.chef[0].chefname}`}</h5>    
                    </div>  
                    <div className="review-rating">
                        <p  className="reviews-message">{`${props.chef[0].totalRating}  `}<StarFill className="text-warning pb-1"/>{`(  ${props.chef[0].reviewCnt} reviews )  `}</p>
                    </div>           
                    <p className="fw-bold subtitle ps-2">{props.chef[0].aboutChef}</p>
                    <div className="view-details">
                        <p className=" text-success">View details <ArrowRight/></p>
                    </div>
                </div>
            </div>

        </div>  
    
    );
};
export default aboutChef;