import { members, absences } from './api.js';

export async function FilterAllAbsences () 
{
    let list_absences = [];
    let list_members = [];
    list_absences = await absences(); 
    list_members = await members(); 
    

    let peoples = [];
    list_absences.forEach(element => {
         list_members.forEach(member => {
            // Compare id of the users
            if(member.userId == element.userId)
            {
                // add name and type
                peoples.push({name : member.name , type: element.type}) 
                return peoples;          
            }
        });        
    });
    
    // console.log(peoples)
}

export async function FilterAbsencesByType()
{
    let list_absences = [];
    let list_members = [];
    list_absences = await absences(); 
    list_members = await members(); 

    let list_absences_filtered = [];
     
    let list_sick_filtered = [];

    list_absences.forEach(element => {
         list_members.forEach(member => {
            // Compare id of the users
            if(element.type == "vacation")
            {
                // add name and type
                list_absences_filtered.push({name : member.name , type: element.type})  
                return list_absences_filtered;         
            }
            else
            {
                list_sick_filtered.push({name : member.name , type: element.type}); 
                return list_sick_filtered;       
            }
        });        
    });
    //console.log(list_absences_filtered);
    //console.log(list_sick_filtered);
}