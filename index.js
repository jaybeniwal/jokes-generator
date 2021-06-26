let promo = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let condition = false;
            if (condition) {
                console.log('success');
                res();
            } else {
                console.log('unsucess');
                rej();
            }
        }, 3000);

    });
}
promo().then( ()=>{
    console.log('complete');
});

promo().catch( ()=>{
    console.log('uncomplete');
})
console.log(promo);
