
export default function taskBlock(trueOrFalse) {
    const task = false;  // Uses const instead of var
    const task2 = true;   // Uses const instead of var
  
    if (trueOrFalse) {
      const task = true;
      const task2 = false;
    }
  
    return [task, task2];
  }
  