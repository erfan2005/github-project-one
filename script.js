        const galleryItems = document.querySelectorAll(".gallery-item");
        const lightbox = document.getElementById("lightbox");



        galleryItems.forEach(function(item){

        item.addEventListener("click", function(event) {
                event.stopPropagation();


                const clonedImage = this.cloneNode(true);

                clonedImage.classList.add("enlarged");

                lightbox.innerHTML = "";

                lightbox.appendChild(clonedImage);

                lightbox.classList.add("active");
                 });  

            });

            

        lightbox.addEventListener("click", function() {

            this.classList.remove("active");

            this.innerHTML = "";
        });