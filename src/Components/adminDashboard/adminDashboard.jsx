import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../Survey/Survey.css'
import ProfileCard from './profileCard';
import CustomPieChart from './pieChart';


const AdminDashboard = () => {

    const data = [
        { name: 'Sunday', reviews: 40 },
        { name: 'Monday', reviews: 30 },
        { name: 'Tuesday', reviews: 20 },
        { name: 'Wednesday', reviews: 10 },
        { name: 'Thursday', reviews: 10 },
        { name: 'Friday', reviews: 10 },
        { name: 'Saturday', reviews: 10 },
    ];

    const depts = [
        { name: 'ER', reviews: 4 },
        { name: 'Cardio', reviews: 3 },
        { name: 'Pediatrics', reviews: 2 },
        { name: 'Nursing', reviews: 5 },
    ];

    const averageRating = "4.5/5"
    const averageScore = "80%"
    const responseRate = "50%"

    return (
        <div className="adminMain">
            <div className="adminDashboard">
                <div className="barGraph" style={{ width: "30%" }}>
                    <p style={{ opacity: "0.5" }}>Average Feedback Provided per Day</p>
                    <h2>2</h2>
                    <ResponsiveContainer height={350} width="100%">
                        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="reviews" fill="#569aeb" barSize={20} radius={100} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="statsOverview">
                    <p>Average Rating</p>
                    <h2>{averageRating}</h2>
                    <p>Average Satisfactory Score</p>
                    <h2>{averageScore}</h2>
                    <p>Response Rate</p>
                    <h2>{responseRate}</h2>
                </div>
                <div className="profiles">
                    <p style={{ alignItems: "left", fontWeight: "bold" }}>Staff</p>
                    <ProfileCard
                        name="Jason Statham"
                        title="Doctor"
                        image="https://via.placeholder.com/40"
                    />
                    <br></br>
                    <ProfileCard
                        name="Jane Doe"
                        title="Head Nurse"
                        image="https://via.placeholder.com/40"
                    />
                    <br></br>
                    <ProfileCard
                        name="John Doe"
                        title="Receptionist"
                        image="https://via.placeholder.com/40"
                    />
                    <br></br>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="row2">
            <div className="trendingTopics">
                <h2>Trending Topics</h2>
                <h3>Waiting Times</h3>
                <h3>Staff Behaviour</h3>
                <h3>Customer Service</h3>
                <h3>Ease of Appointments</h3>
            </div>
            <div className="pieChart" style={{paddingLeft: "10%"}}>
                <CustomPieChart />
            </div>
            <div className="barGraph" style={{ width: "30%", paddingLeft: "15px" }}>
                    <p style={{ opacity: "0.5" }}>Feedback per department</p>
                    <ResponsiveContainer height={350} width="100%">
                        <BarChart data={depts} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="reviews" fill="#569aeb" barSize={20} radius={100} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;