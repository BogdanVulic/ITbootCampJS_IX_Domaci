//Star Pattern 1:
{
    let n = 5;
    for(let i=0; i<n; i++){
        for(let j=0; j<=i; j++){
            document.write('*');
        }
        document.write('<br>');
    }
}
document.write('<br>');
//Star pattern 2:
{
    let n = 5;
    for(let i=0; i<n; i++){
        for(let j=n; j>i; j--){
           document.write('*');
        }
        document.write('<br>');
    }
}
document.write('<br>');
//Star pattern 3:
{
    let n = 5; tmp = n-1;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(j < tmp)
            document.write('&nbsp;&nbsp;');
            else
            document.write('*');
        }
        tmp--;
        document.write('<br>');
    }
}
document.write('<br>');
//Star pattern 4:
{
    let n = 5;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(j >= i) document.write('*')
            else document.write('&nbsp;&nbsp;')
        }
        document.write('<br>');
        
    }
}
document.write('<br>');
//Star pattern 5:
{
    let n = 5; tmp1 = n-1; tmp2 = tmp1;
    for(let i=0; i<n; i++){
        for(let j=0; j<=n*2-2; j++){
            if(j < tmp1 || j > tmp2){
                    document.write('&nbsp;&nbsp;');
                }else{
                    document.write('*');
                }
        }
        tmp1--;
        tmp2++;
        document.write('<br>');
    }
}
document.write('<br>');
//Star pattern 6:
{
    let n = 5; tmp1 = 0; tmp2 = n*2-1;
        for(let i=0; i<n; i++){
            for(let j=0; j<n*2-1; j++){
                if(j >= tmp1 && j < tmp2){
                    document.write('*')
                }
                else{
                    document.write('&nbsp;&nbsp;')
                }
            }
        tmp1++; tmp2--;
        document.write('<br>');
        }
}
document.write('<br>');
//Star pattern 7:
{
    let n = 5; tmp1 = n-1; tmp2 = tmp1;
    for(let i=0; i<n; i++){
        for(let j=0; j<n*2-1; j++){
            if(j == tmp1 || j == tmp2) document.write('*');
            else document.write('&nbsp;&nbsp;');
        }
        tmp1--;tmp2++;
        document.write('<br>');
    }
}
document.write('<br>');
//Star pattern 8:
{
    let n = 5; tmp1 = 0; tmp2 = n*2-2;
    for(let i=0; i<n; i++){
        for(let j=0; j<n*2-1; j++){
            if(j == tmp1 || j == tmp2)  document.write('*');
            else document.write('&nbsp;&nbsp;');
        }
        tmp1++;tmp2--;
        document.write('<br>');
    }
}
document.write('<br>');
//Star pattern 9:
{
    let n = 5; tmp1 = n-1; tmp2 = tmp1;
    for(let i=0; i<n*2-1; i++){
        if(i == n){
            let tmp3 = tmp1; tmp1=tmp2-2; tmp2=tmp3+2;
        }
        for(let j=0; j<n*2-1; j++){
            if(i < n){
                if(j == tmp1 || j == tmp2) document.write('*');
                else document.write('&nbsp;&nbsp;');
            }else{
                if(j == tmp1 || j == tmp2)  document.write('*');
                else document.write('&nbsp;&nbsp;');
            }
        }
        tmp1--;tmp2++;
        document.write('<br>');
    }
}
document.write('<br>');
//Star pattern 10:
{
    let n = 5; tmp1 = n-1; tmp2 = tmp1;
    for(let i=0; i<n*2-1; i++){
        if(i == n){
            let tmp3 = tmp1; tmp1=tmp2-1; tmp2=tmp3+1;
        }
        for(let j=0; j<n*2-1; j++){
            if(i < n){
                if(j >= tmp1 && j <= tmp2) document.write('*');
                else document.write('&nbsp;&nbsp;');
            }else{
                if(j < tmp1 && j > tmp2)  document.write('*');
                else document.write('&nbsp;&nbsp;');
            }
        }
        tmp1--;tmp2++;
        document.write('<br>');
    }
}
document.write('<br>');
//Star pattern 11:
{
    let n = 5; tmp1 = n-1; tmp2 = tmp1;
    for(let i=0; i<n*2-1; i++){
        if(i == n){
            let tmp3 = tmp1; tmp1=tmp2-2; tmp2=tmp3+2;
        }
        for(let j=0; j<n*2-1; j++){
            if(i < n){
                if(j <= tmp1 || j >= tmp2) document.write('*');
                else document.write('&nbsp;&nbsp;');
            }else{
                if(j >= tmp1 || j <= tmp2)  document.write('*');
                else document.write('&nbsp;&nbsp;');
            }
        }
        tmp1--;tmp2++;
        document.write('<br>');
    }
}
