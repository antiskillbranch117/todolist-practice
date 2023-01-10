
var checkboxes = document.querySelectorAll("input[type=checkbox][name=checkbox]");
let enabledSettings = []
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
      console.log(Array.from(checkboxes)) 
      let array=Array.from(checkboxes)
      
     for(i of array){
        if(i.checked==true){
            console.log('true')
            i.finish==true
        }
        else if(i.checked==false){
            console.log('false')
            i.finish==false
        }
     }
      
    console.log(enabledSettings)
  })
});