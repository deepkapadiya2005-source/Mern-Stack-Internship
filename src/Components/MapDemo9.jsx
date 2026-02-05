import React from 'react'
import "../assets/Css/MapDemo.css"

export const MapDemo9 = () => {

    var cricketers = [
        {
            id: 1,
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg",
            name: "Virat Kohli",
            country: "India",
            role: "Batsman",
            average: 53.8
        },
        {
            id: 2,
            image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Rohit_Sharma.jpg",
            name: "Rohit Sharma",
            country: "India",
            role: "Batsman",
            average: 48.7
        },
        {
            id: 3,
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Steve_Smith_2019.jpg",
            name: "Steve Smith",
            country: "Australia",
            role: "Batsman",
            average: 44.9
        },
        {
            id: 4,
            image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Kane_Williamson.jpg",
            name: "Kane Williamson",
            country: "New Zealand",
            role: "Batsman",
            average: 41.5
        },
        {
            id: 5,
            image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Ben_Stokes.jpg",
            name: "Ben Stokes",
            country: "England",
            role: "All-Rounder",
            average: 36.2
        },
        {
            id: 6,
            image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Jasprit_Bumrah.jpg",
            name: "Jasprit Bumrah",
            country: "India",
            role: "Bowler",
            average: 22.4
        }
    ];

    return (
        <div>
            <table className="city-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Player Name</th>
                        <th>Country</th>
                        <th>Role</th>
                        <th>Batting Avg</th>
                    </tr>
                </thead>

                <tbody>
                    {cricketers.map((player) => (
                        <tr
                            key={player.id}
                            style={{
                                backgroundColor:
                                    player.average >= 50
                                        ? "#4ade80"
                                        : player.average >= 40
                                        ? "#fde047"
                                        : player.average >= 30
                                        ? "#f97316"
                                        : "#b91c1c",
                                color: player.average < 30 ? "white" : "black"
                            }}
                        >
                            <td>{player.id}</td>
                            <td>
                                <img src={player.image} alt={player.name} />
                            </td>
                            <td>{player.name}</td>
                            <td>{player.country}</td>
                            <td>{player.role}</td>
                            <td>{player.average}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
