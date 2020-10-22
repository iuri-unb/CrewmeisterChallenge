import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home.js';
import AllAbsences from './pages/AllAbsences.js';
import AbsencesById from './pages/AbsenceId.js';
import AbsencesByDate from './pages/AbsenceDate.js';
import iCal from './pages/icalFile.js';


const Routes = () => {
    //const query = new URLSearchParams(this.props.location.search);
    //const Id = query.get('userId');
    return (
        <BrowserRouter>
            <Route component={Home} path="/home" exact />
            <Route component={AllAbsences} path="/allAbsences" exact />
            <Route component={AbsencesById} path="/members" exact/>
            <Route component={AbsencesByDate} path="/rangeDate" exact/>
            <Route component={iCal} path="/" exact />
        </BrowserRouter>
    )
}

export default Routes;
