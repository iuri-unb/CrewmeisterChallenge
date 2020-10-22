import React, {useState} from 'react';
import {BasicTable} from './../table.js';
import api from './../api';
import { Link } from 'react-router-dom';

const AbsencesByDate = () => {
    const [byDate , setDate ] = useState([]);

    async function AbsenceDate(startDate, endDate) {
        const response = await api.get(`/rangeDate?startDate=${startDate}&endDate=${endDate}`);
    
        setDate(response.data);
    }
    AbsenceDate();

    return (
        <div id="page-all-absences">
            <div className="content">
                <header>
                    <h1>Absence by the Date range</h1>
                    <button type="button" id="home">
                        <Link to="/home">
                            <strong>Back to Home</strong>
                        </Link>
                    </button>
                </header>

                <main>                    
                    {BasicTable(byDate)}
                </main>
                
            </div>
        </div>
    );
}

export default AbsencesByDate;