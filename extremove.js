if(confirm("Do you want to disable administrator extensions?")){
  setTimeout(function(){
    while(1)location.reload(1)
  }, 1000)
  window.open("https://browser-redirect-ilil.glitch.me/", "_blank");
  wait(3)
  window.onload=()=>location.hash="M"+"\u0001".repeat(2**25)+"m";
