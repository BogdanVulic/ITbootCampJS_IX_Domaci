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