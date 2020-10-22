import React, {useState} from 'react';
import {BasicTable} from './../table.js';
import api from './../api';
import { Link } from 'react-router-dom';

const AllAbsences = () => {
    const [Data , setData ] = useState([]);

    async function Absences() {
        const response = await api.get('/allAbsences');
    
        setData(response.data);  
    }
    Absences();

    return (
        
            <div >
                <header>
                    <h1>All Absences</h1>
                    <button type="button" id="home">
                        <Link to="/">
                            <strong>Back to Home</strong>
                        </Link>
                    </button>
                </header>

                <main>                    
                    {BasicTable(Data)}
                </main>
                
            </div>
        
    );
}

export default AllAbsences;