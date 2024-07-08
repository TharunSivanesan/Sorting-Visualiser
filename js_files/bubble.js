async function bubbleSortWithDelay(bars){
    let size=bars.length
    for(let i=0;i<size;i++){
        let j=0
        for(;j<size-1-i;j++){
            if(!sortinginProgress)return;
            bars[j].style.backgroundColor='red'
            bars[j+1].style.backgroundColor='red'
            await sleep()
            if(bars[j].clientHeight>bars[j+1].clientHeight){
                // let k=j+1
                let a=bars[j].clientHeight
                let b=bars[j+1].clientHeight
                bars[j].style.height=b+'px'
                bars[j+1].style.height=a+'px';
            }
            bars[j].style.backgroundColor='yellow'
            bars[j+1].style.backgroundColor='yellow'
        }
        bars[j].style.backgroundColor='green'
    }
}



