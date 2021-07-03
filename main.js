window.onload = function () {



    document.getElementById("Btn").addEventListener("click", zeller);

    function zeller() {
        var f = Math.floor,
            y = parseInt(document.getElementById("year").value),
            m = parseInt(document.getElementById("month").value),
            q = parseInt(document.getElementById("day").value),
            j = f(y / 100),
            k = y % 100;
        
        if (m == 1) {
            m = 13
        }

        if (m == 2) {
            m = 14
        }

        if (m > 12 && m < 15) {
            y = y - 1;
            j = f(y / 100);
            k = y % 100;
        }

        var h = (q + f((26 * (m + 1) / 10)) + k + f((k / 4)) + f((j / 4)) + 5 * j)
        var l = h % 7

        var val = document.getElementById("output") // Insert text


        switch (l) {
            case 0:
                val.innerHTML = "Saturday";
                break;

            case 1:
                val.innerHTML = "Sunday";
                break;

            case 2:
                val.innerHTML = "Monday";
                break;

            case 3:
                val.innerHTML = "Tuesday";
                break;

            case 4:
                val.innerHTML = "Wednesday";
                break;

            case 5:
                val.innerHTML = "Thursday";
                break;

            case 6:
                val.innerHTML = "Friday";

        }
    }

}