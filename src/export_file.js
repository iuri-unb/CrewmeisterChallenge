import fs from 'fs';
import path from 'path';

// Where fileName is name of the file and response is Node.js Reponse. 
const responseFile = (fileName, response) => {
    const filePath =  path.resolve('.','..','download'); 
  
    // Check if file specified by the filePath exists 
    fs.access(filePath, function(exists){
        if (exists) {     
          // Content-type is very interesting part that guarantee that
          // Web browser will handle response in an appropriate manner.
          response.writeHead(200, {
            "Content-Type": "text/calendar",
            "Content-Disposition": "attachment; filename=" + fileName
          });
          console.log("Encontrou");
          fs.createReadStream(filePath).pipe(response);

        } else {
          response.writeHead(400, {"Content-Type": "text/plain"});
          response.end("ERROR File does not exist");
          console.log("Falhou");
        }
      });
}
//responseFile('calendar.ics');
export default responseFile;