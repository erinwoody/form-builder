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
      let input = document.createElement("select");
      input.placeholder = formData[i].label;
      fields.appendChild(input)

      let defaultOption = document.createElement("option");
      defaultOption.textContent = formData[i].label;
      input.appendChild(defaultOption);

      let options = formData[i].options;
      for (let j = 0; j < options.length; j++) {
        let newOption = document.createElement("option");
        newOption.textContent = options[j].label;
        newOption.value = options.value;
        input.appendChild(newOption);
      }
    }
    // create initial option using the label && append options to select
    //loop through options 
    // create new option
    // append new option to select


    else if (formData[i].type === "textarea") {
      let input = document.createElement("textarea");
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

