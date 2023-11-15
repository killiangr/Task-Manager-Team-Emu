function parseInput(input) { // + Learn Python
    const parts = input.split(' '); // array
    const action = parts[0].toLowerCase(); //command
    const id = parseInt(parts[1]);
    const description = input.slice(1)
    return { action, description, id };    
   
}

function updateTaskList(tasks, command, id, description) {
    switch (command) {
      case '+':
        tasks.push({ id: tasks.length + 1, description: description, status: 'to do' });
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
  
function displayTasks(tasks) {
    tasks.forEach(task => {
      const status = task.status === 'done' ? '[x]' : '[ ]';
      console.log(`${task.id} ${status} ${task.description}`);
    });
  }

const readline = require('readline');

function runInteractionLoop() {
  const tasks = [];
  console.log("Task Manager - Enter commands(+ description, - id, x id, o id, q) : ");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', (input) => {
    const { action, description, id } = parseInput(input);
    const updateTasks = updateTaskList(tasks, action, id, description);
    displayTasks(updateTasks);
    
    if (action === 'q') {
        console.log("Exiting the interaction loop");
        console.log('Bye!');
        rl.close();
    }
  });
}

runInteractionLoop();
  
 module.exports = {parseInput,updateTaskList,displayTasks, runInteractionLoop};