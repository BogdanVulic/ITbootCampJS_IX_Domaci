// zadatak 6: Napisati funkciju koja proverava da li je uneti string palindrom.
{
    function isPalindrome(strng){
        return strng == strng.split('').reverse().join('');
    }
    console.log(isPalindrome('aasddg'));
}
// zadatak 7: Napraviti funkciju koja prima niz ljudi koji  su lajkovali neki post i onda vraca string u sledecem formatu:
{
    let users = ['Marko', 'Pera', 'Zika', 'Milisav', 'Dragutin']
    function likes(users){
        switch(users.length){
            case 0: return 'Nikome se ne svidja';
            case 1: return `${users[0]} voli ovo`;
            case 2: return `${users[0]} i ${users[1]} vole ovo`;
            case 3: return `${users[0]}, ${users[1]} i ${users[2]} vole ovo`;
           default: return `${users[0]}, ${users[1]} i ${users.length-2+''} drugih vole ovo`;
        }
    }
    console.log(likes(users));
}
//8 zadatak:
{   
    let deca = ['pera','ana','pera','zika','pera','pera','pera','pera','pera','lana','ana','pera','ana','pera']
    function nonNaughtyList(deca){
        let dobraDeca = [];
        for(let i=0; i<deca.length; i++){
            let j = i+1;
            for(j; j<deca.length; j++){
                if(deca[i] == deca[j] && !dobraDeca.includes(deca[i])){
                    dobraDeca.push(deca[i]);
                    break;
                }
            }
        }
        return dobraDeca;
    }
    console.log(nonNaughtyList(deca));
}
