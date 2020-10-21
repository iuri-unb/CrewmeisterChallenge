import fs from 'fs';
import path from 'path';

// Where fileName is name of the file and response is Node.js Reponse. 
const responseFile = (fileName, response) => {
    const filePath =  path.resolve('.','..','download', fileName); 
  
    // Check if file specified by the filePath exists 
    fs.access(filePath, function(exists){
        if (exists) {     
          return 0;

        } else {
          
          return 1;
          
        }
      });
}
//responseFile('calendar.ics');
export default responseFile;