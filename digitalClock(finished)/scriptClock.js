$(document).ready(function() {
    console.log("jQuery is loaded.");

    const hrs = document.getElementById("hrs");
    const mins = document.getElementById("mins");
    const secs = document.getElementById("secs");
    const ampm = document.getElementById("ampm");

    function clock() {
        let H = new Date().getHours();
        let M = new Date().getMinutes();
        let S = new Date().getSeconds();
        let antepost = "AM";

        if (H > 12) {
            H = H - 12;
            antepost = "PM";
        }

        if (H < 10) {
            H = "0" + H;
        } else {
            H = H;
        }

        if (M < 10) {
            M = "0" + M;
        } else {
            M = M;
        }

        if (S < 10) {
            S = "0" + S;
        } else {
            S = S;
        }

        hrs.innerText = H;
        mins.innerText = M;
        secs.innerText = S;
        ampm.innerText = antepost;

        setTimeout(() => {
            clock();
        }, 1000);
    }

    clock();
});