import React from 'react';
import api from './../api';
import { Link } from 'react-router-dom';

const iCal = () => {

    async function iCalRoute() {
        const response = await api.get('/');
        
        return response;
    }
    
    /*
    function verifyFlag(flagFile){
        if(flagFile == 0){
            return ("File Saved on ./download");
        }else{
            return ("Fail on export the .ics file");
        }
    }
    */
    return (
        <div id="page-all-absences">
            <div className="content">

                <header>
                    <h1>File Saved on ./download</h1>
                    <button type="button" id="home">
                        <Link to="/home">
                            <strong>Back to Home</strong>
                        </Link>
                    </button>
                </header>

            </div>
        </div>
    );
}

export default iCal;