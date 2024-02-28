import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(_, res) {
    try {
      const databaseFile = process.argv[2];
      const students = await readDatabase(databaseFile);
      const response = ['This is the list of our students'];

      Object.entries(students)
        .sort(([a], [b]) => a.localeCompare(b))
        .forEach(([field, names]) => {
          response.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        });

      res.status(200).send(response.join('\n'));
      return response; // Add return statement here
    } catch (error) {
      res.status(500).send(error.message);
      throw error; // Add throw statement here
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major.toUpperCase())) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const databaseFile = process.argv[2];
      const students = await readDatabase(databaseFile);
      const names = students[major.toUpperCase()] || [];
      const response = `List: ${names.join(', ')}`;

      res.status(200).send(response);
      return response; // Add return statement here
    } catch (error) {
      res.status(500).send(error.message || 'Cannot load the database');
      throw error; // Add throw statement here
    }
  }
}

module.exports = StudentsController;
