import React from 'react'
import "../assets/Css/MapDemo.css"

export const MapDemo10 = () => {

    var footballers = [
        {
            id: 1,
            image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
            name: "Cristiano Ronaldo",
            country: "Portugal",
            club: "Al Nassr",
            goals: 35
        },
        {
            id: 2,
            image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Lionel_Messi_20180626.jpg",
            name: "Lionel Messi",
            country: "Argentina",
            club: "Inter Miami",
            goals: 28
        },
        {
            id: 3,
            image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Neymar_2018.jpg",
            name: "Neymar Jr",
            country: "Brazil",
            club: "Al Hilal",
            goals: 18
        },
        {
            id: 4,
            image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Kylian_Mbapp%C3%A9_2019.jpg",
            name: "Kylian Mbappé",
            country: "France",
            club: "PSG",
            goals: 31
        },
        {
            id: 5,
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Kevin_De_Bruyne_201807091.jpg",
            name: "Kevin De Bruyne",
            country: "Belgium",
            club: "Manchester City",
            goals: 12
        },
        {
            id: 6,
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Luka_Modri%C4%87_2018.jpg",
            name: "Luka Modrić",
            country: "Croatia",
            club: "Real Madrid",
            goals: 6
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
                        <th>Club</th>
                        <th>Goals</th>
                    </tr>
                </thead>

                <tbody>
                    {footballers.map((player) => (
                        <tr
                            key={player.id}
                            style={{
                                backgroundColor:
                                    player.goals >= 30
                                        ? "#4ade80"
                                        : player.goals >= 20
                                        ? "#fde047"
                                        : player.goals >= 10
                                        ? "#f97316"
                                        : "#b91c1c",
                                color: player.goals < 10 ? "white" : "black"
                            }}
                        >
                            <td>{player.id}</td>
                            <td>
                                <img src={player.image} alt={player.name} />
                            </td>
                            <td>{player.name}</td>
                            <td>{player.country}</td>
                            <td>{player.club}</td>
                            <td>{player.goals}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
