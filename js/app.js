
document.getElementById("hidden-container").classList.add("hidden");

window.onload = function() {
    setTimeout(function() {
        sweetAlert({
            title: "Le site xxxvidsxxx est trop bien. Viens dessus stp please", 
            text: "Interdit au moins de 18 ans", 
            type: "info",
            showCancelButton: true,
            closeOnConfirm: false,
            confirmButtonText: "Yes, I am 18 or older!",
            confirmButtonColor: "#3cba54",
            cancelButtonText: "Close",
        });
  }, 10000);
}

function show() {
    let container = document.getElementById("hidden-container");
    document.getElementById("button-container").classList.add("hidden");
    container.style.display = "block";
}