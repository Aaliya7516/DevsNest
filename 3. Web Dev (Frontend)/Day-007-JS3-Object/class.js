// -=-=-=-=- Create object in js -=-==-=-=-=-

const person = {
    name : 'Ron',
    school : 'Hogwarts',
    desc : function(){
        console.log('Ron is the best friend of Harry and Harmoine.')   
    }
}

console.log(person.name); // Ron
console.log(person.school); // Hogwarts
person.desc(); // Ron is a best friend of Harry and Harmoine.
person.studious = false; // create a property for the object and assign it a new value
console.log(person.studious); // false

// or you can use for-in loop to colsole.log the values
for (let item in person){
    console.log(item, '::', person[item]);
}

// -=-=-=-=-=-=-  To get all the keys & values -=-=-=-=-=-=-=-=-=-=-=-

console.log(Object.keys(person)); // ["name", "school", "desc", "studious"]
console.log(Object.values(person)); // ["Ron", "Hogwarts", [Function: desc], false]

//-=-=-=-=-=-=-=-  freeze the object  =-=-=-=-=-=-=-=-

Object.freeze(person);  // now the values of person can't b changed
person.name = 'Harry';  // will not give any error, but also no change
console.log(person.name); // Ron

// -=-=-=-=-=- other ways of creating object -=-=-=-=-=-=-=-

const person2 = new Object({data: true});
console.log(person2.data); // true
const person3 = Object.create({data: false})
console.log(person3.data); // false
const person4 = person2; // the pointer for person4 points to same address as person2 
person4.data = false; // updating person4 updates person2 as well
console.log(person2.data); // false rather then true

