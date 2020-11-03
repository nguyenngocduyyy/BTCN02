function Warning(str) {
    console.log("running warning");
    var noti = document.getElementById("noti");
    noti.style.display = "block";
    noti.innerHTML = " ";
    var isCorrect = true;
    console.log(document.getElementById("a").value);
    if (document.getElementById("a").value === "") {
        noti.innerHTML = "Giá trị ô thứ nhất không hợp lệ";
        isCorrect = false;
    }
    if (document.getElementById("b").value === "" || (Number(document.getElementById("b").value) == 0 && document.getElementById("divide").checked == true)) {
        noti.innerHTML = noti.innerHTML + " Giá trị ô thứ hai không hợp lệ";
        isCorrect = false;
    }
    if (str != "") {
        noti.innerHTML = noti.innerHTML + " " + str;
        isCorrect = false;
    }
    if (isCorrect) {
        noti.style.display = "none";
    }
    return isCorrect;

};

function Validate(e) {
    var calcs = document.getElementsByName("calculation");
    var calc = "none";
    var isCorrect = Warning("");
    calcs.forEach(element => {
        if (element.checked == true) {
            calc = element.id;
        }
    });
    if (calc == "none") {
        isCorrect = Warning("Chưa chọn phép tính");
    }
    console.log(isCorrect);
    return isCorrect;

};