async function selectionSortWithDelay(bars){
    let size=bars.length
    for(let i=0;i<size;i++){
        let min=bars[i].clientHeight
        let key=i
        bars[key].style.backgroundColor='red'
        for(let j=i+1;j<size;j++){
            bars[j].style.backgroundColor='red'
            if(!sortinginProgress)return;
            await sleep();
            let a=bars[j].clientHeight
            if(min>a){
                bars[key].style.backgroundColor='yellow'
                key=j
                min=a
            }
            else bars[j].style.backgroundColor='yellow'

        }  
        if(key!=i){
            let a=bars[i].clientHeight
            let b=bars[key].clientHeight
            bars[key].style.height=a+'px'
            bars[i].style.height=b+'px'
            bars[key].style.backgroundColor='yellow'   
        } 
        bars[i].style.backgroundColor='green'
    }
}

