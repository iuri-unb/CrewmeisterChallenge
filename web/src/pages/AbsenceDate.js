import React, {useState} from 'react';
import {BasicTable} from './../table.js';
import api from './../api';
import { Link } from 'react-router-dom';


const AbsencesByDate = () => {
    const [byDate , setDate ] = useState([]);

    const [initial , final] = window.location.search.split('&');

    const [ trash1 ,dateinitial] = initial.split('=');
    const [ trash2 ,datefinal] = final.split('=');

    async function AbsenceDate(startDate, endDate) {
        const response = await api.get(`/rangeDate?startDate=${startDate}&endDate=${endDate}`);
    
        setDate(response.data);
    }
    AbsenceDate(dateinitial , datefinal);
    console.log(byDate);
    /*
    function verifyDate(rangeDate){
        if(Array.isArray(rangeDate) && rangeDate.length){
            return "Absence by the Date range";
        }else{
            
            return "Invalid Date!";
        }
    }
    */
    
    return (
        
            <div className="content">
                <header>
                    <h1>Absence by the Date range</h1>
                    <button type="button" id="home">
                        <Link to="/">
                            <strong>Back to Home</strong>
                        </Link>
                    </button>
                </header>

                <main>                    
                    {BasicTable(byDate)}
                </main>
                
            </div>
        
    );
}

export default AbsencesByDate;