let textbox = document.getElementById('textfield')
textbox.addEventListener('input',function(){
    let text = this.value;
    document.getElementById('Char').innerHTML = `${text.length} `;

    text = text.trim();
    let word = text.split(" ");
    let new_text = word.filter(function(elm){
        return  elm != "";
    })
    document.getElementById('word').innerHTML = `${new_text.length} `;

})
