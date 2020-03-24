function getTarget(e) {    //declare function
  if (!e) {                //if there is no event object
    e = window.event;      //use old ie event object 
  }
  return e.target || e.srcElement;   //get the target of event 
}

function itemDone(e) {                //declare function
  //remove item from the list
  var targe, elParent, elGrandParent;  //declare variables
  target = getTarget(e);               // get the item clicked link
  elParent = target.parentNode;        // get its list item
  elGrandParent = target.parentNode.parentNode; //get its list
  elGrandParent.removeChild(elParent);//remove list item from list

  //prevent the link from taking you elsewere
  if (e.preventDefault) {                 //if preventDefault() works
    e.preventDefault();              //use preventDefault()
  } else {                           //otherwise
    e.returnValue = false;        //use old ie version
  }
}
//set up event listeners to call itemDone() on click
var el = document.getElementById("shoppingList");//get shopping list
if (el.addEventListener) {        //if event listeners work
  el.addEventListener(            //add listeners on click 
     "click",                    
    function(e) {                
      itemDone(e);                   //it calls itemDone()
    },
    false                             //use bubbling phase for flow
  );
} else {                               //otherwise
  el.attachEvent("onclick", function(e) { //use old ie model: onclick
    itemDone(e);                          //call itemDone(e)
  });
}
console.log('remember this is basic code ok');
console.log('keep trying to learn you can do this ok');
console.log(document);