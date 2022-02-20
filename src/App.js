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
  
  async function postData(url = '') {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST' // *GET, POST, PUT, DELETE, etc.
    
      
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  const getApiData = () => {
    const apiURL = "http://63.142.251.101:3000/mymenu-data"
    axios.post(apiURL).then((res) => {
      setData(res.data.data)
      
    }).catch((error) => {
      console.log("error", Error)
    })
  }

  useEffect(() => {
    //getApiData("http://63.142.251.101:3000/mymenu-data");
    postData('http://63.142.251.101:3000/mymenu-data')
    .then(data => {
      setData(data.data);
      console.log("fetch",data.data); // JSON data parsed by `data.json()` call
    });
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
     {data && data.cuisine_list && <Category data={data.cuisine_list}/>} 
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
