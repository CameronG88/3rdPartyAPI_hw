var currentHour = moment().format("H");
var currentDate = moment().format("[Today is] dddd, MMMM Do [and it's currently] hA");
console.log(currentHour);
console.log(currentDate);
var containerDiv = $("#hourContainer");

startPage();
function startPage() {
  $("#currentDay").text(currentDate);
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