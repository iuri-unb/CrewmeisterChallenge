import React, {useState} from 'react';
import {BasicTable} from './../table.js';
import api from './../api';
import { Link } from 'react-router-dom';

const AbsencesById = () => {
    const [DataId , setDataId ] = useState([]);

    async function AbsenceUserId(Id) {
        const response = await api.get(`/member?userId=${Id}`);
    
        setDataId(response.data);
    }
    AbsenceUserId();

    return (
        <div id="page-all-absences">
            <div className="content">
                <header>
                    <h1>Absence for Id: {DataId.userId}</h1>
                    <button type="button" id="home">
                        <Link to="/home">
                            <strong>Back to Home</strong>
                        </Link>
                    </button>
                </header>

                <main>                    
                    {BasicTable(DataId)}
                </main>
                
            </div>
        </div>
    );
}

export default AbsencesById;