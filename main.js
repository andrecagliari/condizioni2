// primo esercizio con if-else

// if(Temperatura <= -10){
//     console.log(`Copriti…ancora ti raffreddi.`);    

// }else if(Temperatura <= 0){
//     console.log(`Non e’ tanto il freddo quanto l’umidità.`);    

// }else if(Temperatura < 20){
//     console.log(`Non ci sono più le mezze stagioni.`);    

// }else if(Temperatura < 30){
//     console.log(`Datemi una bella Ichnusa ghiacciata.`);

// }else if(Temperatura > 30){
//     console.log(`lu mare, lu sole, lu ientu.`);
// }

let Temperatura = Number(prompt(`Inserire la temperatura in gradi Celsius:`));

let Descrizione;

switch (true) {
    case Temperatura <= -10:
        Descrizione = `Copriti…ancora ti raffreddi.`
        break;
    case Temperatura <= 0:
        Descrizione = `Non e’ tanto il freddo quanto l’umidità.`
        break;
    case Temperatura < 20:
        Descrizione = `Non ci sono più le mezze stagioni.`
        break;
    case Temperatura < 30:
        Descrizione = `Datemi una bella Ichnusa ghiacciata.`
        break;
    default:
        Descrizione = `lu mare, lu sole, lu ientu.`
        break;
}

console.log(Descrizione);