import React, { useEffect, useState } from 'react';
import AdminHeader from '../AdminHeader';
import Adminsidebar from '../Adminsidebar';
import "./Adminhome.css";
import axios from 'axios';
import postsData from "../../../json1/db.json"
import { IoMdArrowDropdown } from "react-icons/io";
import postsdata1 from "../../../json1/db1.json";
import {chart as chartjs} from "chart.js/auto"
import{ Bar, Doughnut, Line} from "react-chartjs-2";


function AdminHome() {
  const [posts, setPosts] = useState([]);
  const[postss,setpostss]=useState([])
  
  useEffect(() => {
    // Check if postsData.posts is defined before setting it
    if (postsData && postsData.posts) {
      setPosts(postsData.posts);
    }
  }, []);

  useEffect(()=>{
    if(postsdata1 && postsdata1.posts1){
      setpostss(postsdata1.posts1)
    }
  })
  
  return (
    <div className='container-fluid Adminmain'>
      <AdminHeader/>
      {/* <Adminsidebar/> */}
      <div className='adminheading'> 
        <h1>Welcome to Dashboard</h1>
        <div className='portals'>
          <h3 id="h1">Admin portal</h3>
          <h3 id="h2">HR portal</h3>
        </div>
      </div>
      
      <div className='admincards'>
        {posts.map((data) => (
          <div key={data.id} className='carda'>
            <div className='title'>{data.title}</div>
            <div className='number'>{data.numbers}</div>
          </div>
        ))}
      </div>
       
      <div className='attendence'>
<h3 className='attendence-head'>how many students attending the course</h3>
<p className='days7'>Last 7 days <IoMdArrowDropdown /></p>
<div className='horizontal'>

</div>
<div>


<Bar 
  data={{
    labels: ['sept','3', 'sept','4', 'sept','5', 'sept','6', 'sept','7', 'sept','8', 'sept','9'],
    datasets: [{
      // label: 'Students Attending the Course',
      data: [45, 20, 50, 25, 35, 30, 45,25,35,25,40,35,45,30],
      backgroundColor: [
        'rgba(59, 189, 196, 1)',
        'rgba(162, 210, 252, 1)',
        'rgba(59, 189, 196, 1)',
        'rgba(162, 210, 252, 1)',
        'rgba(59, 189, 196, 1)',
        'rgba(162, 210, 252, 1)',
        'rgba(59, 189, 196, 1)'
      ],
  

      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1,
      width:1,
      borderRadius:20
    }]
  }} 
  options={{
    indexAxis: 'x', // Specify the index axis as 'x'
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }}
/>
<div>

</div>

Sum of students attending the course

Sum of the student who completed the course



</div>
      </div>

      <div className='studentsMain'>
      <div className='studentsPlaced'>
<h3 className='placed'>% of Students placed</h3>
      </div>
      <div className='placeCircle'>
        <p style={{

"textAlign":"center",
"marginTop":"80px",
"fontSize":"25px"
}}>
        Placement
        </p>
  
      </div>
      <div className='horizontal2'></div>
      <div className='yesOrno'>
        <div>
          <p style={{"width": "17.11px",
"height": "11.92px",
// top: 357.21px
"marginLeft": "73.13px",
"background": "rgba(255, 196, 201, 1)",
"borderRadius":"50%"

}}>Yes</p>


<p style={{"width": "17.11px",
"height": "11.92px",
// top: 357.21px
"marginLeft": "73.13px"}}>40.8%</p>
        </div>
        <div>
          <p style={{"width": "17.11px",
"height": "11.92px",
// top: 357.21px
"marginLeft": "73.13px",
"background": "rgba(208, 255, 230, 1)",
"borderRadius":"50%"

}}>NO</p>
<p style={{"width": "17.11px",
"height": "11.92px",
// top: 357.21px
"marginLeft": "73.13px"}}>40.8%</p>
        </div>
      </div>
      </div>
      
      <div className='admincards'>
        {postss.map((data) => (
          <div key={data.id} className='carda1'>
            <div className='title'>{data.title}</div>
            <div className='number'>{data.number}</div>
          </div>
        ))}
      </div>

<div className='courseChart'>
  <div className='coursechartheading'>
  <p >Top 5 Courses</p>
  <p >Students</p>
  </div>
  
  <div className='horizontal2'>
  
  </div>
  <p>  List of courses</p>
<Bar 
  data={{
    labels: ['sept3', 'sept4', 'sept5', 'sept6', 'sept7'],
    datasets: [{
     
      data: [550, 500, 350, 200,100],
      label: 'List iof Courses',
      backgroundColor: [
     

        ' rgba(255, 255, 255, 1)',
        ' rgba(255, 255, 255, 1)',
        ' rgba(255, 255, 255, 1)',
        ' rgba(255, 255, 255, 1)',
        ' rgba(255, 255, 255, 1)',
        ' rgba(255, 255, 255, 1)',
        ' rgba(255, 255, 255, 1)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderColor: 'rgba(255, 255, 255, 1)', // Change the border color to white
      borderWidth: 1
    }]
  }} 
  options={{
    indexAxis: 'y', // Specify the index axis as 'y' for horizontal chart
    scales: {
      x: {
        beginAtZero: true
      }
    }
  }}
/>

</div>

    </div>
  );
}

export default AdminHome;
