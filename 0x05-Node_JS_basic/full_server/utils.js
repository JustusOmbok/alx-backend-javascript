import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = {};

        lines.forEach((line, index) => {
          if (index !== 0) { // Skip header line
            const [firstName, , , field] = line.split(',');
            if (firstName && field) {
              if (!students[field]) {
                students[field] = [];
              }
              students[field].push(firstName);
            }
          }
        });

        resolve(students);
      }
    });
  });
};

export default readDatabase;
module.exports = readDatabase;
