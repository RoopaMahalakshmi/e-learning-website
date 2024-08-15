document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const closeBtn = document.querySelector(".close");

    galleryItems.forEach(item => {
        item.addEventListener("click", function() {
            popup.style.display = "block";
            popupImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });

    popup.addEventListener("click", function(e) {
        if (e.target !== popupImg) {
            popup.style.display = "none";
        }
    });
});
