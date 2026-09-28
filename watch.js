



setInterval(function time(){
   
    const watch=new Date();
    const hour=watch.getHours();
    const min=watch.getMinutes();
   return document.getElementById("value").textContent=`${hour}:${min}` ;
},1000);




