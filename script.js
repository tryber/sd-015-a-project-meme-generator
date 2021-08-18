window.addEventListener('load', function() {
    const getTextInput = document.getElementById('text-input');
    const getImageDiv = document.getElementById('meme-image-container');
    const getMemeSpan = document.getElementById('meme-text');
    const getMemeImage = document.getElementById('meme-image');
    const getImageInput = document.getElementById('meme-insert');
    const getEarthButton = document.getElementById('earth');
    const getWaterButton = document.getElementById('water');
    const getFireButton = document.getElementById('fire');
    const getSavedImages = document.getElementsByClassName('saved-image');

    getTextInput.addEventListener('keyup', function() {
        getMemeSpan.innerHTML = getTextInput.value;
    });

    getImageInput.addEventListener('change', function(event) {
        // document.getElementById('picField').onchange = function (evt) {
        const files = event.target.files;

        // FileReader support
        if (FileReader && files && files.length) {
            let fileReader = new FileReader();
            fileReader.onload = function() {
                getMemeImage.src = fileReader.result;
            }
            fileReader.readAsDataURL(files[0]);
        }  
    });
    // Parte do fileReader retirada do stackOverflow
    // Link: https://stackoverflow.com/questions/3814231/loading-an-image-to-a-img-from-input-file

    getEarthButton.addEventListener('click', function() {
        getImageDiv.style.border = '6px groove green';
    })

    getFireButton.addEventListener('click', function() {
        getImageDiv.style.border = '3px dashed red';
    })

    getWaterButton.addEventListener('click', function() {
        getImageDiv.style.border = '5px double blue';
    })

    for(let image of getSavedImages) {
        image.addEventListener('click', function() {
            getMemeImage.src = image.src; 
        })
    }

});
