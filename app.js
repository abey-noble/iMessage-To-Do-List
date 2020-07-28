
document.body.addEventListener("keyup", enterPressed);
//another way of writing this line above is this
//document.body.onkeyup = function(event) { stuff goes here }
//document.body.li.addEventListener("click", eraseListItem);


// 13 keycode for enter key

// remove a list item
function eraseListItem (event) {
    event.target.remove();
}



function newItem() {
    console.log("Inside newItem");
    // get text from input store into var item and then display item in console
    var item = document.getElementById("input").value;
    console.log(item);
    // get ul element and store into var list
    var ul = document.getElementById("list");
    // js function to create a new element
    var li = document.createElement("li")
    // create variable text to create a text with "- item" - gotta create that text element first
    var text = document.createTextNode("- " + item)
    // added text to the list item - we use appendChild because a child of a tag is insid a tag
    li.appendChild(text);
    // added the list item to the list
    ul.appendChild(li);

    //this bottom line changes the variable item to be blank not the value/text of the input field
    //lesson for var whatever is on right hand side get assigned to left hand side so essentially that changes
    //but not the actual text of the input
    //item = " "
    //to change the text of the input field we grab the text of the input 
    document.getElementById("input").value = " ";

    //we only want to erase after something has been entered that's why its placed here this is another way combining both event listeners and functions
    // could have also written it like this: li.onclick = function (event) { actually place the enter pressed code right here}
    //but if you wanted to still create the actual function elsewhere another way of doing below is li.onclick = function() {eraseListItem()};
    // but we want the shortest way which is to create all the code for the function and then call it using the event listener
    // instead of that function being placed there altogether you are calling that function
    li.onclick = eraseListItem;
}

function enterPressed(event){
    //console.log(event.keyCode);
    if (event.keyCode == 13) {
        console.log("enter pressed");
        newItem();
    }
}





