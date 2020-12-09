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