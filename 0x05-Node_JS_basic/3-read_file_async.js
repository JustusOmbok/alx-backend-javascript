const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
        const students = lines.map((line) => line.split(','));

        const studentsCount = students.length - 1; // Subtract 1 to exclude header line
        console.log(`Number of students: ${studentsCount}`);

        const fields = {};
        students.forEach((student) => {
          const field = student[3];
          if (field === 'field') return; // Skip the header line
          if (field in fields) {
            fields[field].push(student[0]);
          } else {
            fields[field] = [student[0]];
          }
        });

        for (const field in fields) {
          if (field !== '') { // Ensure that the field is not an empty string
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
          }
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
