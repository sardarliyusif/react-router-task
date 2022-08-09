import React from "react";
import { Link, useParams } from 'react-router-dom'
import jobList from '../../data/data.json';

export function JobDetails() {
    const { id } = useParams();

    const job = jobList.find(job => job.id == id);

    return <div>
        <h1>welcome to jobs /id page</h1>
        <Link to="/" >Home</Link>
        <br />
        <Link to="/jobs" >Jobs</Link>

        <div>
            {job ? 
            <h1>{job.name} {job.surname}</h1> :
            <p>404 not found</p>}
        </div>
    </div>
}
