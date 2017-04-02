
function izracunPlaca ( { brojSatiMjesecno, brojNocnih, brojPopodne, brojSubota, brojNedjelja, brojPrekovremeni, brojBlagdan, godineStaza, stopaPrireza } ) {

    let osnovica = 5211.20; 
    let koeficijentPlace = 1.794; 
    let osnovnaPlaca = osnovica * koeficijentPlace * (1 + 0.005 * godineStaza);
    let dodatakHitna = osnovnaPlaca * 0.20;
    let polozajniDodatak = osnovnaPlaca * 0.12;
    let osnovnaSatnica = osnovnaPlaca / brojSatiMjesecno;
    let nocniSat = osnovnaSatnica * 0.4 * brojNocnih;
    let popodnevniSat = osnovnaSatnica * 0.1 * brojPopodne;
    let subotaSat = osnovnaSatnica * 0.25 * brojSubota;
    let nedjeljaSat = osnovnaSatnica * 0.35 * brojNedjelja;
    let prekovremeniSat = osnovnaSatnica * 1.5 * brojPrekovremeni;
    let blagdanSat = osnovnaSatnica * 1.5 * brojBlagdan;

    let brutoPlaca = osnovnaPlaca + dodatakHitna + polozajniDodatak + 
                     nocniSat + popodnevniSat + subotaSat + nedjeljaSat + prekovremeniSat + blagdanSat;
    let dohodak = brutoPlaca - (brutoPlaca * 0.15) - (brutoPlaca * 0.05);
    let poreznaOlaksica = 3800;
    let poreznaOsnovica = dohodak - poreznaOlaksica;
    let porez24 = poreznaOsnovica < 17500 ? poreznaOsnovica * 0.24 : 17500 * 0.24 ;
    let porez36 = poreznaOsnovica > 17500 ? ( poreznaOsnovica - 17500 ) * 0.36 : 0; 
    let ukupniPorez = porez24 + porez36;
    let prirez = ukupniPorez * stopaPrireza;
    let nettoPlaca = dohodak - ukupniPorez - prirez;

    return {
        osnovica,
        koeficijentPlace,
        osnovnaPlaca,
        dodatakHitna,
        polozajniDodatak,
        osnovnaSatnica,
        nocniSat,
        popodnevniSat,
        subotaSat,
        nedjeljaSat,
        prekovremeniSat,
        blagdanSat,

        brutoPlaca,
        dohodak,
        poreznaOlaksica,
        poreznaOsnovica,
        porez24,
        porez36,
        ukupniPorez,
        prirez,
        nettoPlaca,
    };
}

export {izracunPlaca};