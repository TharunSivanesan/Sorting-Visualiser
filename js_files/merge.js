
async function mergeBars(bars,l,m,r){
    let n1=m-l+1
    let n2=r-m
    let L=Array(n1)
    let R=Array(n2)
    for(let i=0;i<n1;i++){
        L[i]=bars[l+i].clientHeight
        bars[l+i].style.backgroundColor='blue'
    }
    for(let i=0;i<n2;i++){
        R[i]=bars[m+i+1].clientHeight
        bars[m+i+1].style.backgroundColor='red'
    }
    await sleep(1000);
    let k=l,i=0,j=0;
    while(i<n1&&j<n2){
        if(L[i]<=R[j]){
            bars[k].style.height=L[i]+'px'
            bars[k].style.backgroundColor='green'
            k++
            i++
        }
        else{
            bars[k].style.height=R[j]+'px'
            bars[k].style.backgroundColor='green'
            k++
            j++
        }
    }

    while(i<n1){
        bars[k].style.height=L[i]+'px'
        bars[k].style.backgroundColor='green'
        k++
        i++
    }

    while(j<n2){
        bars[k].style.height=R[j]+'px'
        bars[k].style.backgroundColor='green'
        k++
        j++
    }
    await sleep(1000);
}

async function mergeSortFunc(bars,l,r){
    if(l>=r)return;
    let m=Math.floor((l+r)/2)
    await mergeSortFunc(bars,l,m)
    await mergeSortFunc(bars,m+1,r)
    await mergeBars(bars,l,m,r)
}


let mergebtn=document.getElementById("mergebtn");

mergebtn.addEventListener('click',async ()=>{
    let size=bars.length
    await mergeSortFunc(bars,0,size-1);
})