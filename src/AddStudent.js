
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
 

function Addstudent(){
    const navigate = useNavigate();
    const studentName = useRef(null);
    const BranchName = useRef(null);
    const Gender = useRef(null);
    
    

    const [postStudent, setPostStudent] = useState(null);
     async function postData(){
    
        const Student = {
            studentName : studentName.current.value,
            BranchName : BranchName.current.value,
            Gender : Gender.current.value,
          

    
        }
        
       const response = await fetch("https://localhost:44344/api/Student/CreateStudent" ,{
            method: "post",
          
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(Student) 


        })
        return navigate ("/Students")
    }

    
return(
            <div>
                <h2>Add Student</h2>
                <input type="text" ref={studentName}  className="inputtxt" placeholder="Enter Name"/>
    
                <input type="text" ref={BranchName} className="inputtxt" placeholder="Enter Branch"/>
                <input type="text" ref={Gender} className="inputtxt" placeholder="Enter Gender"/>
                
                
                <button type="button" onClick={postData} className="sbtbutton">Sumbit</button>
            </div>
        )}
    

export default Addstudent;