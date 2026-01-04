const PASSWORD = "31052025";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const error = document.getElementById("error");

  if (input === PASSWORD) {
    document.getElementById("lockScreen").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");
    updateCountdown();
  } else {
    error.textContent = "That key doesn’t belong here.";
  }
}

function handleEnter(e) {
  if (e.key === "Enter") checkPassword();
}

const startDate = new Date("2025-05-31T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = now - startDate;

  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.textContent = d;
  hours.textContent = String(h).padStart(2, "0");
  minutes.textContent = String(m).padStart(2, "0");
  seconds.textContent = String(s).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
