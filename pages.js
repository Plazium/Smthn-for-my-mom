var menu1 = document.getElementById("menu1")
var menu2 = document.getElementById("menu2")
var menu3 = document.getElementById("menu3")
var menu4 = document.getElementById("menu4")
function changeMenu(n) {
 switch(n) {
   case "1":
      page1.style.display = block
      page2.style.display = hidden
      page3.style.display = hidden
      page4.style.display = hidden
     break;
   case "2":
      page1.style.display = hidden
      page2.style.display = block
      page3.style.display = hidden
      page4.style.display = hidden
     break;
   case "3":
      page1.style.display = hidden
      page2.style.display = hidden
      page3.style.display = block
      page4.style.display = hidden
     break;
   case "4":
      page1.style.display = hidden
      page2.style.display = hidden
      page3.style.display = hidden
      page4.style.display = block
     break;
 }
}
