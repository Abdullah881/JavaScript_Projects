function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
    }
    else {
        alert("Thank You for Filling the form " + x);

    }
  }