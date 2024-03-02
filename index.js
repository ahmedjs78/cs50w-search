let inputDivEl =  document.querySelectorAll(".search-input");
const inputEl = document.querySelector(".input-field-q")

inputDivEl.forEach(function(x){
    x.addEventListener('mouseover', function(){
        inputEl.style.backgroundColor = '#303134';
        
    })
    x.addEventListener('mouseout', function() {
        // Reset styles when the mouse is not over
        inputEl.style.backgroundColor = ''; // Reset to the default background color
    });
})

inputEl.addEventListener('focus',function (){
    inputDivEl.forEach(function(i){
        i.style.backgroundColor = '#303134'
    })
})


inputEl.addEventListener('blur',function (){
    inputDivEl.forEach(function(i){
        i.style.backgroundColor = ''
    })
})