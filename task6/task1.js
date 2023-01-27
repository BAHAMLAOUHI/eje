list=[
    { name:"MONCEF" , age:13 },
   { name:"BAHIJA", age:23},
   { name:"ALA" ,age:18},
]

//person=>{} ===== function(person){}

function MineurMajeur(list) {
     let list2=list.map(person => {
        let age = person.age;
        if (age >= 18) {
            person.status = "majeur";
        } else {
            person.status = "mineur";
        }
        return person;
    });
    return list2;
}
 console.log(MineurMajeur(list));