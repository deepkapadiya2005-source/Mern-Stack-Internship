import React from 'react'
import "../assets/Css/MapDemo.css"

export const MapDemo6 = () => {
    var cities = [
        {
            id: 1,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Ahemdabad_Skyline.jpg/250px-Ahemdabad_Skyline.jpg",
            name: "Ahmedabad",
            state: "Gujarat",
            country: "India",
            pop: 8000000,
            AQI: 302
        },
        {
            id: 2,
            image: "https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/destination/India/Delhi/247199_SCN1_Delhi_iStock000001307820Small_ZC6EB8.jpg",
            name: "Delhi",
            state: "Delhi",
            country: "India",
            pop: 10000000,
            AQI: 400
        },
        {
            id: 3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08H59LuNHa4quzbnE0qrqcqNEH9QjrLM0TQ&s",
            name: "Dehradun",
            state: "Uttarakhand",
            country: "India",
            pop: 800000,
            AQI: 150
        },
        {
            id: 4,
            image: "https://cdn.myportfolio.com/7110bd9a9c83d97ed90b4758be565c85/7cf65034-0bca-420c-a47b-dbf276a82c66_rw_1920.jpg?h=950959047a23106dea7d062e47d92ee7",
            name: "Mumbai",
            state: "Maharashtra",
            country: "India",
            pop: 12400000,
            AQI: 280
        },
        {
            id: 5,
            image: "https://greatindiantours.com/wp-content/uploads/2022/08/Bengaluru.jpg",
            name: "Bengaluru",
            state: "Karnataka",
            country: "India",
            pop: 8400000,
            AQI: 190
        },
        {
            id: 6,
            image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/182D7/production/_83913099_83913097.jpg",
            name: "Chennai",
            state: "Tamil Nadu",
            country: "India",
            pop: 7100000,
            AQI: 210
        }
    ];

    return (

        <div>
            <table className="city-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>City</th>
                        <th>Population</th>
                        <th>AQI</th>
                    </tr>
                </thead>
                <tbody>
                    {cities.map((city) => (
                        <tr
                            key={city.id}
                            style={{
                                backgroundColor:
                                    city.AQI >= 400
                                        ? "#b91c1c"
                                        : city.AQI >= 300
                                            ? "#f97316"
                                            : city.AQI >= 200
                                                ? "#fde047"
                                                : "#4ade80",
                                color: city.AQI >= 200 ? "black" : "white"
                            }}
                        >
                            <td>{city.id}</td>
                            <td>
                                <img src={city.image} alt={city.name} />
                            </td>
                            <td>{city.name}</td>
                            <td>{city.pop.toLocaleString()}</td>
                            <td>{city.AQI}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )
}
