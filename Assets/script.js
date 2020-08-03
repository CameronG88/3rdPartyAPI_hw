var currentHour = moment().format("H");
console.log(currentHour);
var containerDiv = $("#hourContainer");
startPage();
function startPage() {
  
    for (let index = 8; index < 19; index++) {
        $("#" + index).val(localStorage.getItem(index));
        // console.log(localStorage.getitem(index));
        // var elHour = moment().hour(index).format("H");
        // console.log(elHour);
                
             
    }
}

// click function to save the note into local storage
$(".saveBtn").on("click", function (event){
    event.preventDefault();

    localStorage.setItem($(this).data('id'), $("#" + $(this).data("id")).val())
})