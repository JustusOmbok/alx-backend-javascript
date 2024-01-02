
export default function taskBlock(trueOrFalse) {
    let task = false;  // Uses let instead of var
    let task2 = true;   // Uses let instead of var
  
    if (trueOrFalse) {
      let task = true;  // Uses let instead of var
      let task2 = false;  // Uses let instead of var
    }
  
    return [task, task2];
  }