import { members, absences } from './api.js';
import responseFile from './export_file.js';
import ics from 'ics';
import path from 'path';
import fs from 'fs';

export async function icalEvents() {
    let list_absences = [];
    let list_members = [];
    list_absences = await absences(); 
    list_members = await members();
    
    list_absences.forEach(element => {
        list_members.forEach(member => {
            if(member.userId == element.userId)
            {   
                let start = [];
                start = element.startDate.split("-");
                let end = [];
                end = element.endDate.split("-");
                
                const { error, value } = ics.createEvents([
                    {
                    start: [Number(start[0]), Number(start[1]), Number(start[2]), 0, 0],
                    end: [Number(end[0]), Number(end[1]), Number(end[2]), 0, 0],
                    title: `Absence of ${member.name}`,
                    description: element.admitterNote,
                    location: 'Germany',
                    url: 'https://crewmeister.com/',
                    geo: { lat: 48.1235092, lon: 11.6001101 },
                    categories: [element.type],
                    status: 'CONFIRMED',
                    busyStatus: 'OOF',
                    organizer: { name: member.name, email: `${member.name}@crewmeister.com` }, 
                }
                
                ]);

                if (error) {
                    console.log(error)
                    return ("Problema ao gerar o Arquivo");
                }
                //console.log(value);
                fs.writeFile(path.resolve('download', 'calendar.ics'), value, {enconding:'utf-8',flag: 'a'}, function (err) {
                    if (err) throw err;
                    //console.log('Arquivo salvo!');
                });
                                
            }
            
        });
    });
    const verifyFile = responseFile("calendar.icms");
    return verifyFile;
        
}

