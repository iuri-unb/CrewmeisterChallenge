import {members, absences} from './api.js';

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
                peoples.push({userId: member.userId, name : member.name , type: element.type, startDate: element.startDate, endDate: element.endDate}) 
                return peoples;          
            }
        });        
    });  
    
    console.log(peoples)
}

//FilterAllAbsences (); 

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
            if(element.type == "vacation" && member.userId == element.userId)
            {
                // add name and type
                list_absences_filtered.push({ID : element.id ,name : member.name , type: element.type})           
            }
            else if(element.type == "sickness" && member.userId == element.userId)
            {
                list_sick_filtered.push({ID : element.id,name : member.name , type: element.type});        
            }
        });        
    });        
    //console.log(list_absences_filtered);
    //console.log(list_sick_filtered);
}