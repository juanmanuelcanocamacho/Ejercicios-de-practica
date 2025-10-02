

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address
};

interface Address {
    city: String;
    postalCode: number;
}


const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'Madrid',
        postalCode: 28037,
    }
};

const spiderman: Person = {
    firstName: "Peter",
    lastName: "Parker",
    age: 26,
    address: {
        city: 'Barcelona',
        postalCode: 36025
    }
};

/*spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address.city = 'Barcelona';
spiderman.address.postalCode = 35024*/

console.log(ironman, spiderman);