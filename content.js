// Monitor .o_notification_counter and play message.mp3 if increased while tab is unfocused
(function() {
  let lastCount = null;
  let windowFocused = true;
  const audio = new Audio(chrome.runtime.getURL('message.mp3'));
  let repeatInterval = null;

  // Play sound and set up repeat if needed
  function startRepeatingSound() {
    if (repeatInterval) return; // Already repeating
    playSound();
    repeatInterval = setInterval(playSound, 5000);
  }

  function stopRepeatingSound() {
    if (repeatInterval) {
      clearInterval(repeatInterval);
      repeatInterval = null;
    }
  }

  function playSound() {
    audio.currentTime = 0;
    audio.play();
  }

  // Focus/blur detection
  window.addEventListener('focus', () => {
    windowFocused = true;
    stopRepeatingSound();
  });
  window.addEventListener('blur', () => {
    windowFocused = false;
  });

  function getCounterValue() {
    const el = document.querySelector('.o_notification_counter');
    if (!el) return null;
    const val = parseInt(el.textContent, 10);
    return isNaN(val) ? null : val;
  }

  // Poll every second
  setInterval(() => {
    const current = getCounterValue();
    if (lastCount !== null && current !== null && current > lastCount && !windowFocused) {
      startRepeatingSound();
    }
    if (current !== null) lastCount = current;
  }, 1000);
})(); 