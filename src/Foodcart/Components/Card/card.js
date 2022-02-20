import {ArrowRight, StarFill} from "react-bootstrap-icons";


const Card = () =>{
   
    return(
        <>
        <div className=" col-md-4 shadow-sm pt-3 ">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src=".\res.jpg" alt="" width="410" height="230" className="d-block"/>
                           
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon rounded-circle bg-light carousel-control-color" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon rounded-circle bg-light" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    
                    <div className="avatar ">
                        <img src="./avatar.jpg" className=" border-4 rounded-circle border border-white" alt="" width="70"/> 
                    </div>
                    <h5 className=" fw-bold margint-20 ps-2">Eggs and Spinach</h5>                
                    <p className="fw-bold subtitle ps-2">Chef Mary</p>
                    <div className="d-flex flex-row  mt-5">
                        <div className="d-flex flex-row w-50  justify-content-lg-center shadow-sm">
                            <p className=" bg-danger text-white px-2 rounded">4.5 <StarFill className=" text-warning pb-1"/></p>
                            <p className="subtitle ms-2">(10 reviews)</p>
                        </div>
                        <div className="w-50 text-center shadow-sm">
                            <p className=" text-success">View details <ArrowRight/></p>
                        </div>
                    </div>
                </div>
       
       </>
    );
};
export default Card;