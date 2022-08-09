import React from "react";
import { Link } from 'react-router-dom'
import jobList from '../../data/data.json';

export function Jobs({ index, showMore }) {
    return <div>
        <h1>welcome to jobs page</h1>
        <ul>
            {jobList
                .filter((_, i) => i < index)
                .map(x => (
                    <Link key={x.id} to={`/jobs/${x.id}`} >
                        <li>{x.name}</li>
                    </Link>
                ))}
        </ul>

        {jobList.length > index && <button onClick={showMore}>load more</button>}
    </div>
}