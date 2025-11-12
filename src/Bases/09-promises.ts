

const myPromise = new Promise<number>( (resolve, reject ) => {
    setTimeout(() => {
        reject('Mi amigo se perdio')
        //resolve(100);

    }, 2000); // 2 segundos

});

myPromise.then((myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
}).catch( (reason) => {
    console.warn(reason)
})
.finally(() => {
    console.log('Pues a seguir con mi vida')
}

);