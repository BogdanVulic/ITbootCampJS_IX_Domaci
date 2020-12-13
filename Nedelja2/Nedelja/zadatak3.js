let n = 5;
for(let i=0; i<n; i++){
    for(let j=0; j<=i; j++){
        process.stdout.write('# ');
    }
    console.log('');
}
// 3. zadatak; drugi nacin:
{
    let n = 5;
    for(let i=1; i<=n; i++){
        console.log('*'.repeat(i));
    }
}