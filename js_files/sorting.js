function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
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

let newarraybtn = document.getElementById('newarraybtn')

newarraybtn.addEventListener('click', () => {
    let arr=generateArray(20)
    createBars(arr)
});


