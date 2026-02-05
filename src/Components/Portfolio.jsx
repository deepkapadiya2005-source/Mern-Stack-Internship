import React from 'react'
import virat from "../assets/Images/Virat.png"
import "../assets/Css/Portfolio.css"

export const Portfolio = () => {
  return (
    <div className='portfolio'>
        <img src={virat} alt='Virat Kohli'/>
        <h2>Virat Kohli</h2>
        <p>
            Virat Kohli is an Indian international cricketer and one of the best
            batsmen in the world. He is known for his aggressive playing style,
            consistency, and leadership.
        </p>
    </div>
  )
}
