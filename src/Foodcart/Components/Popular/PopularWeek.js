import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight, StarFill} from "react-bootstrap-icons";
import { useEffect, useRef } from "react";
import './styles/popular.css';

const PopularWeek = (props) =>{
        
    const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);

    
    return(
        <>
            <div className="list-Item">
                {props.popularweek.map((item, index)=>(
                        <div className="card" key={index} style={{width:'302px'}}>
                                <div className="carousel-item active">
                                    <img src={"http://63.142.251.101:3000/"+ item.dish_masters[0].dishImage} alt="" width="300" height="200" className="d-block"/>
                                    <div className="avatar-left">
                                        <h5 className=" fw-bold margint-20 ps-2">{item.dish_masters[0].dishname}</h5>                
                                        <p className="fw-bold subtitle ps-2">{item.chefname}</p>
                                    </div>
                                    <div className="avatar">
                                        <img src={item.chefprofile?"http://63.142.251.101:3000/"+ item.chefprofile:"https://www.w3schools.com/howto/img_avatar.png"} className=" border-4 rounded-circle border border-white" alt="" width="70" height="70"/> 

                                    </div>
                                </div>
                                    <div className="d-flex flex-row  mt-5">
                                        <div className="d-flex flex-row w-50  justify-content-lg-center shadow-sm">
                                            <p className=" bg-danger text-white px-2 rounded">{item.totalRating} <StarFill className=" text-warning pb-1"/></p>
                                            <p className="subtitle ms-2">({item.reviewCnt} reviews)</p>
                                        </div>
                                        <div className="w-50 text-center shadow-sm">
                                            <p className=" text-success">View details <ArrowRight/></p>
                                        </div>
                                    </div>
                        </div>
                    )
                )}
            </div>    
        </>
    );
};
export default PopularWeek;