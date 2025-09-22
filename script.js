const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  sideMenu.classList.add('open');
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  sideMenu.classList.remove('open');
  overlay.classList.remove('active');
});


  const form = document.getElementById('whatsappForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear previous errors
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let hasError = false;

    // Validation
    if (!name) {
      document.getElementById('nameError').innerText = 'Name is required.';
      hasError = true;
    }

    if (!email) {
      document.getElementById('emailError').innerText = 'Email is required.';
      hasError = true;
    }

    if (hasError) return;

    // WhatsApp Message
    const phoneNumber = ''; // Without +
    const text = `Hello! My name is *${name}* and my email is *${email}*.%0A${message ? '%0AHere is my message: ' + message : ''}`;

    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  });