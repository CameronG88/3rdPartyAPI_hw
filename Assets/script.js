var currentHour = moment().format("H");
console.log(currentHour);
var containerDiv = $("#hourContainer");
startPage();
function startPage() {
    var hourDiv = $("<div>").addClass("timeblock row");
    var newText = $("<a>");
    for (let index = 9; index < 18; index++) {
        var elHour = moment().hour(index).format("H");
        console.log(elHour);
                
        // if (currentHour == elHour) {
        //     newText.text(elHour);
        //     hourDiv.prepend(newText);
        //     $(hourDiv).addClass("present");
        //     containerDiv.append(hourDiv);
        // } if (currentHour > elHour) {
        //     newText.text(elHour);
        //     hourDiv.prepend(newText);
        //     $(hourDiv).addClass("past");
        //     containerDiv.append(hourDiv);
        // } else {
        //     newText.text(elHour);
        //     hourDiv.prepend(newText);
        //     $(hourDiv).addClass("future");
        //     containerDiv.append(hourDiv);
        // }
             
    }
}
