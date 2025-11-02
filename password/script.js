const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const userFeedback = document.getElementById('userFeedback');
const passFeedback = document.getElementById('passFeedback');

function validateUsername(value) {
  return /^[A-Za-z0-9_]+$/.test(value);
}

function validatePassword(value) {
  const hasLen = value.length >= 8;
  const hasUpper = /[A-Z]/.test(value);
  const hasLower = /[a-z]/.test(value);
  const hasNum = /[0-9]/.test(value);
  const hasSpecial = /[^A-Za-z0-9]/.test(value);
  return { hasLen, hasUpper, hasLower, hasNum, hasSpecial };
}

usernameInput.addEventListener('input', () => {
  if (usernameInput.value === '') {
    userFeedback.textContent = '';
    return;
  }
  userFeedback.textContent = validateUsername(usernameInput.value)
    ? 'Username OK (letters, numbers, underscores)'
    : 'Invalid: use only letters, numbers, and underscores';
});

passwordInput.addEventListener('input', () => {
  const v = passwordInput.value;
  if (v === '') {
    passFeedback.textContent = '';
    return;
  }
  const r = validatePassword(v);
  const ok = r.hasLen && r.hasUpper && r.hasLower && r.hasNum && r.hasSpecial;
  passFeedback.textContent = ok
    ? 'Password meets all requirements'
    : 'Needs: min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special character';
});

function sanitize(text) {
  return text.replace(/[<>&"']/g, (ch) => {
    switch (ch) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '"': return '&quot;';
      case '\'': return '&apos;';
      default: return ch;
    }
  });
}

document.getElementById('commentForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const form = e.target;

  const raw = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    comment: form.comment.value,
    username: form.username.value,
    password: form.password.value
  };

  const sanitized = {
    name: sanitize(raw.name),
    phone: sanitize(raw.phone),
    email: sanitize(raw.email),
    comment: sanitize(raw.comment),
    username: sanitize(raw.username),
    password: sanitize(raw.password)
  };

  window.sanitizedSubmission = sanitized;
});
