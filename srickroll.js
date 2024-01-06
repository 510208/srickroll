// rickroll.jquery.js

$(document).ready(function() {
  // Output styled log when the Rickroll framework is loaded
  console.log('%cRickroll framework loaded.', 'color: green; font-weight: bold;');

  function getRandomRickrollLyric() {
    const rickrollLyrics = [
      "Never gonna give you up",
      "Never gonna let you down",
      "Never gonna run around and desert you",
      "Never gonna make you cry",
      "Never gonna say goodbye",
      "Never gonna tell a lie and hurt you"
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
