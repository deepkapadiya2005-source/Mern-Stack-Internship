import React from 'react'
import "../assets/Css/MapDemo.css"

export const MapDemo7 = () => {

    var students = [
        {
            id: 1,
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Amit Patel",
            course: "Computer Science",
            marks: 88
        },
        {
            id: 2,
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Priya Shah",
            course: "Information Technology",
            marks: 76
        },
        {
            id: 3,
            image: "https://randomuser.me/api/portraits/men/55.jpg",
            name: "Rahul Mehta",
            course: "Mechanical",
            marks: 62
        },
        {
            id: 4,
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            name: "Neha Joshi",
            course: "Civil",
            marks: 91
        },
        {
            id: 5,
            image: "https://randomuser.me/api/portraits/men/71.jpg",
            name: "Vikas Singh",
            course: "Electrical",
            marks: 48
        },
        {
            id: 6,
            image: "https://randomuser.me/api/portraits/women/29.jpg",
            name: "Anjali Verma",
            course: "Electronics",
            marks: 69
        }
    ];

    return (
        <div>
            <table className="city-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Marks</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((stu) => (
                        <tr
                            key={stu.id}
                            style={{
                                backgroundColor:
                                    stu.marks >= 85
                                        ? "#4ade80"
                                        : stu.marks >= 70
                                        ? "#fde047"
                                        : stu.marks >= 50
                                        ? "#f97316"
                                        : "#b91c1c",
                                color: stu.marks < 50 ? "white" : "black"
                            }}
                        >
                            <td>{stu.id}</td>
                            <td>
                                <img src={stu.image} alt={stu.name} />
                            </td>
                            <td>{stu.name}</td>
                            <td>{stu.course}</td>
                            <td>{stu.marks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
