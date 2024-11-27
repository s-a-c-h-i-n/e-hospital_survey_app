import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './adminDashboard.css'
import ProfileCard from './profileCard';
import CustomPieChart from './pieChart';
import Feedback from './feedback';
import { Link } from 'react-router-dom';


const AdminDashboard = () => {

    const data = [
        { name: 'Sun', reviews: 0 },
        { name: 'Mon', reviews: 0 },
        { name: 'Tues', reviews: 0 },
        { name: 'Wed', reviews: 0},
        { name: 'Thurs', reviews: 0 },
        { name: 'Fri', reviews: 0 },
        { name: 'Sat', reviews: 0 },
    ];

    const averageRating = "4.5/5"
    const averageScore = "80%"
    const responseRate = "50%"

    const [surveyData, setSurveyData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);
    const [feedback, setFeedback] = useState(false);

    const getOverallRating = (surveyData) => {
        var totalRating = 0
        surveyData.map((response) => {
            response.multipleChoiceAnswers.map((question) => { question.question === "How would you rate your overall experience?" ? totalRating = totalRating + parseInt(question.answer) : totalRating = totalRating + 0 })
        })
        return totalRating / surveyData.length
    }

    const getDeptFeedbackCount = (surveyData) => {
        var depts = {
            "ER": 0,
            "Cardio": 0,
            "Pedia": 0,
            "Nursing": 0
        }
        surveyData.map((response) => {
            response.multipleChoiceAnswers.map((question) => { question.question === "Which department are you providing a rating for?" ? depts[question.answer] = depts[question.answer] + 1 : depts[question.answer] = depts[question.answer] + 0 })
        })
        return [
            { name: 'ER', reviews: depts["ER"] },
            { name: 'Cardio', reviews: depts["Cardio"]  },
            { name: 'Pedia', reviews: depts["Pedia"]  },
            { name: 'Nursing', reviews: depts["Nursing"]  },
        ]
    }

    const recommendationStats = (surveyData) => {
        var recommendation = {
            "Yes": 0,
            "No": 0
        }
        surveyData.map((response) => {
            response.multipleChoiceAnswers.map((question) => { question.question === "Would you recommend our service to others?" ? recommendation[question.answer] = recommendation[question.answer] + 1: recommendation[question.answer] = recommendation[question.answer] + 0 })
        })
        return [
            { name: 'Yes', value: parseInt(recommendation.Yes/surveyData.length * 100), color: '#4A56E2' },
            { name: 'No', value: parseInt(recommendation.No/surveyData.length * 100), color: '#38BDF8' },
        ]

    }

    const updateAverageFeedback = (surveyData) => {
        return [
            { name: 'Sun', reviews: 0 },
            { name: 'Mon', reviews: 0 },
            { name: 'Tues', reviews: 0 },
            { name: 'Wed', reviews: surveyData.length},
            { name: 'Thurs', reviews: 0 },
            { name: 'Fri', reviews: 0 },
            { name: 'Sat', reviews: 0 },
        ]
    }

    const updateIndex = (index) => {
        setIndex(index)
        setFeedback(!feedback)
        console.log(index)
        console.log(feedback)
    }


    useEffect(() => {
        // Define the async function for fetching data
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/surveys/responses");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const result = await response.json();
                return result
            } catch (err) {
                setError(err.message); // Update the error state
            } finally {
                setLoading(false); // Update the loading state
            }
        };
        fetchData().then((result) => {
            console.log(result)
            setSurveyData(result)
        });// Call the function
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="adminMain">
            <div className="adminDashboard"><h2>Browse Customer Responses</h2></div>
            <div className="buttons-container" style={{paddingTop: "5%"}}>
            {
                surveyData ? surveyData.map((response, index) => 
                <button className='action-button' onClick= {() => updateIndex(index)}>{"Survey " + (index + 1)}</button>) : <div></div>
            }
            </div>
            {feedback ? <Feedback surveyData={surveyData[index].multipleChoiceAnswers}></Feedback> : <div></div>}
            <div className="adminDashboard">
                <div className="barGraph" style={{ width: "80%" }}>
                    <p style={{ opacity: "0.5" }}>Average Feedback Provided per Day</p>
                    <h2>{surveyData.length}</h2>
                    <ResponsiveContainer height={350} width="100%">
                        <BarChart data={updateAverageFeedback(surveyData)} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="reviews" fill="#569aeb" barSize={20} radius={100} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="statsOverview" style={{ paddingLeft: "0%" }}>
                    <p>Average Rating</p>
                    <h2>{getOverallRating(surveyData) + "/5"}</h2>
                    <p>Average Satisfactory Score</p>
                    <h2>{(getOverallRating(surveyData)/5) * 100 + "%"}</h2>
                    <p>Response Rate</p>
                    <h2>{responseRate}</h2>
                </div>
                <div className="profiles" style={{ paddingLeft: "0%" }}>
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
                <div className="pieChart" style={{ paddingLeft: "10%" }}>
                    <CustomPieChart data={recommendationStats(surveyData)}/>
                </div>
                <div className="barGraph" style={{ width: "80%" }}>
                    <p style={{ opacity: "0.5", paddingLeft: "20%" }}>Feedback per department</p>
                    <ResponsiveContainer height={350} width="100%" style={{ paddingLeft: "10%" }}>
                        <BarChart data={getDeptFeedbackCount(surveyData)} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
            <h3 className="buttons-container">Adddtional Options</h3>
            <div className="buttons-container">
                <Link to="/admin"><button className="action-button">Create New Survey</button></Link>
                <button className="action-button">Activity Logs</button>
                <button className="action-button">Manage Admin Accounts</button>
            </div>
        </div>
    )
}

export default AdminDashboard;