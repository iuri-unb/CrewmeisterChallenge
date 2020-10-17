import { members, absences } from './src/api.js';

async function ShowAbsences () {
    const list_absences = await absences(); 
    const list_members = await members(); 

    let peoples = [];
    list_absences.forEach(element => {
        let people = list_members.filter(member => member.id == element.id);
        people.name = 
    });
    console.log();

}

// listar todas as ausencias pelo nome;
// listar o tipo de ausencia: "membro esta doente" ou "membro esta de ferias"


