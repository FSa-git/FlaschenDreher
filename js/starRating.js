/** Start Rating - JS File */

document.addEventListener("DOMContentLoaded", function() {

    // Text manipulation 
    const ratingText = document.getElementById('ratingText');

    // Star rating 
    const stars = document.querySelectorAll('.star');

    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            // Setze die Bewertung auf den aktuellen Index
            setRating(index + 1);
        });
    });

    function setRating(rating) {

        // Färbe die Sterne entsprechend der Bewertung
        stars.forEach((star, index) => {
            if (index < rating) {
                if (rating === 1 || rating === 2) {
                    star.style.fill = 'red';
                    ratingText.innerHTML = "I'm sorry";
                } else if (rating === 3 || rating === 4) {
                    star.style.fill = 'orange';
                    ratingText.innerHTML = 'Yes it could be better..';
                } else {
                    star.style.fill = 'gold';
                    ratingText.innerHTML = 'Oh, thank you so much!';
                }
            } else {
                star.style.fill = 'none';
            }
        });
    }

});