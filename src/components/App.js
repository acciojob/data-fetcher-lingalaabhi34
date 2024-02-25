
import React,{useState,useEffect} from "react";
import './../styles/App.css';
import axios from "axios";
// import { data } from "cypress/types/jquery";
// import { use } from "chai";
const App = () => {
 const [datas,setdatas] = useState(null);
 useEffect(()=>{
  getsomedata();
 })
 const getsomedata=()=>{
 axios.get("https://dummyjson.com/products").then(response => setdatas(response.data))
 }
  return (
    <div>
        {!datas ? <h1>Loading...</h1> : <pre>
          {JSON.stringify(datas, null, 2)}
        </pre>}

    </div>
  )
}

export default App
