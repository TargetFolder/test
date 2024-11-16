import React from "react";
// const express = require('express');
// const app = express();
// const core = require('cors');

// app.use(express.json());
// app.use(cors(
 
// ));



class Students extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        students:[]
    }
}
 

//  fetchData = async()=>{
//    url =  "https://localhost:44344/api/Student/GetAllStudents/StudentModel"
//   let resp = await  fetch(url);
//   let final = await resp.json();
//   console.log(final)
// }
    

   

       componentDidMount(){
        fetch("https://localhost:44344/api/Student/GetAllStudents/StudentModel")
        
        .then(response => response.json())
        .then(res => {
            this.setState({
                students:res
            })
        })
    }
           
    render(){
        return(
            <div>
                <h2>Student List</h2>
                <table className="tableStyle">
                    <thead>
                    <tr>
                        <th>
                            Student Name
                        </th>
                        <th>
                            Branch Name
                        </th>
                        <th>
                            Gender
                        </th>
                        <th>
                             StudentDateOfBirth
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                       {
                        this.state.students.map(s =>(
                            <tr key={s.studentId}>
                               <td>
                                  {s.studentName}
                               </td>
                                <td>
                                    {s.branchName}
                                </td>
                                <td>
                                    {s.gender}
                                </td>
                                <td>
                                    {s.studentDateOfBirth}
                                </td>
                            </tr>
                        ))
                       }
                    </tbody>
                </table>
            </div>
        )
    }}

export default Students;