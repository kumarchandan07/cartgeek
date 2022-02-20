import "./styles/category.css";
const Category = (props) =>{
    const data=[
        {
            "id": 1,
            "name": "Thai",
            "img": "./food.jpg"
        },
        {
            "id": 2,
            "name": "Indian ",
            "img": "./food.jpg"
        },
        {
            "id": 3,
            "name": "Italian",
            "img": "./food.jpg"
        },
        {
            "id": 4,
            "name": "Chinese",
            "img": "./food.jpg"
        },
        {
            "id": 5,
            "name": "Korean",
            "img": "./food.jpg"
        },
        {
            "id": 6,
            "name": "African",
            "img": "./food.jpg"
        },
        {
            "id": 7,
            "name": "American",
            "img": "./food.jpg"
        },
        {
            "id": 8,
            "name": "Baked ",
            "img":"./food.jpg"
        },
        {
            "id": 9,
            "name": "Caribbean",
            "img": "./food.jpg"
        },
        {
            "id": 10,
            "name": "Dessert",
            "img": "./food.jpg"
        }
        
    ]
    return(
        <div className="category-list">
                <div className="container-data">
                    {data.map((item, index) =>(
                        <div  className="col-md-1" key={index} >
                            <img src={item.img} className="rounded-circle" alt="err" width="50"/>
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