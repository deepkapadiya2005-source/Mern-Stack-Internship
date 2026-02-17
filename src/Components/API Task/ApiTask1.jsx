import axios from 'axios'
import React, { useState } from 'react'
import '../../assets/Css/FormDesign2.css'

export const ApiTask1 = () => {
  const [users, setData] = useState([])

  const getUsers = async () => {
    const response = await axios.get("https://dummyjson.com/products")
    setData(response.data.products)

  }
  return (
    <div style={{ textAlign: "center" }}>
      <br></br>
      <br></br>
      <h1>ApiTask1</h1>
      <button onClick={() => { getUsers() }}>GET</button>
      <br></br>
      <br></br>
      <h4>Data Table</h4>
      <br></br>
      
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Discount Percentage</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>Weight</th>
            <th>Warranty Information</th>
            <th>Shipping Information</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td>{user.category}</td>
                  <td>{user.price}</td>
                  <td>{user.discountPercentage}</td>
                  <td>{user.rating}</td>
                  <td>{user.stock}</td>
                  <td>{user.brand}</td>
                  <td>{user.weight}</td>
                  <td>{user.warrantyInformation}</td>
                  <td>{user.shippingInformation}</td>
                </tr>
              )
            })

          }
        </tbody>
      </table>
    </div>

  )
}
