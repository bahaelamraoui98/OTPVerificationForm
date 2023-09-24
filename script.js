const inputs = document.querySelectorAll('.otp-card-inputs input');
const button = document.querySelector('.otp-card button');

inputs.forEach((input, index) => {
    input.onkeyup = (e) => {
        const currentElement = e.target;
        const nextElement = input.nextElementSibling;
        const prevElement = input.previousElementSibling;

        if (prevElement && e.keyCode === 8) {
            if (currentElement.value === '') {
                prevElement.value = '';
                prevElement.focus();
            }
        } else {
            const reg = /^[0-9]+/;
            if (!reg.test(currentElement.value)) {
                currentElement.value = currentElement.value.replace(/\D/g, '');
            } else if (currentElement.value) {
                if (nextElement) {
                    nextElement.focus();
                }
            }
        }

        // Check if all input fields have values
        const allInputsFilled = Array.from(inputs).every((input) => input.value !== '');

        if (allInputsFilled) {
            button.removeAttribute('disabled');
            button.style.backgroundColor = 'blueviolet'; // Change the button color here
        }
    };
});
