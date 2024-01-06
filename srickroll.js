// rickroll.jquery.js

$(document).ready(function() {
  function getRandomRickrollLyric() {
    const rickrollLyrics = [
      "Never gonna give you up",
      "Never gonna let you down",
      "Never gonna run around and desert you",
      // Add more lyrics as needed
    ];

    const randomIndex = Math.floor(Math.random() * rickrollLyrics.length);
    return rickrollLyrics[randomIndex];
  }

  function rickrollElements() {
    $('.rickroll').each(function() {
      if ($(this).is('input, textarea')) {
        $(this).val(getRandomRickrollLyric());
      } else {
        $(this).html(getRandomRickrollLyric());
      }
    });
  }

  rickrollElements();
});
