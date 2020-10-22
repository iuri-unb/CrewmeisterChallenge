import fs from 'fs';
import path from 'path';

// Where fileName is name of the file and response is Node.js Reponse. 
const responseFile = (fileName, response) => {
  const filePath =  path.resolve('.','..','download', fileName); 
  console.log(filePath);
  let flag;
  // Check if file specified by the filePath exists 
  fs.access(filePath, function(exists){
      if (exists) {     
        //flag = 0;
        return("File Saved on ./download>");
        //return flag;

      } else {  
        //flag = 1;        
        //return flag;
        return("Fail on export the .ics file");
      }
    });
}
//responseFile('calendar.ics');
export default responseFile;