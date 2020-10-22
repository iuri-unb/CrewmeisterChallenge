import React from 'react';
import api from './../api';
import { Link } from 'react-router-dom';

const iCal = () => {

    async function iCalRoute() {
        const response = await api.get('/download');
        console.log(response);
        return response;
    }
    let flag;
    flag = iCalRoute();
    /*
    function verifyFlag(flagFile){
        if(flagFile == 0){
            return ("File Saved on ./download");
        }else if(flagFile == 1){
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
                        <Link to="/">
                            <strong>Back to Home</strong>
                        </Link>
                    </button>
                </header>

            </div>
        </div>
    );
}

export default iCal;