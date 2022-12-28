// 1.By using object litreal:{};

let person={
    name:"ram",
    age:28
};
console.log(person)
console.log(person.age);

// 2.By using new keyword
 let obj= new object();
 obj.name="Shayam"
 obj.age=19
 console.log(obj)
 console.log(obj.name)
 console.log(obj.age)

// 3.By using constructor function.

function fun(){
    this.name="Ram",
    this.age=22
    this.hobbies=['swim','Sing','Read']
}
const data = new fun();
console.log(data.name)
console.log(data.age)
console.log(data.hobbies)
console.log(data.hobbies[1])

// function constructor
function user(name,age){
this.name=name;
this.age=age;
}
var user1= new user('Rohit',22);
var user2=new user('Rahul',21);
// callbacks
function person1(myFunction){
return myFunction;
}
function person2(){
return ("Hi Everyone!!!")
}
let persondata=person1(person2);
console.log(persondata);

//prototypes
function Person(name,age){
this.name = name,
this.age = age
}
Person.prototype.nationality="Indian";
const peson1 = new Person("Satya", "23")
console.log("name:"+ peson1.name,"age:"+peson1.age,peson1.nationality);

//prototype chain can be seen here...

let fruits=["apple","mango","orange"]
console.log(fruits);

// inheritance

function employe(name,age,place){
this.name=name,
this.age=age,
this.place=place
}
function employe2(gender){
employe.call(this.name,this.age,this.place)
this.gender=gender
}
let emp = new employe ("Bishnu",23,"WB")
let emp2= new employe2("Krishna",24,"WB","M")
console.log(emp);
console.log(emp2);


var a=null;
console.log(a);