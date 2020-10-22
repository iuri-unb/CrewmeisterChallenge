import {members, absences} from './api.js';

export async function FilterAllAbsences () 
{
    let list_absences = [];
    let list_members = [];
    list_absences = await absences(); 
    list_members = await members();

    let All_absences = [];
    list_absences.forEach(element => {
         list_members.forEach(member => {
            // Compare id of the users
            if(member.userId == element.userId)
            {
                // add name and type
                All_absences.push({userId: member.userId, name : member.name , type: element.type, startDate: element.startDate, endDate: element.endDate}) 
                         
            }
        });        
    }); 
    return All_absences;     

}

export async function FilterAbsencesById(Id)
{
    let list_absences = [];
    let list_members = [];
    list_absences = await absences(); 
    list_members = await members();

    let list_absences_filtered_id = [];

    list_absences.forEach(element => {
        list_members.forEach(member => {
            // Compare id of the users
            if(member.userId == Id && element.userId == member.userId)
            {
                // add name and type
                list_absences_filtered_id.push({ userId: element.userId, name: member.name , type: element.type, startDate: element.startDate, endDate: element.endDate })           
            }
                
        });        
    }); 
    
    let verify = list_absences_filtered_id[0];
    if( verify.userId != Id ){
        return 1;

    }else{        
        return list_absences_filtered_id;

    }   
}

export async function FilterAbsencesByDate(startDate, endDate)
{
    let list_absences = [];
    let list_members = [];
    list_absences = await absences(); 
    list_members = await members();

    let startDate_aux = [];
    let endDate_aux = [];

    startDate_aux = startDate.split("-");
    endDate_aux = endDate.split("-");

    let list_absences_filtered_date = [];

    list_absences.forEach(element => {
        let sDate = [];
        let eDate = [];

        sDate = element.startDate.split("-");
        eDate = element.endDate.split("-");

        list_members.forEach(member => {
            
            // Compare id of the users
            if( element.userId == member.userId ) {
                if( (Number(sDate[0]) >= Number(startDate_aux[0]) && Number(eDate[0]) <= Number(endDate_aux[0])) || (Number(eDate[0]) >= Number(startDate_aux[0]) && Number(eDate[0]) <= Number(endDate_aux[0])) ){
                    if( (Number(sDate[0]) >= Number(startDate_aux[0]) && Number(eDate[0]) <= Number(endDate_aux[1])) || (Number(eDate[1]) >= Number(startDate_aux[1]) && Number(eDate[1]) <= Number(endDate_aux[1])) ){
                        if( (Number(sDate[2]) >= Number(startDate_aux[2]) && Number(eDate[2]) <= Number(endDate_aux[2])) || (Number(eDate[2]) >= Number(startDate_aux[2]) && Number(eDate[2]) <= Number(endDate_aux[2])) ){
                            // add name and type
                            list_absences_filtered_date.push({ userId: element.userId, name: member.name , type: element.type, startDate: element.startDate, endDate: element.endDate })    
                        }
                    }                
                }
            }
        });        
    }); 
    
    if(list_absences_filtered_date.length == 0){
        //console.log(list_absences_filtered_date);
        //console.log("Invalid Date");
        return 1;
    }else{
        console.log(list_absences_filtered_date);
        return list_absences_filtered_date;
    } 
    
}