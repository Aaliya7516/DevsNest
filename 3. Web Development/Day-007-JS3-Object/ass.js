// 1. Write a JavaScript program to list the properties of a JavaScriptobject. 
// Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
// Sample Output: name,sclass,rollno

var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
console.log(Object.keys(student)); // ["name", "sclass", "rollno"]

// 2. Write a JavaScript program to delete the rollno property from the following object. 
// Also print the object before and after deleting the property. 
// Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(student);
delete student.rollno;
console.log(student);

// 3. Write a JavaScript program to get the length of a JavaScript object.  
// Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(Object.values(student).length);

// 4. Write a JavaScript program to display the reading status (i.e. display book name, 
//     author name and reading status) of the following books. 
//     var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
//     { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book', readingStatus: false }];
    
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book', readingStatus: false }];

for (book of library){
    for (att in book){
        console.log(att + ': ' + book[att]);
    }
    console.log('------------------------')
}

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
//  Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. 
//  Try To Attempt : Difficult Level Increased

r = 3.33333333333
h = 5
console.log(Math.round((3.14*2*r*h)*10000)/10000)


// 6. Write a JavaScript program to sort an array of JavaScript objects.  
// Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
// { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
// { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 
// Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, 
// [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book" }, 
// [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 

library.sort( (a, b) => b.libraryID - a.libraryID );
console.log(library);