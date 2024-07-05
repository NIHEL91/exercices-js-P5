//Votre code ici
function add(a, b) {
    if (isNaN(a) || !isFinite(a) || isNaN(b) || !isFinite(b)) {
        throw new Error('Arguments invalides.');
    }
    return a + b;
}

 export default add;
