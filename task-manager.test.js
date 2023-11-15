const { parseInput, updateTaskList, displayTasks } = require('./task-manager');

test('parseInput should return action, description, id', () => {
    expect(parseInput('+ Learn Python')).toEqual({ action: '+', description: " Learn Python", id: NaN });
    //expect(parseInput('- 1')).toEqual({ action: '-', description: " 1", id: 1 });
});

test('updateTaskList should update tasks based on command', () => {
    const tasks = [];
    expect(updateTaskList(tasks, '+', 'Learn Python')).toHaveLength(1);
    expect(updateTaskList(updatedTasks, 'x', 1)[0].status).toEqual('done');
  });

test('ShowTasks',() => {
    const command = '+ Learn Python';
    const parseInput = parseInput(command);
    const task = [];
    const updatedTasks = updateTaskList(task, parseInput.command, parseInput.id);
    const printTasks = "1 [ ] Learn Python";
    expect(displayTasks(updatedTasks).toEqual(printTasks));
})
