function leeCookie(clave){
    let cookies = document.cookie;
    let coleccion = cookies.split(";")
    let cookie = [];
    for(var i = 0;i<coleccion.length;i++){
        cookie[coleccion[i].split("=")[0]] = coleccion[i].split("=")[1]
    }
    return cookie[clave]
}

function deleteAllCookies() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function updateScrollPercentage() {
  const scrollTop = document.documentElement.scrollTop;
    
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;

  // Round the scroll percentage to two decimal places
  const roundedPercentage = Math.round(scrollPercentage * 100) / 100;
    if(roundedPercentage > 80 && paginaactual == "inicio"){
        console.log("vamos a cargar mÃ¡s entradas")
        
        fetch("admin/json/entradas.php?posicion="+ultimopost)
            .then(res => res.json())
            .then(res => anadeEntradas(res))
    }
  return(`${roundedPercentage}`);
}

// Minificado
function leeCookie(e){let t=document.cookie.split(";"),n=[];for(var o=0;o<t.length;o++)n[t[o].split("=")[0]]=t[o].split("=")[1];return n[e]}function deleteAllCookies(){const e=document.cookie.split(";");for(let t=0;t<e.length;t++){const n=e[t],o=n.indexOf("="),c=o>-1?n.substr(0,o):n;document.cookie=c+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}}function updateScrollPercentage(){const e=document.documentElement.scrollTop/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100,t=Math.round(100*e)/100;return t>80&&"inicio"==paginaactual&&(console.log("vamos a cargar mÃ¡s entradas"),fetch("admin/json/entradas.php?posicion="+ultimopost).then((e=>e.json())).then((e=>anadeEntradas(e)))),`${t}`}