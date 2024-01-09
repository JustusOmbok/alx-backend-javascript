function getListStudentIds(arrayOfStudents) {
  if (!Array.isArray(arrayOfStudents)) {
    return [];
  }

  return arrayOfStudents.map((student) => student.id);
}

export default getListStudentIds;
