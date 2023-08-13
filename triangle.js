// triangle.js
// Set the number of rows in the triangle
const numRows = 5;
// Loop over each row of the triangle
for (let row = 1; row <= numRows; row++) {
  // Calculate the number of spaces needed for this row
  // Print the spaces for this row
  for (let i = 0; i < numSpaces; i++) {
    process.stdout.write(" ");
  }
  // Calculate the number of asterisks needed for this row
  const numAsterisks = 2 * row - 1;
  // Print the asterisks for this row
  for (let i = 0; i < numAsterisks; i++) {
    process.stdout.write("*");
  }
  // Move to the next line for the next row
  console.log();
}