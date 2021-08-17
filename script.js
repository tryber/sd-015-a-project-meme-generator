window.addEventListener('load', function() {
    const getTextInput = document.getElementById('text-input');
    const getImageDiv = document.getElementById('meme-image-container');
    const getMemeSpan = document.getElementById('meme-text');

    getTextInput.addEventListener('keyup', function() {
        getMemeSpan.innerHTML = getTextInput.value;
        // getTextInput.value = '';
    });



});