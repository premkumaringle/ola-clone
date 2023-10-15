

$(document).ready(function () {
  let cnrInput = $("#CNR_No_Input");
let cnrText = $("#CNR_No_Text");
let rideType = $("#ride_type");
let rideTypeSelect = $("#ride_type_select");
let rideName = $("#ride_name");
let rideDes = $("#ride_des");
let datePicker = $("#date_time_picker");
let dateTime = $("#date_time");

let textEdit = $(".text_edit");
let textEditor = $(".text_editor");

textEdit.each(function (index) {
  $(this).click(function () {
    $(this).addClass("hide");
    textEditor.eq(index).removeClass("hide");
    let value = $(this).text();
    textEditor.eq(index).val(value);
  });
});

textEditor.each(function (index) {
  $(this).blur(function () {
    console.log(index);
    $(this).addClass("hide");
    textEdit.eq(index).removeClass("hide");
    let value = $(this).val();
    textEdit.eq(index).html(value === "" ? textEdit.eq(index).html() : value);
  });
});

let time_picker_edit = $(".time_picker_edit");
let time_picker = $(".time_picker");

  time_picker.each(function (index) {
    $(this).click(function () {
      time_picker_edit.eq(index).removeClass("hide");
      $(this).addClass("hide");
    });
  });

time_picker_edit.each(function (index) {
  $(this).change(function () {
    let value = $(this).val();
    let date = new Date();
    date.setHours(value.split(":")[0]);
    date.setMinutes(value.split(":")[1]);
    time_picker.eq(index).html(getTime(date));
    time_picker.eq(index).removeClass("hide");
    $(this).addClass("hide");
  });
})


  dateTime.click(function () {
    datePicker.removeClass("hide");
    dateTime.addClass("hide");
  });

  datePicker.change(function () {
    let value = datePicker.val();
    let date = new Date(value);
    dateTime.html(getDateTime(date));
    $("#pick_time").html(getTime(date));
    datePicker.addClass("hide");
    dateTime.removeClass("hide");
  });

  rideType.click(function () {
    rideTypeSelect.removeClass("hide");
  });

  rideTypeSelect.change(function () {
    rideTypeSelect.addClass("hide");
    let value = rideTypeSelect.val();
    switch (value) {
      case "1":
        rideType.attr("src", "images/ic_auto@2x.png");
        rideName.text("Auto");
        rideDes.text("Maxima Xwide");
        break;
      case "2":
        rideType.attr("src", "images/ic_mini@2x.png");
        rideName.text("Mini");
        rideDes.text("Maruthi Suzuki Swift")
        break;
      case "3":
        rideType.attr("src", "images/ic_prime@2x.png");
        rideName.text("Prime Sedan");
        rideDes.text("Maruti Dzire")
        break;
      case "4":
        rideType.attr("src", "images/ic_suv@2x.png");
        rideName.text("Prime SUV");
        rideDes.text("Maruti Ertiga")
        break;
    }
    console.log(value);
  });
});

function getDateTime(now) {
    var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var dayOfWeek = daysOfWeek[now.getDay()];
    var month = months[now.getMonth()];
    var day = now.getDate();
    var year = now.getFullYear();
    

    var formattedTime = `${dayOfWeek}, ${month} ${day}, ${year}, ${getTime(now)}`;
    return formattedTime;
}

function getTime(now){
  var hours = now.getHours();
    var minutes = now.getMinutes();
    var period = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour time format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be converted to 12

    // Add leading zeros to minutes if less than 10
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutes} ${period}`;
}
