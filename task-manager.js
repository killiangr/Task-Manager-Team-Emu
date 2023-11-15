function parseInput(input) { // + Learn PYthon
    const command = input.charAt(0);
    const id = parseInt(input.slice(1), 10);
    return { command, id };    
   
}

function updateTaskList(tasks, command, id) {
    switch (command) {
      case '+':
        tasks.push({ id: tasks.length + 1, description: id, status: 'to do' });
        break;
      case '-':
        tasks = tasks.filter(task => task.id !== id);
        break;
      case 'x':
        tasks.find(task => task.id === id).status = 'done';
        break;
      case 'o':
        tasks.find(task => task.id === id).status = 'to do';
        break;
    }
    return tasks;
  }
  
  
 module.exports = {parseInput,updateTaskList};