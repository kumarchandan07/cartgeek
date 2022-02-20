import "./styles/header.css"
const Header = () =>{

    
    return(
        <div className="categoryNav">
            <div className="header">
                    <p className=" text-white "> Free delivery on all <span className=" text-danger">orders over $25</span>  </p>   
            </div>
            <div className="navigation">
                    <div className="container">
                    <img src="../ss1.png" alt="" className="img-thumbnail"></img>
                        <button className="button1">Become a chef</button>
                        <button className="button">login</button>
                    </div>
            </div>    
       </div>
    );
}
export default Header;
    