import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './app.css';

const Home = () => {
    const [inputId , setId ] = useState('');
    const [inputStartDate , setStart ] = useState('');
    const [inputEndDate , setEnd ] = useState('');

    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <h1>Absences</h1>
                </header>

                <main>
                    <center>
                        <button type="button" id="home">
                            <Link to="/AllAbsences">
                                <strong>All Absences</strong>
                            </Link>
                        </button>
                        <button type="button" id="home">
                            <Link to="/">
                                <strong>Export iCal File</strong>
                            </Link>
                        </button><br/><br/><br/><br/>                        
                        <input type="text" onChange={(e)=> setId(e.target.value)} placeholder="Write an ID"></input>
                        <button type="submit" id="home">
                            <a href= {`/member?userId=${inputId}`} >
                                <strong>Search Member</strong>
                            </a>
                        </button><br /><br />
                        <input type="text" onChange={(sd)=> setStart(sd.target.value)} placeholder="Write the start date"></input>
                        <input type="text" onChange={(ed)=> setEnd(ed.target.value)} placeholder="Write the end date"></input>
                        <button type="submit" id="home">
                            <a href= {`/rangeDate?startDate=${inputStartDate}&endDate=${inputEndDate}`} >
                                <strong>Search</strong>
                            </a>
                        </button>
                    </center>                    
                </main>
                
            </div>
        </div>
    );
}

export default Home;