import { heroes, type Hero, Owner } from "./data/heroes.data"



const getHeroById = (id: number): Hero | undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    })


    return hero;
};


//console.log(getHeroById(7));


//TAREA IMPORTACIONES Y EXPORTACIONES
export const getHeroByOwner = (owner: Owner) => {
    const heroesByOwner = heroes.filter(
        hero => hero.owner === owner
    )

    return heroesByOwner
};