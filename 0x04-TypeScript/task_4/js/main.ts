// Import constants and objects
import { cpp, java, react } from './subjects/Cpp';
import { cTeacher } from './subjects/Teacher';

// Log information for Cpp subject
console.log('Cpp:');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Log information for Java subject
console.log('\nJava:');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Log information for React subject
console.log('\nReact:');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
