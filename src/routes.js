import express from 'express';
import { FilterAllAbsences, FilterAbsencesById, FilterAbsencesByDate } from './filter.js';
import {icalEvents} from './create_ical.js';

const routes = express.Router();

routes.get('/', async (request, response) => {
    const calendar = await icalEvents();    

    return calendar;
});

routes.get('/allAbsences', async (request, response) => {
    const absences = await FilterAllAbsences();

    return response.json(absences);
});

routes.get('/member', async (request, response) => {
    const userId = Number(request.query.userId);
    const filterUser = await FilterAbsencesById(userId);

    return response.json(filterUser);
});


export default routes;