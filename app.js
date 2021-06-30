class Team {
    constructor( firstName, lastName, age, height, country, status){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.country = country;
    this.status = status;
    }
    sowData() {
        console.log(this.firstName, this.lastName, this.age, this.height, this.country, this.status )
    }
}

const p1 = new Team ("Naruto", "Uzumaki", 19, "180cm", "Konoha", "Genin");
const p2 = new Team ("Sasuke", "Uchiha", 19, "182cm", "Konoha", "Genin");
const p3 = new Team ("Sakura", "Haruno", 19, "165cm", "Konoha", "Jonin");
const p4 = new Team ("Kakashi", "Hatake", 31, "181cm", "Konoha", "Hokage");


p1.sowData();
p2.sowData();
p3.sowData();
p4.sowData();

