let apiurl=fetch("https://api.giphy.com/v1/gifs/trending?api_key=f9MAWMVUm4XFBTPt637hqzpu32TScNUx"); 
apiurl.then(res=>res.json()).then(x=>{
    let arr=x.data;
    console.log(arr);
    arr.map(x=>{
        let title=x.title.toLowerCase();
        console.log(title);
        let btn=document.getElementById("btn");
        btn.addEventListener("click",(e=>{
        e.preventDefault();
        let val=document.getElementById("value").value.toLowerCase();
        let giff=document.getElementById("img")
        if(title.includes(`${val}`)){
        giff.setAttribute("src",`${x.images.original.url}`);
        console.log(x.url);
        }
    }))
})
});
apiurl.catch(()=>{alert("Api Failed");console.log("api failed");
})