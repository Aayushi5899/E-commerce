/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div></div>
  );
}

export default App; */
import React,{useState, useEffect} from 'react';
import {Row, Col, Divider} from 'antd';
import axios from "axios";
import MyCard from './Components/MyCard';


function App() {
  
  const [blogs, setBlogs] = useState(null);
  const [status, setstatus] = useState(false);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
      setBlogs(response.data)
      setstatus(true)
    }).catch(()=>{
      console.log("API call failed.")
      setstatus(false)
    })
  },[])




  
  return (
    <div>
      <Row gutter={16}>
      <Col className="gutter-row"></Col>
      </Row>
      <Divider orientation="center"> H & M 
      </Divider>
    <Row gutter={16}>
      
    </Row>
    </div>
  );
}

export default App;
