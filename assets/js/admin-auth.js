(function () {
  'use strict';

  var STORAGE_KEY = 'blog-admin-session';
  var hashEl = document.getElementById('admin-config');
  if (!hashEl) return;

  var passwordHash = (hashEl.dataset.passwordHash || '').trim().toLowerCase();
  var sessionDays = parseInt(hashEl.dataset.sessionDays || '30', 10);

  function sha256(text) {
    var encoder = new TextEncoder();
    return crypto.subtle.digest('SHA-256', encoder.encode(text)).then(function (buf) {
      return Array.from(new Uint8Array(buf))
        .map(function (b) { return b.toString(16).padStart(2, '0'); })
        .join('');
    });
  }

  function isAuthed() {
    try {
      var raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return false;
      var data = JSON.parse(raw);
      return Date.now() < data.expires;
    } catch (e) {
      return false;
    }
  }

  function setAuthed() {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
      expires: Date.now() + sessionDays * 86400000
    }));
  }

  function clearAuthed() {
    sessionStorage.removeItem(STORAGE_KEY);
  }

  function showGate() {
    var gate = document.getElementById('admin-gate');
    var panel = document.getElementById('admin-panel');
    if (gate) gate.hidden = false;
    if (panel) panel.hidden = true;
  }

  function showPanel() {
    var gate = document.getElementById('admin-gate');
    var panel = document.getElementById('admin-panel');
    if (gate) gate.hidden = true;
    if (panel) panel.hidden = false;
    document.dispatchEvent(new CustomEvent('blog-admin-auth'));
  }

  function init() {
    if (!passwordHash) {
      var gate = document.getElementById('admin-gate');
      if (gate) {
        gate.hidden = false;
        var msg = document.getElementById('admin-setup-msg');
        if (msg) msg.hidden = false;
        var form = document.getElementById('admin-login-form');
        if (form) form.hidden = true;
      }
      return;
    }

    if (isAuthed()) {
      showPanel();
    } else {
      showGate();
    }

    var form = document.getElementById('admin-login-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = document.getElementById('admin-password');
        var err = document.getElementById('admin-login-error');
        if (!input) return;
        sha256(input.value).then(function (hash) {
          if (hash === passwordHash) {
            setAuthed();
            if (err) err.hidden = true;
            showPanel();
          } else {
            if (err) err.hidden = false;
            input.value = '';
            input.focus();
          }
        });
      });
    }

    var logout = document.getElementById('admin-logout');
    if (logout) {
      logout.addEventListener('click', function () {
        clearAuthed();
        showGate();
      });
    }
  }

  window.blogAdmin = {
    isAuthed: isAuthed,
    clearAuthed: clearAuthed
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
