import "./styles/category.css";
const Category = (props) =>{
    const data=props.data;
    return(
        <div className="category-list">
                <div className="container-data">
                    {data.map((item, index) =>(
                        <div  className="col-md-1" key={index} >
                            <img src={item.imageUrl?"http://63.142.251.101:3000/"+ item.imageUrl:"https://image.similarpng.com/very-thumbnail/2020/06/Restaurant-logo-with-chef-drawing-template-on-transparent-background-PNG.png"} className="rounded-circle" alt="err" width="50"/>
                            <p className=" fw-bold">{item.name}</p>
                        </div>
                    ))}                
            </div>
                <div className="m-auto w-25">
                  <select className="form-select rounded-pill" style={{marginTop:"12px"}}>             
                  <option selected >Select a Delivery Day</option>
                 </select>
             </div> 
        </div>
    );
                    };
                    export default Category;