

function greet( name: string) :string {
    return `Hola ${name}`;
}

const message = greet('Daniel');

console.log(message);



function getUser(){

    return{
        uid: 'Juan-123',
        username: 'CanoCamacho'
    };
}

const user = getUser;
console.log(user)

//EJERCICIO

const getUser2 = (uid: string , username: string) => {

    return`Datos del usuario: 
    Uid:${uid}
    Name:${username}
    `
}

const User2 = getUser2('Juan-123', 'CanoCamacho');

console.log(User2);


const getUser3 = () => ({
        uid: 'ABC-123',
        username: 'El_Papi23',
});

console.log(getUser3)



// Ejemplo de ejercicios
interface personal {
    name : string,
    lastName: string,
    password: number
};

function getPersonal(): personal{
    return{
        name: 'Daniel',
        lastName: 'Cano Camacho',
        password: 29032005
    }
};

console.log(getPersonal);