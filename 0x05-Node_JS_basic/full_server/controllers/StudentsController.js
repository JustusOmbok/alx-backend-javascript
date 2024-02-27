import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(_, res) {
    try {
      const students = await readDatabase('./database.csv');
      const response = ['This is the list of our students'];

      Object.entries(students)
        .sort(([a], [b]) => a.localeCompare(b))
        .forEach(([field, names]) => {
          response.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        });

      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
  const { major } = req.params;
  if (!['CS', 'SWE'].includes(major.toUpperCase())) {
    return res.status(500).send('Major parameter must be CS or SWE');
  }

  try {
    const students = await readDatabase('./database.csv');
    const names = students[major.toUpperCase()] || [];
    const response = `List: ${names.join(', ')}`;

    res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error.message || 'Cannot load the database');
  }
}

module.exports = StudentsController;
