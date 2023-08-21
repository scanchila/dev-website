




async function drawloadbar(loadbar, n = 0, delay=200){
     l = loadbar.children.length
    /*for (var i=0; i<l; i++){
        loadbar.children[i].className = "loadbar__section_gray";

    }*/
    
    for (var i=1; i<=n; i++){
        if (loadbar.matches(':hover')) {
            await new Promise(resolve => setTimeout(resolve, delay));
            loadbar.children[l-i].className = "loadbar__section_green";
        }
    }
    
}

async function undrawloadbar(loadbar, n = 0, delay=200){
    l = loadbar.children.length
    for (var i=0; i<n; i++){
        if (!loadbar.matches(':hover')) {
            console.log('Mouse is over the element now.');
        
        await new Promise(resolve => setTimeout(resolve, delay));
        loadbar.children[i].className = "loadbar__section_gray";
        }
    }
  
}

function onhover(obj){
    loadbar = obj
    drawloadbar(loadbar, n = 6, delay=50)
    
}

function outhover(obj){
    loadbar = obj
    undrawloadbar(loadbar, n = 6, delay=50)
}