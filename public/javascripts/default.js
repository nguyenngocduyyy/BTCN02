function Warning(str) {
    console.log("running warning");
    var noti = document.getElementById("noti");
    noti.style.display = "block";
    noti.innerHTML = " ";
    var flag = true;
    console.log(document.getElementById("a").value);
    if (document.getElementById("a").value === "") {
        noti.innerHTML = "Giá trị ô thứ nhất không hợp lệ";
        flag = false;
    }
    if (document.getElementById("b").value === "" || (Number(document.getElementById("b").value) == 0 && document.getElementById("divide").checked == true)) {
        noti.innerHTML = noti.innerHTML + " Giá trị ô thứ hai không hợp lệ";
        flag = false;
    }
    if (str != "") {
        noti.innerHTML = noti.innerHTML + " " + str;
        flag = false;
    }
    if (flag) {
        noti.style.display = "none";
    }

}

function Calculate() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var ans = document.getElementById("ans");
    var calcs = document.getElementsByName("calculation");
    var calc = "none";
    Warning("");
    calcs.forEach(element => {
        if (element.checked == true) {
            calc = element.id;
        }
    });
    if (calc == "none") {
        Warning("Chưa chọn phép tính");
    } else {
        switch (calc) {
            case "plus":
                ans.value = Number(a) + Number(b);
                break;
            case "minus":
                ans.value = Number(a) - Number(b);
                break;
            case "multiply":
                ans.value = Number(a) * Number(b);
                break;
            case "divide":
                ans.value = Number(a) / Number(b);
                break;
            default:
                ans.value = "0000000";

        }
    }
}