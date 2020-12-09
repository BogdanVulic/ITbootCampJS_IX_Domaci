//1. zadatak:
{
    let price = 1257; R = 40; r = R/2; surface = r*r*Math.PI; pricePerSqCM = price/surface;
    console.log('Price of pizza per square cm is',(pricePerSqCM).toFixed(2),'$');
}
console.log('--------------------');
//2. zadatak:
{
    for(let i=1; i<=100; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log('FizzBuzz ');
        }else if(i%3 == 0){
            console.log('Fizz ');
        }else if(i%5 == 0){
            console.log('Buzz ');
        }else {
            console.log(i);
        }
    }
}
console.log('--------------------');
//3. zadatak:
{
    let n = 5;
    for(let i=0; i<n; i++){
        for(let j=0; j<=i; j++){
            process.stdout.write('#');
        }
        console.log('');
    }
}
console.log('--------------------');
//4. zadatak:
{
    let n = 5; tmp = n;
    for(let i=0; i<n; i++){
        for(let j=0; j<=n; j++){
            if(j < tmp)
            process.stdout.write('  ');
            else
            process.stdout.write('# ');
            
        }
        tmp--;
        console.log('');
    }
}
console.log('--------------------');
//5. zadatak:
{
    let n = 5; tmp1 = n-1; tmp2 = n+1;
    for(let i=0; i<n; i++){
        for(let j=0; j<=n*2+1; j++){
            if(j == n){
            process.stdout.write('  ');      
            }else if(j < tmp1|| j > tmp2){
                process.stdout.write('  ');
            }else{
                process.stdout.write('# ');
            }
        }
        tmp1--;
        tmp2++;
        console.log('');
    }
}