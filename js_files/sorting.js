let arr=[]
for(let i=0;i<100;i++){
    let c=`bar${i}`
    let n=Math.floor(Math.random()*100)
    arr.push({c,n});
}

let bardiv=document.getElementById("bardiv")
for(let i=0;i<len;i++){
    let div=document.createElement('div');
    div.classList.add(arr[i].c);
    div.setAttribute('height',arr[i].n)
    bardiv.appendChild(div);
}