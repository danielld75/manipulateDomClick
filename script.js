var list = document.getElementById('list');
var addElem = document.getElementById('addElem');
addElem.addEventListener('click', function(){
  var element = document.createElement('li');
  var tagLi = document.getElementsByTagName('li');
  element.innerHTML = "item " + tagLi.length;
  list.appendChild(element);
});