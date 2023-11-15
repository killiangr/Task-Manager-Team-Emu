const { parseInput, updateTaskList } = require('./task-manager');

test('parseInput should return command and id', () => {
    expect(parseInput('+ Learn Python')).toEqual({ command: '+', id: NaN });
    expect(parseInput('- 1')).toEqual({ command: '-', id: 1 });
});

test('updateTaskList should update tasks based on command', () => {
    const tasks = [];
    
    expect(updateTaskList(tasks, '+', 'Learn Python')).toHaveLength(1);
    
    const updatedTasks = updateTaskList(tasks, '+', 'Learn Python');
    expect(updateTaskList(updatedTasks, 'x', 1)[0].status).toEqual('done');
  });

  
