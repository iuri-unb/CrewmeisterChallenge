import assert from 'assert';
import { members, absences } from '../api.js';
import { FilterAllAbsences, FilterAbsencesById, FilterAbsencesByDate } from '../filter.js';

const everyItemContainsKey = (key) => (collection) =>
  collection.forEach((item) => assert(Object.keys(item).includes(key)));

describe('members', () => {
  describe('every member has key', () => {
    [
      'id',
      'name',
      'userId',
      'image',
    ].forEach((key) => {
      it(key, () => members().then(everyItemContainsKey(key)));
    });
  });
});

describe('absences', () => {
  describe('every absence has key', () => {
    [
      'admitterNote',
      'confirmedAt',
      'createdAt',
      'crewId',
      'endDate',
      'id',
      'memberNote',
      'rejectedAt',
      'startDate',
      'type',
      'userId',
    ].forEach((key) => {
      it(key, () => absences().then(everyItemContainsKey(key)));
    });
  });
});

describe('Filter all absences', () => {
  describe('every absence has the member name', () => {
    [
      'userId',
      'name',
      'type',
      'startDate',
      'endDate',     
    ].forEach((key) => {
      it(key, () => FilterAllAbsences().then(everyItemContainsKey(key)));  
    });
  });
});