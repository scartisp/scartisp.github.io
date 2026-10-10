document.getElementById('contact-form').onsubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append('access_key', '3af6f6ef-11f6-4179-93af-fdc460739a0d');
    const result = document.getElementById('result');
    result.innerHTML = 'Sending...';

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            result.innerHTML = "message sent";
            form.reset();
        } else {
            result.innerHTML = "Error" + data.message;
        }

    } catch (error) {
        result.innerHTML = "sorry, couldn't send";
    } finally {
        result.innerHTML = '';
    }
};



// const submitBtn = form.querySelector('button[type="submit"]');

// form.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const formData = new FormData(form);
//     formData.append("access_key", "3af6f6ef-11f6-4179-93af-fdc460739a0d");

//     const originalText = submitBtn.textContent;

//     submitBtn.textContent = "Sending...";
//     submitBtn.disabled = true;

//     try {
//         const response = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             body: formData
//         });

//         const data = await response.json();

//         if (response.ok) {
//             alert("Success! Your message has been sent.");
//             form.reset();
//         } else {
//             alert("Error: " + data.message);
//         }

//     } catch (error) {
//         alert("Something went wrong. Please try again.");
//     } finally {
//         submitBtn.textContent = originalText;
//         submitBtn.disabled = false;
//     }
// });