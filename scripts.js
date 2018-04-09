var list = document.getElementById("list"),
    add = document.getElementById("addElem");

add.addEventListener("click", function() {
  var element = document.createElement("li");
  var liByTagName = list.getElementsByTagName("li").length;
  element.innerHTML = "item" + " " + liByTagName ;
  list.appendChild(element);
});