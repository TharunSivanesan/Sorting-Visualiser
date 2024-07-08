async function partition(bars,l,r){
    if(!sortinginProgress)return -1;
    let pivot=bars[r].clientHeight
    bars[r].style.backgroundColor='red'
    let j=l-1
    for(let i=l;i<=r;i++){
        bars[i].style.backgroundColor='red'
        if(!sortinginProgress)return;
        await sleep()
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
    if(j==-1)return -1
    await quickSort(bars,l,j-1);
    await quickSort(bars,j+1,r);
}


