function cleanDatabase(recordIds) {
// Requirement: Remove all odd numbers from the array
for (let i = 0; i < recordIds.length; i++) {
if (recordIds[i] % 2 !== 0) {
recordIds.splice(i, 1);
}
}
return recordIds;
}
// Test Case
const data = [1, 3, 4, 6, 7, 9, 10];
const cleaned = cleanDatabase(data);

console.log("Final Array:", cleaned);




/**
 * TASK 1: VS CODE DEBUGGER OBSERVATION (The "Drift")
 * --------------------------------------------------
 * While stepping through the original code with the VS Code Debugger:
 * 1. I set a breakpoint at the 'if' condition (Line 4).
 * 2. On the first iteration (i = 0), recordIds[0] is '1'. Since it's odd, splice(0, 1) is called.
 * 3. Immediately after splice, the array shifts: the value '3' moves from index 1 to index 0.
 * 4. The loop then executes i++, making i = 1.
 * 5. The debugger shows that recordIds[1] is now '4'. 
 * * THE DRIFT: The value '3' was skipped entirely because it moved into an index 
 * that the loop had already passed. This proves why the original output 
 * incorrectly left odd numbers in the array.
 */



// looping backward
function cleanDatabase(recordIds) {
// Requirement: Remove all odd numbers from the array
for (let i = recordIds.length -1; i >=0;i--) {
if (recordIds[i] % 2 !== 0) {
recordIds.splice(i, 1);
}
}
return recordIds;
}
// Test Case
const data1 = [1, 3, 4, 6, 7, 9, 10];
const cleaned1 = cleanDatabase(data1);

console.log("Final Array:", cleaned1);



/**
 * TASK 2: EXPLANATION OF THE FIX
 * ------------------------------
 * To resolve the "index drift," I modified the loop to iterate backwards 
 * (starting from recordIds.length - 1 down to 0).
 * * WHY THIS WORKS: 
 * When you remove an element at the current index 'i' while moving backwards, 
 * the elements that shift to fill the gap are at indices greater than 'i'. 
 * Since the loop is moving toward index 0, those shifted elements are 
 * effectively "behind" the current pointer and have already been evaluated. 
 * This ensures no element is skipped regardless of how many items are removed.
 */

function cleanDatabaseImmutable(recordIds){
    return recordIds.filter(id => id % 2 === 0);
}
const data2 = [1, 3, 4, 6, 7, 9, 10];
const cleaned2 = cleanDatabase(data2);

console.log("Final Array:", cleaned2);



 