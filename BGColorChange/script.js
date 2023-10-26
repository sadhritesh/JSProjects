function ChangeBG(color){
    document.body.style.backgroundColor = color;
    let elm = document.getElementsByClassName('text')
    if (color == '#000000'){
        for (let t of elm){
            t.style.color = 'white';
        }
    }else{
        for (let t of elm){
            t.style.color = 'black';
        }
    }
}