const buttons = document.querySelectorAll(".sortbtn");
let barrange=document.getElementById("barrange")
let sortinginProgress=false
function disableButtons(){
    sortinginProgress=true
    barrange.disabled=true;
    buttons.forEach(item=>{
        const button=document.getElementById(item.id)
        button.classList.add('off')

    })
}
function enableButtons(){
    sortinginProgress=false
    barrange.disabled=false;
    buttons.forEach(item=>{
        const button=document.getElementById(item.id)
        button.classList.remove('off')
    })
}

barrange.addEventListener('input',()=>{
    let arr=generateArray(barrange.value)
    createBars(arr)
})

let speedrange=document.getElementById("speedrange")
let time=1000000/speedrange.value
speedrange.addEventListener('change',()=>{
    let speed=speedrange.value
    time=Math.floor(1000000/speed)
})
function sleep(){
    return new Promise(resolve=>setTimeout(resolve,time))
}

function generateArray(size){
    let arr=[]
    for(let i=0;i<size;i++){
        let c=`bar${i}`
        let a=Math.floor(Math.random()*1000)
        let n=a%100
        if(n==0)n=1;
        arr.push({c,n});
    }
    return arr
}

function createBars(arr){
    let bardiv = document.getElementById('bardiv');
    bardiv.innerHTML = '';
    arr.forEach(item => {
        let bar = document.createElement('div');
        bar.classList.add('bar', item.c);  
        bar.style.height = 2*item.n + 'px'; 
        bardiv.appendChild(bar);  
    });
}

//new array btn
let newarraybtn = document.getElementById('newarraybtn')
newarraybtn.addEventListener('click', async () => {
    sortinginProgress=false;
    await sleep()
    let arr=generateArray(barrange.value)
    createBars(arr)
});

let bardiv=document.getElementById('bardiv');
let bars=bardiv.getElementsByClassName('bar')
let n=bars.length

//bubble
let bubblebtn=document.getElementById("bubblebtn");
bubblebtn.addEventListener('click',async ()=>{
    disableButtons();
    bubblebtn.classList.add('on');
    bubblebtn.classList.remove('off');
    await bubbleSortWithDelay(bars);
    bubblebtn.classList.remove('on');
    enableButtons();
})

//selection
let selectionbtn=document.getElementById("selectionbtn");
selectionbtn.addEventListener('click',async ()=>{
    disableButtons();
    selectionbtn.classList.remove('off');
    selectionbtn.classList.add('on');
    await selectionSortWithDelay(bars);
    selectionbtn.classList.remove('on');
    enableButtons();
})

//insertion
let insertionbtn=document.getElementById("insertionbtn");
insertionbtn.addEventListener('click',async ()=>{
    disableButtons();
    insertionbtn.classList.remove('off');
    insertionbtn.classList.add('on');
    await insertionSortWithDelay(bars);
    insertionbtn.classList.remove('on');
    enableButtons();
})


//quick
let quickbtn=document.getElementById("quickbtn")
quickbtn.addEventListener('click',async ()=>{
    disableButtons()
    quickbtn.classList.remove('off');
    quickbtn.classList.add('on');
    let n=bars.length
    await quickSort(bars,0,n-1)
    quickbtn.classList.remove('on');
    enableButtons()
})


//merge
let mergebtn=document.getElementById("mergebtn");
mergebtn.addEventListener('click',async ()=>{
    disableButtons();
    mergebtn.classList.remove('off');
    mergebtn.classList.add('on');
    let n=bars.length
    await mergeSortFunc(bars,0,n-1);
    mergebtn.classList.remove('on');
    enableButtons()
})








