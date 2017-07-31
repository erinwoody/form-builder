// The Form Data// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator

console.log("form data", formData);

// ( function(){
//   // Select the first element from the array
//   let first = formData[ 0 ];
//   // Log the first object
//   console.log( first );
//   // Log the string "First Name"
//   console.log( first.label );
// } )();


// -------- Your Code Goes Below this Line --------
function buildForm() {
  let fields = document.getElementById('fields');

  for (let i = 0; i < formData.length; i++) {
    if (formData[i].type === "text") {
      let input = document.createElement("input");
      input.type = formData[i].type;
      input.placeholder = formData[i].label;
      input.icon = formData[i].icon;
      fields.appendChild(input)
    }
    else if (formData[i].type === "email") {
      let input = document.createElement("input");
      input.type = formData[i].type;
      input.placeholder = formData[i].label;
      fields.appendChild(input)
    }
    else if (formData[i].type === "select") {
      let input = document.createElement("input");
      input.type = formData[i].type;
      input.placeholder = formData[i].label;
      fields.appendChild(input)
    }
    else if (formData[i].type === "textarea") {
      let input = document.createElement("input");
      input.type = formData[i].type;
      input.placeholder = formData[i].label;
      fields.appendChild(input)
    }
    else if (formData[i].type === "tel") {
      let input = document.createElement("input");
      input.type = formData[i].type;
      input.placeholder = formData[i].label;
      fields.appendChild(input)
    }
  }
}




buildForm()
