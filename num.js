function printPattern() {
    var size = 9; // Size of the pattern (number of rows and columns)
    var pattern = []; // Array to store the pattern
    
    // Create the pattern
    for (var i = 0; i < size; i++) {
      pattern[i] = [];
      for (var j = 0; j < size; j++) {
        pattern[i][j] = Math.max(Math.abs(i - size/2), Math.abs(j - size/2)) + 1;
      }
    }
    
    // Print the pattern
    for (var i = 0; i < size; i++) {
      var row = '';
      for (var j = 0; j < size; j++) {
        row += pattern[i][j] + ' ';
      }
      console.log(row);
      
    }
  }
  
  // Call the function to print the pattern
  printPattern();

  
//   
