

const person = {
    name: 'Tony',
    age: 30,
    key: 'Iroman',
};

//const name = person.name;
//const age = person.age;
//const key = person.key;

//const {name, age, key} = person

interface Hero {
    name: string;
    age: number;
    key: string;
    rank? : string;
};


const useContext = ( {name, age, key, rank }: Hero) => {
    return{
        keyname: 'ABC',
        user: {
            name,
            age,
        },
        rank
    };
};

const context = useContext(person);

//console.log(context);


//*Ejercios de practica */
console.log('Ejercicio solo sacar el rango: ')

//sacar el rango
const {rank} = useContext(person)
console.log({rank})

//Sacar el keyname
console.log('Ejercicio sacar solo el keyname')

const {keyname} = useContext(person);
console.log({keyname});

//Sacar el name
console.log('Ejercicio sacar el name')

const {user: {name}} = useContext(person);
console.log("=>",name);
