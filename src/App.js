import {useState, useEffect} from "react";
import  "../node_modules/bootstrap/dist/css/bootstrap.css";
import View from "./Foodcart/Components/View/view"
import  Header from"../src/Foodcart/Components/Header/header";

import './App.css';
import axios from "axios";
import Category from "../src/Foodcart/Components/Category/category";
import PopularWeek from "../src/Foodcart/Components/Popular/PopularWeek";
import AboutChef from "./Foodcart/Components/aboutChef/aboutChef";
import Footer from "./Foodcart/Components/Footer/footer"

const App=()=>{


  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  

  const getApiData = () => {
    const apiURL = "http://63.142.251.101:3000/mymenu-data"
    axios.post(apiURL).then((res) => {
      setData(res.data.data)
      
    }).catch((error) => {
      console.log("error", Error)
    })
  }

  useEffect(() => {
    setData(getApiData("http://63.142.251.101:3000/mymenu-data"));
    console.log("response", data)
  },[]);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data && data.popularweek && data.popularweek.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  currentPosts && console.log('ssssssssss',currentPosts);
  
  return (
    <div >
    <Header/>
     <Category/> 
     {/* <Popular userData={data}/> */}
     <div>
        <View title="Popular Weekly Food" postsPerPage={postsPerPage}
        totalPosts={data && data.popularweek ?data.popularweek.length:{}}
        paginate={paginate}/>
     </div>
     <div>
        {currentPosts && <PopularWeek popularweek={currentPosts}/>}
     </div>
     <div>
       { data && data.chefweek && <AboutChef chef={data.chefweek}/> }
     </div>
       <Footer/> 
         
         
      
      
          
        </div>
       
      
    
  );
}

export default App;
