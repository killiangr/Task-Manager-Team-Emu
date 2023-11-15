const { parseInput } = require('./task-manager');

test('parseInput should return command and id', () => {
    expect(parseInput('+ Learn Python')).toEqual({ command: '+', id: NaN });
    //expect(parseInput('- 1')).toEqual({ command: '-', id: 1 });
    });

  
