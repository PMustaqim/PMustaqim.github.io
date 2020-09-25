window.addEventListener("load",function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function(){
        document.querySelector(".preloader").style.display = "none";
    }, 1000)
})

var submitted= false;

function validateName(){
    var name = document.getElementById('name').value;
    if(!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)){
        alert("Please enter a valid name.");
        return false;
    }

    return true;
}

function validateEmail(){
    var name = document.getElementById('email').value;
    if(!name.match(/^[A-Za-z\.\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

function resetForm() {
    document.getElementById('contact-form').reset();
    console.log('Reset');
}

function validateForm() {
    if(!validateName() || !validateEmail()) {
        return false;
    }

    else{
        submitted = true;
        var thankyou = 'Your message was sent successfully.';
        document.getElementById('success').append(thankyou);
        return true;
    }
}
