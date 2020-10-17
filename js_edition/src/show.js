import { members, absences } from './src/api.js';
import {FilterAbsencesByType, FilterAllAbsences} from "./filter.js";

function TableGenerator() {
    return(
        <table id="teste">
            <td>
                <th>Name</th>
                <th>Absence Reason</th>
                <th>Date</th>
            </td>
        </table>   
    );
}

export function RowGenerator(idTable, Absences) {
    
    var tabela = document.getElementById(idTable);
    var linha = tabela.insertRow();
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);   
    var celula3 = linha.insertCell(2); 
    celula1.innerHTML = Absences.name; 
    celula2.innerHTML = Absences.type; 
    celula3.innerHTML = Absences.startDate;
    
}

export function ShowAllAbsences(ListAbsences) {
    let row = ``;
    ListAbsences.array.forEach(element => {
        row += ` <tr>
                    <td>${element.name}</td>
                    <td>${element.type}</td>
                    <td>${element.startDate}</td>
                    <td>${element.endDate}</td>
                </tr>`
    });

    $("tbody").append(row);  
}

export function ShowAbsencesByType(ListAbsences, Type) {
    
}
