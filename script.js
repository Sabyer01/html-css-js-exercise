document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const messageTextarea = document.getElementById('messageInput');

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        let isValid = true;

        // Validate Name
        if (nameInput.value.trim() === '') {
            showTooltip(nameInput, 'Name is required');
            isValid = false;
        } else {
            hideTooltip(nameInput);
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            showTooltip(emailInput, 'Invalid email address');
            isValid = false;
        } else {
            hideTooltip(emailInput);
        }

        // Validate Message
        if (messageTextarea.value.trim() === '') {
            showTooltip(messageTextarea, 'Message is required');
            isValid = false;
        } else {
            hideTooltip(messageTextarea);
        }

        if (isValid) {
            // If valid, show the modal
            const myModal = new bootstrap.Modal(document.getElementById('sentModal'));
            myModal.show();
        }
    });

    function showTooltip(element, message) {
        element.setAttribute('data-bs-toggle', 'tooltip');
        element.setAttribute('data-bs-placement', 'right');
        element.setAttribute('title', message);
        new bootstrap.Tooltip(element).show();
    }

    function hideTooltip(element) {
        element.removeAttribute('data-bs-toggle');
        element.removeAttribute('data-bs-placement');
        element.removeAttribute('title');
        const tooltipInstance = bootstrap.Tooltip.getInstance(element);
        if (tooltipInstance) {
            tooltipInstance.dispose();
        }
    }
    // Function to change background color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Add event listeners for the card sections
    document.querySelectorAll('.card-title').forEach(cardTitle => {
        cardTitle.addEventListener('click', function() {
            document.querySelector('.carders').style.backgroundColor = getRandomColor();
        });
    });
});