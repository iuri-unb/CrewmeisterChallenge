import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home.js';
import AllAbsences from './pages/AllAbsences.js';
import AbsencesById from './pages/AbsenceId.js';
import AbsencesByDate from './pages/AbsenceDate.js';
import iCal from './pages/icalFile.js';


const Routes = () => {

    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={AllAbsences} path="/allAbsences" exact />
            <Route component={AbsencesById} path="/member" exact/>
            <Route component={AbsencesByDate} path="/rangeDate" exact/>
            <Route component={iCal} path="/download" exact />
        </BrowserRouter>
    )
}

export default Routes;
