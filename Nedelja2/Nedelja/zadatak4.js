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