/*jshint esversion: 6 */
/* i added this to pass js checker */


// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

const submitButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");

submitButton.addEventListener("click", () => {
    contactPage.innerHTML = "<p class='thank-you'>Thank you for your message</p>";
    const thankYouMessage = contactPage.querySelector(".thank-you");
    thankYouMessage.style.fontSize = "24px";
});
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.