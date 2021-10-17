function myFunction(number) {
    var dots = document.querySelector(`.redMoreFunc[data-number="${number}"] .dots`);
    var moreText = document.querySelector(`.redMoreFunc[data-number="${number}"] .more`);
    var btnText = document.querySelector(`.redMoreFunc[data-number="${number}"]  .myBtn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "daha çox oxu >>";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "daha az oxu <<";
        moreText.style.display = "inline";
    }
}