//Votre code ici
function add(a, b) {
    const numA = parseFloat(a);  // Convertir l'entrée 'a' en nombre
    const numB = parseFloat(b);  // Convertir l'entrée 'b' en nombre
    if (isNaN(numA) || !isFinite(numA) || isNaN(numB) || !isFinite(numB)) {
        throw new Error('Arguments invalides.');
    }
    return numA + numB;
}

 export default add;
