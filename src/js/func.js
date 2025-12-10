// Section switching + active nav
    function showSection(section) {
      const sections = ['home', 'announcements', 'documents', 'contact', 'login', 'register'];
      sections.forEach(s =>
        document.getElementById(s + '-section')?.classList.add('hide'));
      document.getElementById(section + '-section')?.classList.remove('hide');
      ['home', 'announcements', 'documents', 'contact', 'login'].forEach(s =>
        document.getElementById('btn-' + s)?.classList.remove('active'));
      if (document.getElementById('btn-' + section)) {
        document.getElementById('btn-' + section).classList.add('active');
      }
      window.scrollTo({top:0, behavior:'smooth'});
    }
    // Announcement toggle (improved for accessibility)
    function toggleAnnouncement(id) {
      document.querySelectorAll('.announcement-detail').forEach(el => {
        if (el.id !== id) {
          el.style.display = 'none';
          el.parentElement.setAttribute('aria-expanded', 'false');
          el.setAttribute('aria-hidden', 'true');
        }
      });
      var elem = document.getElementById(id);
      if (elem.style.display === 'block') {
        elem.style.display = 'none';
        elem.parentElement.setAttribute('aria-expanded', 'false');
        elem.setAttribute('aria-hidden', 'true');
      } else {
        elem.style.display = 'block';
        elem.parentElement.setAttribute('aria-expanded', 'true');
        elem.setAttribute('aria-hidden', 'false');
      }
    }
    // Simple form error display
    function showError(id, msg) {
      document.getElementById(id).textContent = msg || "";
    }
    function clearErrors(formId) {
      Array.from(document.getElementById(formId).querySelectorAll('.form-error')).forEach(el => el.textContent = "");
    }

    // Document request handler with basic validation
    function docRequest(e) {
      e.preventDefault();
      clearErrors('docRequestForm');
      let valid = true;
      const docType = document.getElementById('docType').value;
      const fullName = document.getElementById('fullName').value.trim();
      const address = document.getElementById('address').value.trim();
      const purpose = document.getElementById('purpose').value.trim();
      if (!docType) { showError('err-docType', "Please select a document type."); valid=false; }
      if (fullName.length < 2 || !/^[A-Za-z\s.\-]+$/.test(fullName)) { showError('err-fullName', "Enter a valid name."); valid=false; }
      if (address.length < 2) { showError('err-address', "Enter a valid address."); valid=false; }
      if (purpose.length < 5) { showError('err-purpose', "Purpose is too short."); valid=false; }
      if (!valid) return;
      document.getElementById('docRequestForm').reset();
      showPopup('Document request sent successfully!<br><small>Please wait for confirmation at the Barangay Hall.</small>');
    }

    // Contact message handler with basic validation
    function contactMsg(e) {
      e.preventDefault();
      clearErrors('contactForm');
      let valid = true;
      const userEmail = document.getElementById('userEmail').value.trim();
      const userMsg = document.getElementById('userMsg').value.trim();
      if (!userEmail || !/^\S+@\S+\.\S+$/.test(userEmail)) { showError('err-userEmail', "Enter a valid email address."); valid=false; }
      if (userMsg.length < 6) { showError('err-userMsg', "Message is too short."); valid=false; }
      if (!valid) return;
      document.getElementById('contactForm').reset();
      showPopup('Thank you for your message!<br><small>We will get back to you soon.</small>');
    }

    // Login mock with improved error state
    function loginSubmit(e) {
      e.preventDefault();
      clearErrors('loginForm');
      const user = document.getElementById('username').value.trim();
      const pass = document.getElementById('password').value;
      let msg = "";
      let success = false;
      if (!user) { showError('err-username', "Username required."); }
      if (!pass) { showError('err-password', "Password required."); }
      if (user && pass) { msg = 'Login successful! Welcome, ' + user; success = true; }
      else { msg = 'Login failed. Invalid credentials.'; }
      const loginMsg = document.getElementById('loginMsg');
      loginMsg.textContent = msg;
      loginMsg.classList.remove('hide');
      loginMsg.classList.toggle('error', !success);
      if (success) {
        document.getElementById('loginForm').reset();
        setTimeout(() => {
          showPopup(msg);
          loginMsg.classList.add('hide');
        }, 800);
      }
    }

    // Register handler with validation. Demo only (does not store accounts).
    function registerSubmit(e) {
      e.preventDefault();
      clearErrors('registerForm');
      let valid = true;
      const username = document.getElementById('reg-username').value.trim();
      const password = document.getElementById('reg-password').value;
      const confirm = document.getElementById('reg-confirm').value;
      const email = document.getElementById('reg-email').value.trim();
      const fullname = document.getElementById('reg-fullname').value.trim();
      const address = document.getElementById('reg-address').value.trim();

      if (username.length < 3) { showError('err-reg-username', "Username must be at least 3 characters."); valid=false; }
      if (password.length < 6) { showError('err-reg-password', "Password must be at least 6 characters."); valid=false; }
      if (confirm !== password) { showError('err-reg-confirm', "Passwords do not match."); valid=false; }
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) { showError('err-reg-email', "Enter a valid email address."); valid=false; }
      if (fullname.length < 2 || !/^[A-Za-z\s.\-]+$/.test(fullname)) { showError('err-reg-fullname', "Enter a valid name."); valid=false; }
      if (address.length < 2) { showError('err-reg-address', "Enter a valid address."); valid=false; }
      if (!valid) return;
      document.getElementById('registerForm').reset();
      showPopup('Registration successful!<br><small>Your account has been created. Please login.</small>');
    }

    // Popup helper: focus trap for accessibility
    function showPopup(msg) {
      document.getElementById('popup-content').innerHTML = msg + '<br><button onclick="closePopup()" autofocus>OK</button>';
      document.getElementById('popup').classList.remove('hide');
      document.getElementById('popup-content').querySelector('button').focus();
    }
    function closePopup() {
      document.getElementById('popup').classList.add('hide');
    }
    // Escape to close popup
    window.addEventListener('keydown', function(e){
      if(e.key==='Escape') closePopup();
    });

    // Initial active nav and view
    showSection('home');
 