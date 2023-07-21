import axios from 'axios';
import React from 'react'
import { useEffect,useState } from "react";
function Table() {
const [data, setdata]=useState([]);




useEffect(()=>{fetchdata();},[]);




const fetchdata=async()=>{
    const res=await axios.get("http://localhost:3000/form");
    setdata(res.data);
}


const ondelete=async(id)=>{
alert("data deleted soon");
fetchdata();

}

    return (
        <div className="content-wrapper">
            <section className="content">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="box">
                            <div className="box-header">
                                <h3 className="box-title">Hover Data Table</h3>
                            </div>{/* /.box-header */}
                            <div className="box-body">
                                <table id="example2" className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email-id</th>
                                            <th>Password</th>
                                            <th>mobile</th>
                                            <th>Update/Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((item)=>{
                                                return(
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.password}</td>
                                            <td> {item.mobile}</td>
                                            <td><button onClick={()=>{ondelete(item.id)}} >Delete</button>
                                            {/* <button style={{marginLeft:"20px"}} onClick={()=>{onupdate(item.id)}}>update</button> */}
                                            </td>
                                        
                                        </tr>)})
                                        }
                                   </tbody>
                                </table>
                            </div>{/* /.box-body */}
                        </div>{/* /.box */}
                    </div>
                </div>
            </section>
            </div>
            
          
    )
}

export default Table