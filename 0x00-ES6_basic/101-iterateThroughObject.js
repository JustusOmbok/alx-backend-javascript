export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const employee of reportWithIterator) {
    result += `${employee} | `;
  }

  // Removes the trailing ' | ' if there are employees
  return result.length > 0 ? result.slice(0, -3) : result;
}
