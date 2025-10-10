


//DESESTRUCTURACION DE ARREGLOS

const characterName = ['Goku', 'Veggeta', 'Trunks'];

//Sacar Goku
const [p1] = characterName;
console.log({p1});

//Sacar Veggeta
const [, p2] = characterName;
console.log({p2});

//Tarea Sacar Trunks y cambiar el nombre a truncks
const [, , truncks] = characterName;
console.log({truncks});


const returnsArrayFn = () => {
    return ['ABC', 123] as const;
};

const [letters, numbers] = returnsArrayFn();
console.log(letters, numbers + 100);