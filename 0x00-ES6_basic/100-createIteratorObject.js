export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  const iterator = {
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const currentDepartment = departments[currentDepartmentIndex];
      const currentEmployee = currentDepartment[currentEmployeeIndex];

      if (currentEmployeeIndex >= currentDepartment.length - 1) {
        // Move to the next department
        currentDepartmentIndex += 1;
        currentEmployeeIndex = 0;
      } else {
        // Move to the next employee in the current department
        currentEmployeeIndex += 1;
      }

      return { value: currentEmployee, done: false };
    },
  };

  return iterator;
}
