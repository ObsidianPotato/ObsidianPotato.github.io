// JS for fb site


// when the submit btn is clicked
$("#submitBTN").on("click", () => { 
    let email = $("#emailInput").val();
    email = formatEmail(email);

    if ( isEmailValid(email) ){ // if the email is valid...
        sendEmailData(email); 
        validResponse();
    }
    else { // if the email is not...
        invalidResponse();
    }
 });

// shows visuals for when a response is valid
function validResponse(){
    $(".validEmailPrompt").show() 
    $("#emailInput").val(""); // clear out the search bar
}


// shows visuals for when a response is not valid
function invalidResponse(){
    $(".invalidEmailPrompt").show()
}

// sends over the email
function sendEmailData(email){
    return $.ajax({
        url: "https://assets.mailerlite.com/jsonp/2258061/forms/186403637406204946/subscribe",
        method: "POST",
        dataType: "jsonp",
        data: {
            "fields[email]" : email
        }
    });
}

// when the input box is typed in hide other messages
$("#emailInput").on("input", () => {
hideEmailSubmitPrompts();
});

// formats teh email to remove spaces and make all the same case
function formatEmail(email){
    email = email.replaceAll(' ',''); // remove all spaces
    email = email.toLocaleLowerCase(); // makes it lower case
    return email;
}

// checks if there is any invalid charaters in the email
function isEmailValid(email) {
    const pattern = /^[\w]+@[\w]+\.[\w]+$/; // regex pattern to check for email
    return pattern.test(email);
}


// hides all email submit prompts
function hideEmailSubmitPrompts() {
    $(".validEmailPrompt").hide();
    $(".invalidEmailPrompt").hide();
}

// hide them all at the start
hideEmailSubmitPrompts();

// this is a joke
$("#spinnerFruit").on("click", () => {
    $("#spinnerFruit").toggleClass("joke");
});
