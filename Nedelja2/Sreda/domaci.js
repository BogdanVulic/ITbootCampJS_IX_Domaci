//1. zadatak:
{
    let a = 4;
    let b = 9;
    console.log('Zbir:',a+b,'\nRazlika:', a-b,'\nProizvod:', a*b,'\nKoličnik:', a/b,'\nOstatak pri deljenju:', a%b,'\nStepen:', a**b);
}
console.log('----------------------------');
//2. zadatak:
{
    let price = 4312;
    let cash = 4312;
    if(price > cash){
        console.log(`You don't have enough money!\nCurrent balance:`,cash);
    }
    else{
        console.log(`Shopping successeful!\nCurent balance: `,cash-price)
    }
}
console.log('----------------------------');
//3. zadatak:
{
    let x = -6;
    let y = 3;
    if(x%y == 0){
        console.log('Number is divisible by',y)
    }else{
        console.log('Number is NOT divisible by',y)
    }
}
console.log('----------------------------');
//4. zadatak:
{
    let x = -3574;
    let cond = true;
    let counter = 0;
    while(cond){
        if(x%5 != 0){
            x++;
            continue;
        }else 
        if(counter < 1000){
            process.stdout.write(`${x},`);
            x+=5
            counter++;
        }else{
            cond = false;} 
    }
    console.log(counter);
}
