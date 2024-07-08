async function insertionSortWithDelay(bars){
    let size=bars.length
    for(let i=0;i<size;i++){
        let j=i     
        if(!sortinginProgress)return;   
        while(j>0&&bars[j].clientHeight<bars[j-1].clientHeight){
            bars[j].style.backgroundColor='red'
            bars[j-1].style.backgroundColor='red'
            await sleep()
            let a=bars[j].clientHeight
            let b=bars[j-1].clientHeight
            bars[j].style.height=b+'px'
            bars[j].style.backgroundColor='green'
            bars[j-1].style.height=a+'px'
            bars[j-1].style.backgroundColor='yellow'
            j--;
        }
        bars[j].style.backgroundColor='green'
    }
}


