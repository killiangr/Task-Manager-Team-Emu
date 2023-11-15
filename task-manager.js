function parseInput(input) { // + Learn PYthon
    const command = input.charAt(0);
    const id = parseInt(input.slice(1), 10);
    return { command, id }; 
}
  
 module.exports = {parseInput};