const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    countStudents(process.argv[2])
      .then((output) => {
        res.end(output);
      })
      .catch((error) => {
        console.log(error);
        res.end('Cannot load the database\n');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found\n');
  }
});

app.listen(1245);

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').filter(line => line.trim() !== ''); // Remove empty lines
        const students = lines.map(line => line.split(','));

        const studentsCount = students.length - 1; // Subtract 1 to exclude header line
        let output = `Number of students: ${studentsCount}\n`;

        const fields = {};
        students.forEach(student => {
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
            output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
          }
        }

        resolve(output);
      }
    });
  });
}
