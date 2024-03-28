
document.addEventListener("DOMContentLoaded", function() {
    // Event listener for handling payment link clicks
    var paymentLinks = document.querySelectorAll('.paymentLink');
    paymentLinks.forEach(function(paymentLink) {
        paymentLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default action of link

            // Get entry fee and member fee from data attributes
            var entryFee = this.getAttribute('data-fee');
            var memberFee = this.getAttribute('data-member-fee');

            // Call function to generate QR code
            generateQRCode(entryFee, memberFee);

            // Set registration form link
            var registrationForm = this.getAttribute('data-registration-form');
            document.getElementById('registrationLink').href = registrationForm;

            // Display popup
            document.getElementById('popup').style.display = 'block';
        });
    });

    // Event listener for handling registration button click
    document.getElementById('registrationBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action of button
        var techName = document.querySelector('.tech_name').textContent;
        // Determine the registration form link based on the tech_name
        var registrationFormLink;
        switch (techName) {
            case "INNERVE (Project Exhibition )":
                registrationFormLink = "https://forms.gle/XjMsattk56uynuBE7";
                break;
            // Add cases for other tech_names and their corresponding registration form links
            case "INNOVENTURE (Startup Idea )":
                registrationFormLink="https://forms.gle/Rh2Ru2eRqUHpcXx86";
                break;
            case "BYTE BATTLE ( Coding)":
                registrationFormLink="https://forms.gle/PbtzqTPH5uabRNPX8";
                break;
            case "VISIOVERSE ( Poster Presentation )":
                registrationFormLink="https://forms.gle/m4idyAuzrAXQRqdz5";
                break;
            case "VOLTFORGE (Circuit Building )":
                registrationFormLink="https://forms.gle/KgeSfmKt2BkAKaT88";
                break;
            case "BRAINBOUT (Technical Quiz)":
                registrationFormLink="https://forms.gle/8RWxGKhnWTg6pwNF6";
                break;
            default:
                // Default case if tech_name does not match any known cases
                break;
        }
        // Redirect to the appropriate registration form link
        window.location.href = registrationFormLink;
    });
});

function generateQRCode(entryFee, memberFee) {
    // Logic to generate QR code for payment
    // For demonstration purpose, let's assume a sample QR code image
    var qrCodeImage = 'payment_qr_code.png';
    document.getElementById('qrCode').src = qrCodeImage;
}

/*case 0:
                  window.location.href = "https://forms.gle/XjMsattk56uynuBE7";
                  break;
              case 1:
                  window.location.href = "https://forms.gle/Rh2Ru2eRqUHpcXx86"; // Replace with the actual link for the second card
                  break;
              case 2:
                  window.location.href = "https://forms.gle/PbtzqTPH5uabRNPX8"; // Replace with the actual link for the third card
                  break;
              case 3:
                  window.location.href = "https://forms.gle/m4idyAuzrAXQRqdz5"; // Replace with the actual link for the fourth card
                  break;
              case 4:
                  window.location.href = "https://forms.gle/KgeSfmKt2BkAKaT88"; // Replace with the actual link for the fifth card
                  break;
              case 5:
                  window.location.href = "https://forms.gle/8RWxGKhnWTg6pwNF6"; // Replace with the actual link for the sixth card
                  break;
              default:
                  break;
                  switch (techName) {
            case "INNERVE (Project Exhibition )":
                registrationFormLink = "https://forms.gle/XjMsattk56uynuBE7";
                break;
            // Add cases for other tech_names and their corresponding registration form links
            case "INNOVENTURE (Startup Idea )":
                registrationFormLink="https://forms.gle/Rh2Ru2eRqUHpcXx86";
                break;
            case "BYTE BATTLE ( Coding)":
                registrationFormLink="https://forms.gle/PbtzqTPH5uabRNPX8";
                break;
            case "VISIOVERSE ( Poster Presentation )":
                registrationFormLink="https://forms.gle/m4idyAuzrAXQRqdz5";
                break;
            case "VOLTFORGE (Circuit Building )":
                registrationFormLink="https://forms.gle/KgeSfmKt2BkAKaT88";
                break;
            case "BRAINBOUT (Technical Quiz)":
                registrationFormLink="https://forms.gle/8RWxGKhnWTg6pwNF6";
                break;
            default:
                // Default case if tech_name does not match any known cases
              break;
        } */