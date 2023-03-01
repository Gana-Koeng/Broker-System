import "../style/buy.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetching() {
 
  var data = "";
// const [posts, setPosts] = useState([])
  var config = {
    method: "get",
    url: "http://localhost:8080/api/broker-info",
    headers: {},
    data: data,
  };


  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });


// const fetchPosts = async() =>{
//   // fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json()).then((json)=>setPosts(json));
// const responsePosts = await axios.get("https://jsonplaceholder.typicode.com/posts/");
// setPosts(responsePosts.data);
// }
// useEffect(()=> {
  
//   const fetchData = async ()=>{
//     const result = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const jsonResult = await result.json()
//     setPosts(jsonResult)
//   }
// fetchData();
// },[])
	
	


  return (
    <div className="Buy">
      <table>
        <tr>
          <th>ID</th>
          <th>Remain</th>
          <th>Price</th>
          <th>Remain</th>
        </tr>
        <tr>
          <td>1</td>
          <td>19</td>
          <td>111</td>
        </tr>
        <tr>
          <td>1</td>
          <td>19</td>
          <td>111</td>
        </tr>
        <tr>
          <td>1</td>
          <td>19</td>
          <td>111</td>
        </tr>
        <tr>
          <td>1</td>
          <td>19</td>
          <td>111</td>
        </tr>
        <tr>
          <td>1</td>
          <td>19</td>
          <td>111</td>
        </tr>
        <tr>
          <td>1</td>
          <td>19</td>
          <td>111</td>
        </tr>
        <tr>
          <td>1</td>
          <td>19</td>
          <td>111</td>
        </tr>
		
      </table>
      <ul>
        {/* {
          data.map((Broker,index)=>
          <div key={index}>
            {Broker.id}:
         
          </div>
          )
        } */}
       
      </ul>
	  
    </div>
  );

}

export default DataFetching;
