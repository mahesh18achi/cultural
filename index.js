document.addEventListener('DOMContentLoaded', () => {
    var imgElement = document.getElementById('image');
    var img = ['./images/clg1.jpg', './images/clg2.jpg', './images/clg3.jpg'];
    var index = 0;

    function changeImage() {
        
        index = index % img.length;
        imgElement.src = img[index];
        imgElement.classList.add('open');
        
        
        setTimeout(() => {
            imgElement.classList.remove('open');
            
            setTimeout(changeImage, 2000); 
        }, 3000); 
        index++;
    }

    changeImage(); 

    function typing() {
        var container = document.getElementById('typing');
        var string = 'Ignite Your Spirit, Inspire the World';
        var i = 0;
        var typingSpeed = 150; // Speed of typing (in milliseconds)
        container.style.fontWeight = 'bolder'; 
        var interval = setInterval(() => {

            if (i > 20 && i <= 45) { 
                container.style.color = 'gold'; 
            }
            container.textContent += string.charAt(i);
            i++;
            
            if (i >= string.length+1) {
                clearInterval(interval);
                container.textContent="";
                setTimeout(() => {
                    container.textContent = "";
                    container.style.color = 'black'; 
                    typing(); 
                }, 3000); 
            }
        }, typingSpeed);
    }

  typing()
    



});
