var currentHour = moment().hours();
var currentDate = moment().format("[Today is] dddd, MMMM Do [and it's currently] hA");
console.log(currentHour);
console.log(currentDate);
var containerDiv = $("#hourContainer");

startPage();
function startPage() {
    // set text for page header
    $("#currentDay").text(currentDate);
    //   
    for (let index = 8; index < 19; index++) {
        // get local storage notes
        $("#" + index).val(localStorage.getItem(index));
        // console.log(localStorage.getitem(index));
        // set different colors for the divs based on the current time
        var changeColor = $("textarea");
        let newColor = (changeColor[index-8].id)
        if (currentHour == newColor) {
            $("#" + newColor).addClass("present");
        }
        else if (currentHour < newColor) {
            $("#" + newColor).addClass("future");
        }
        else if (currentHour > newColor) {
            $("#" + newColor).addClass("past");
        }
    }

}

// click function to save the note into local storage
$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    localStorage.setItem($(this).data('id'), $("#" + $(this).data("id")).val())
})