var menu1 = document.getElementById("menu1")
var menu2 = document.getElementById("menu2")
var menu3 = document.getElementById("menu3")
var menu4 = document.getElementById("menu4")
function changeMenu(n) {
 switch(n) {
   case "1":
      menu1.style.display = block
      menu2.style.display = hidden
      menu3.style.display = hidden
      menu4.style.display = hidden
     break;
   case "2":
      menu1.style.display = hidden
      menu2.style.display = block
      menu3.style.display = hidden
      menu4.style.display = hidden
     break;
   case "3":
      menu1.style.display = hidden
      menu2.style.display = hidden
      menu3.style.display = block
      menu4.style.display = hidden
     break;
   case "4":
      menu1.style.display = hidden
      menu2.style.display = hidden
      menu3.style.display = hidden
      menu4.style.display = block
     break;
 }
}
