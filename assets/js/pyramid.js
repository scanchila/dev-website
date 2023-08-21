

async function drawPyramid(pyramid, n = 0, delay=200){
    l = pyramid.children.length
    for (var i=0; i<l; i++){
        pyramid.children[i].style.backgroundColor = "gray"

    }

    for (var i=1; i<=n; i++){
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log(pyramid.children[l-i])
    pyramid.children[l-i].style.backgroundColor = "green"
    

    }
}
