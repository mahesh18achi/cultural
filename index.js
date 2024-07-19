document.addEventListener('DOMContentLoaded', () => {
    var imgElement = document.getElementById('image');
    var img = ['./images/image2.jpg', './images/image3.jpg', './images/image1.jpg'];
    var index = 0;

    function changeImage() {
        
        index = index % img.length;
        imgElement.src = img[index];
        imgElement.classList.add('open');
        
        
        setTimeout(() => {
            imgElement.classList.remove('open');
            
            setTimeout(changeImage, 2000); 
        }, 4000); 
        index++;
    }

    changeImage(); 

    function typing() {
        var container = document.getElementById('typing');
        var string = 'Welcome To RVR & JC Cultural Club .....';
        var i = 0;
        var typingSpeed = 150; // Speed of typing (in milliseconds)

        var interval = setInterval(() => {
            container.textContent += string.charAt(i);
            i++;
            if (i >= string.length) {
                clearInterval(interval);
                container.textContent="";
                setTimeout(() => {
                    container.textContent = "";
                    typing(); 
                }, 1000); 
            }
        }, typingSpeed);
    }

  typing()
    



});
