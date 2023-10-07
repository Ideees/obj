//  --------------------1---------------------

const Car1 = { Make: "Honda", Model: "Civic ", Year: 2019 };
const Car2 = { Make: " Toyota", Model: "Camry", Year: 2020 };
const Car3 = { Make: "Ford", Model: "Mustang", Year: 2018 };

console.log(`The car first`)
console.log(Car1)
console.log(`The car second`);
console.log(Car2);
console.log(`The car third`);
console.log(Car3);

// --------------------2---------------------

const arr = ['Book Name' , 'Author Name' , 'Page No']
const obj = {};
for(let i = 0 ; i < 3 ; i++){
  const input = prompt(`Enter the  ${arr[i]}`)
   obj[arr[i].toLowerCase().replace(" ", "_")] = input
}
 console.log(obj.book_name);
 console.log(obj.author_name);
 console.log(obj.page_no);
console.log(obj)

// --------------------3---------------------

const userData = [
  {name: "Ali", age: 30,},
  {name: "Ahmed", age: 32,},
  {name: "Salaar", age: 20,},
  {name: "Suleman", age: 25,},
  {name: "Hamza", age: 35,},
];
function findold(userData) {
  let oldPer = userData[0];
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].age > oldPer.age) {
      oldPer = userData[i];
    }
  }
  return oldPer.name;
}
const oldPername = findold(userData);
console.log(oldPername);

// --------------------4---------------------
const data = ["Title", "Director", "Year"];
const movie = [];
for (let j = 0; j < 3; j++) {
  var obj = {};
  for (let i = 0; i < 3; i++) {
    const inp = prompt(`${i + 1})Enter ${data[i]} of movie`);
    if (data[i] === "Year") {
      obj[data[i].toLowerCase()] = +inp;
    } else {
      obj[data[i].toLowerCase()] = inp;
    }
  }
  movie.push(obj);
}
movie.sort((a, b) => a.year - b.year);
console.log(movie);

// --------------------5---------------------

const details = ["name", "price"];
var data = [];
for (let j = 0; j < 3; j++) {
  for (let i = 0; i < 2; i++) {
    const inp = prompt(`${i + 1}) Enter ${details[i]} product `);
    if (details[i] === "price") {
      data.push(+inp);
    } else {
      data.push(inp);
    }
  }
}
console.log(data);
let sum = 0;
for (let i = 1; i < data.length; i += 2) {
  sum += data[i];
}
console.log(`Total Price: $${sum}`);
