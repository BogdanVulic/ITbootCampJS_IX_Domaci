function pozdrav(vreme){
    if(vreme < 0 || vreme > 23) console.log('Pogresan unos; unesite broj od 0 do 24');
    else if(vreme >= 4 && vreme < 10) console.log('Dobro jutro!')
    else if(vreme >= 10 && vreme < 19) console.log('Dobar dan!')
    else console.log('Dobro vece!')
}
pozdrav(1);