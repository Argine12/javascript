//Asynchronus

console.log("Argine");
setTimeout(() => {
    console.log("Melkumyn");
}, 10000);

console.log(18);




//Sinchronus

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    showData() {
        console.log(this.firstName, this.lastName, this.age);
    }
}

const p = new Person( 'Argine', 'Melkumyan', 18)

p.showData();