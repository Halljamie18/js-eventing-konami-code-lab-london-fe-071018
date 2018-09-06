const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

function init() {

  document.body.addEventListener("keydown", function(e){
    console.log(e.which)
    
    const define = parseInt(e.detail || e.which);
 
    if (define === code[index]) {
      index++;
   
      if (index === code.length) {
          alert("Hurray!");
          index = 0;
      }
    }
    else index = 0;
  });
}

init();


