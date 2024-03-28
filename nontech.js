document.addEventListener("DOMContentLoaded", function() {
    var cards = document.querySelectorAll(".card");
  
    cards.forEach(function(card, index) {
        card.addEventListener("click", function() {
            switch (index) {
                case 0:
                    window.location.href = "https://forms.gle/PTfmzV1jkE1TUDia9";
                    break;
                case 1:
                    window.location.href = "https://forms.gle/uDDQzaZiouJTysoS8"; // Replace with the actual link for the second card
                    break;
                case 2:
                    window.location.href = "https://forms.gle/gkNjxonum7dPsWwYA"; // Replace with the actual link for the third card
                    break;
                
            }
        });
    });
  });
  