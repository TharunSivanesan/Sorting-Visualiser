async function partition(bars,l,r){
    let pivot=bars[r].clientHeight
    bars[r].style.backgroundColor='red'
    let j=l-1
    for(let i=l;i<=r;i++){
        bars[i].style.backgroundColor='red'
        await sleep(300)
        if(bars[i].clientHeight<pivot){
            j++
            let temp=bars[j].clientHeight
            bars[j].style.height=bars[i].clientHeight+'px'
            bars[i].style.height=temp+'px'
        }
        bars[i].style.backgroundColor='yellow'
    }
    j++
    let temp=bars[j].clientHeight
    bars[j].style.height=pivot+'px'
    bars[r].style.height=temp+'px'
    bars[j].style.backgroundColor='green'
    return j;
}


async function quickSort(bars,l,r){
    if(l>r)return;
    if(l==r)bars[l].style.backgroundColor='green'
    let j=await partition(bars,l,r)
    await quickSort(bars,l,j-1);
    await quickSort(bars,j+1,r);
}



let quickbtn=document.getElementById("quickbtn")

quickbtn.addEventListener('click',async ()=>{
    let n=bars.length
    await quickSort(bars,0,n-1)
})