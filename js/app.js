window.onload = function() {  
    document.getElementById("hidden-container").classList.add("hidden");
    setTimeout(function() {
        sweetAlert({
            title: "Interdit au moins de 18 ans", 
            text: "Le site xxxvidsxxx est trop bien. Viens dessus stp please", 
            //type: "info",
            imageUrl: "./img/girl.png",
            showCancelButton: true,
            closeOnConfirm: false,
            confirmButtonText: "Yes, I am 18 or older!",
            confirmButtonColor: "#3cba54",
            cancelButtonText: "Close"
        });
  }, 10000);
}

// get the search box input by id       
const searchBox = document.getElementById("searchBox");

// add event listener to input
searchBox.addEventListener('keyup', (e) => {

    let userText = e.target.value;

    if(userText == '')
    {
        userText.preventDefault;
        console.log("empty search terms ...");
    }
    else{
        userText.preventDefault;
        let replaced = userText.split(' ').join('+');  
        searchGoogle(replaced);
    }
});

function searchGoogle(value){
    document.getElementById("search-button").onclick = function () {
        location.href = "https://www.google.fr/#q=" + value;
    };
}

function show() {
    let container = document.getElementById("hidden-container");
    document.getElementById("button-container").classList.add("hidden");
    container.style.display = "block";
}

  

