import React, {useState} from 'react';
import {BasicTable} from './../table.js';
import api from './../api';
import { Link } from 'react-router-dom';

const AbsencesById = () => {
    const [DataId , setDataId ] = useState([]);
    const [lixo,id] = window.location.search.split('=');

    
    async function AbsenceUserId(id) {
        const response = await api.get(`/member?userId=${id}`);
            
        setDataId(response.data);
    }
    AbsenceUserId(id);    
    
    function verifyId(id){
        if(id == ""){
            return "Invalid Id!";
        }else{
            return "Absence by Id";
        }
    }

    return (
        
            <div >
                <header>
                <h1>{verifyId(DataId)}</h1>
                    <button type="button" id="home">
                        <Link to="/">
                            <strong>Back to Home</strong>
                        </Link>
                    </button>
                </header>

                <main>                    
                    {BasicTable(DataId)}
                </main>
                
            </div>
        
    );
}

export default AbsencesById;