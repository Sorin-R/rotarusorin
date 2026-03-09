document.addEventListener('DOMContentLoaded', function () {
  // Function to load reviews and update UI
  function loadReviews() {
    fetch('load_reviews.php')
      .then(response => response.json())
      .then(data => {
        const reviewsContainer = document.getElementById('reviews');
        reviewsContainer.innerHTML = '';

        // Display average rating
        document
          .querySelectorAll('.averageRatingPlaceholder')
          .forEach(
            elem =>
              (elem.innerHTML = `Average Rating is: ${data.averageRating} <img src="img/star23.svg" alt="★">`)
          );

        // Display reviews
        data.reviews.forEach(review => {
          let stars = '';
          for (let i = 1; i <= 5; i++) {
            stars +=
              i <= review.rating
                ? '<img src="img/star23.svg" alt="★">'
                : '<img src="img/nostar23.svg" alt="☆">';
          }
          reviewsContainer.innerHTML += `<div class="review"><p class="w"><strong>${
            review.name
          }</strong> (${new Date(
            review.review_date
          ).toLocaleDateString()})<br>${stars}</p><p>${
            review.review
          }</p></div>`;
        });
      })
      .catch(error => console.error('Error:', error));
  }

  // Function to update stars based on selection
  function updateStars(selectedValue) {
    const starInputs = document.querySelectorAll(
      '.star-rating input[type="radio"]'
    );
    starInputs.forEach(input => {
      const label = input.nextElementSibling;
      label.innerHTML =
        input.value <= selectedValue
          ? '<img src="img/star.svg" alt="★">'
          : '<img src="img/nostar.svg" alt="☆">';
    });
  }

  // Load reviews
  loadReviews();

  // Handle star rating changes
  const stars = document.querySelectorAll('.star-rating input[type="radio"]');
  stars.forEach(star => {
    star.addEventListener('change', function () {
      document.getElementById('ratingValue').value = this.value;
      updateStars(this.value);
    });
  });
});

/*document.addEventListener('DOMContentLoaded', function () {
  loadReviews();

  const stars = document.querySelectorAll('.star-rating input[type="radio"]');
  stars.forEach(star => {
    star.addEventListener('change', function () {
      document.getElementById('ratingValue').value = this.value;
    });
  });
});

function loadReviews() {
  fetch('load_reviews.php')
    .then(response => response.json())
    .then(data => {
      const reviewsContainer = document.getElementById('reviews');
      reviewsContainer.innerHTML = '';

      // Display average rating
      document.getElementById(
        'averageRatingPlaceholder'
      ).innerHTML = `Average Rating: ${data.averageRating} <img src="img/star23.svg" alt="★">`;
      document.getElementById(
        'averageRatingPlaceholde'
      ).innerHTML = `Average Rating: ${data.averageRating} <img src="img/star23.svg" alt="★">`;

      // Display reviews
      data.reviews.forEach(review => {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
          stars +=
            i <= review.rating
              ? '<img src="img/star23.svg" alt="★">'
              : '<img src="img/nostar23.svg" alt="☆">';
        }
        reviewsContainer.innerHTML += `<div class="review"><p><strong>${
          review.name
        }</strong> (${new Date(
          review.review_date
        ).toLocaleDateString()})<br>${stars}</p><p>${review.review}</p></div>`;
      });
    })
    .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', function () {
  const starInputs = document.querySelectorAll(
    '.star-rating input[type="radio"]'
  );
  starInputs.forEach(input => {
    input.addEventListener('change', function () {
      updateStars(this.value);
    });
  });
});

function updateStars(selectedValue) {
  const starInputs = document.querySelectorAll(
    '.star-rating input[type="radio"]'
  );
  starInputs.forEach(input => {
    const label = input.nextElementSibling;
    label.innerHTML =
      input.value <= selectedValue
        ? '<img src="img/star.svg" alt="★">'
        : '<img src="img/nostar.svg" alt="☆">';
  });
}*/

/*document.addEventListener('DOMContentLoaded', function () {
  loadReviews();

  const stars = document.querySelectorAll('.star-rating input[type="radio"]');
  stars.forEach(star => {
    star.addEventListener('change', function () {
      document.getElementById('ratingValue').value = this.value;
    });
  });
});

function loadReviews() {
  fetch('load_reviews.php')
    .then(response => response.json())
    .then(data => {
      const reviewsContainer = document.getElementById('reviews');
      reviewsContainer.innerHTML = '';

      // Display average rating
      document
        .querySelectorAll('.averageRatingPlaceholder')
        .forEach(
          elem =>
            (elem.innerHTML = `Average Rating: ${data.averageRating} <img src="img/star23.svg" alt="★">`)
        );

      // Display reviews
      data.reviews.forEach(review => {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
          stars +=
            i <= review.rating
              ? '<img src="img/star23.svg" alt="★">'
              : '<img src="img/nostar23.svg" alt="☆">';
        }
        reviewsContainer.innerHTML += `<div class="review"><p><strong>${
          review.name
        }</strong> (${new Date(
          review.review_date
        ).toLocaleDateString()})<br>${stars}</p><p>${review.review}</p></div>`;
      });
    })
    .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', function () {
  const starInputs = document.querySelectorAll(
    '.star-rating input[type="radio"]'
  );
  starInputs.forEach(input => {
    input.addEventListener('change', function () {
      updateStars(this.value);
    });
  });
});

function updateStars(selectedValue) {
  const starInputs = document.querySelectorAll(
    '.star-rating input[type="radio"]'
  );
  starInputs.forEach(input => {
    const label = input.nextElementSibling;
    label.innerHTML =
      input.value <= selectedValue
        ? '<img src="img/star.svg" alt="★">'
        : '<img src="img/nostar.svg" alt="☆">';
  });
}*/
