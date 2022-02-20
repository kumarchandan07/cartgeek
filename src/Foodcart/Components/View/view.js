import {ArrowLeft, ArrowRight} from "react-bootstrap-icons";
import {useState} from "react";
import '../View/styles/view.css';

const CarouselView = (props) =>{
    const pageNumbers = [];
    const [nums, setNum] = useState(1);

    for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
        pageNumbers.push(i);
    }

    function add(num) {
        if(num > 0 && num <= Math.ceil(props.totalPosts / props.postsPerPage)){
            setNum(num);
            props.paginate(num);
        }
    }
    function leftArrow(num) {
        if(nums>1 && num===1 ){
            let x=nums;
            --x;
            add(x);
        }
    }
    function leftRight(num) {
        if(nums <= Math.ceil(props.totalPosts / props.postsPerPage) && num===0 ){
            let x=nums;
            ++x;
            add(x);
        }
    }

        return(
            <div className=" container-heading">
            <nav style={{display:'none'}}>
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => {add(number)}} href='!#' className='page-link'>
                        {number}
                        </a>
                    </li>
                    ))}
                </ul>
            </nav>
                <div className="row mt-5" >
                    <div className="d-flex flex-row justify-content-between">
                        <h2 className="mt-5 mb-5 fw-bold">{props.title}</h2>
                        <div className="mt-5">
                            <ArrowLeft className="text-secondary border border-secondary rounded-circle m-1 fs-1 p-2 me-3" onClick={()=> {leftArrow(1)}}/>
                            <ArrowRight className="text-success border border-success rounded-circle m-1 fs-1 p-2" onClick={()=> {leftRight(0)}}/>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};
export default CarouselView;