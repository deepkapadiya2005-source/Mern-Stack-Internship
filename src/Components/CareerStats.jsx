import React from 'react'
import "../assets/Css/CareerStats.css"

export const CareerStats = () => {
  return (
    <div className="stats-container">
      <h2 className="stats-title">Virat Kohli Career Stats</h2>

      {/* Batting & Fielding */}
      <h3 className="section-title">Batting & Fielding</h3>
      <table className="stats-table">
        <thead>
          <tr>
            <th>Format</th>
            <th>Mat</th>
            <th>Inns</th>
            <th>NO</th>
            <th>Runs</th>
            <th>HS</th>
            <th>Ave</th>
            <th>SR</th>
            <th>100s</th>
            <th>50s</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tests</td><td>123</td><td>210</td><td>13</td><td>9230</td><td>254*</td><td>46.85</td><td>55.57</td><td>30</td><td>31</td>
          </tr>
          <tr>
            <td>ODIs</td><td>311</td><td>299</td><td>47</td><td>14797</td><td>183</td><td>58.71</td><td>93.82</td><td>54</td><td>77</td>
          </tr>
          <tr>
            <td>T20Is</td><td>125</td><td>117</td><td>31</td><td>4188</td><td>122*</td><td>48.69</td><td>137.04</td><td>1</td><td>38</td>
          </tr>
        </tbody>
      </table>

      {/* Bowling */}
      <h3 className="section-title">Bowling</h3>
      <table className="stats-table">
        <thead>
          <tr>
            <th>Format</th>
            <th>Mat</th>
            <th>Inns</th>
            <th>Balls</th>
            <th>Runs</th>
            <th>Wkts</th>
            <th>Avg</th>
            <th>Econ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tests</td><td>123</td><td>11</td><td>175</td><td>84</td><td>0</td><td>-</td><td>2.88</td>
          </tr>
          <tr>
            <td>ODIs</td><td>311</td><td>50</td><td>662</td><td>680</td><td>5</td><td>136.00</td><td>6.16</td>
          </tr>
          <tr>
            <td>T20Is</td><td>125</td><td>13</td><td>152</td><td>204</td><td>4</td><td>51.00</td><td>8.05</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
