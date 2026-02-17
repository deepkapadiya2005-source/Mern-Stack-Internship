import axios from 'axios'
import React, { useState } from 'react'
import "../../assets/Css/FormDesign2.css"


export const ApiTask2 = () => {
    const [datainfo,setData] = useState([])
    const getData = async()=>{
        const response = await axios.get("https://dummyjson.com/comments")
        setData(response.data.comments)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiTask2</h1>
        <button onClick={()=>{getData()}}>GET DATA</button>
        <br></br>
        <br></br>
        <table border="1" cellPadding="10">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Body</th>
                    <th>Post Id</th>
                    <th>Likes</th>
                    <th>Username</th>
                    <th>Full Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    datainfo.map((d)=>{
                        return(
                            <tr>
                                <td>{d.id}</td>
                                <td>{d.body}</td>
                                <td>{d.postId}</td>
                                <td>{d.likes}</td>
                                <td>{d.user.username}</td>
                                <td>{d.user.fullName}</td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
    </div>
  )
}
