// =============================================
// Tactile Constellation - script.js
// =============================================

// AUDIO SYSTEM
// ===========================================
// SMART AUTO MODE:
// The site always tries to play a real MP3 first. If the MP3 doesn't exist
// yet, it automatically falls back to the browser's built-in voice (TTS).
//
// To add a real recording for a character, just upload an MP3 to the repo
// ROOT folder, named:  [book]-[characterKey].mp3
//   e.g.  prince-king.mp3   alice-madHatter.mp3   charlotte-wilbur.mp3
// No code change or toggle needed — that character will use the recording
// the moment the file exists.
window.USE_REAL_AUDIO = true;

let currentAudio = null;
let currentUtterance = null;

function playQuote(button, text, audioPath) {
  // Stop any currently playing
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  if (currentUtterance) {
    window.speechSynthesis.cancel();
    currentUtterance = null;
  }
  
  // Remove playing state from all buttons
  document.querySelectorAll('.play-btn').forEach(b => {
    b.classList.remove('playing');
    const label = b.querySelector('.play-label');
    if (label) label.textContent = label.dataset.original || 'Listen';
  });
  
  button.classList.add('playing');
  const label = button.querySelector('.play-label');
  if (label) {
    label.dataset.original = label.textContent;
    label.textContent = 'Playing...';
  }
  
  if (window.USE_REAL_AUDIO && audioPath) {
    // Try real MP3 first; if it's missing or fails, fall back to browser voice.
    currentAudio = new Audio(audioPath);
    let fellBack = false;
    const fallback = () => {
      if (fellBack) return;
      fellBack = true;
      currentAudio = null;
      playTTS(button, text, label);
    };
    currentAudio.onerror = fallback;            // file not found / cannot decode
    currentAudio.onended = () => {
      button.classList.remove('playing');
      if (label) label.textContent = label.dataset.original || 'Listen';
    };
    currentAudio.play().catch(() => fallback()); // autoplay/decoding rejection
  } else {
    // Browser TTS only
    playTTS(button, text, label);
  }
}

function playTTS(button, text, label) {
  if (!('speechSynthesis' in window)) {
    alert('Sorry, your browser does not support audio playback.');
    button.classList.remove('playing');
    return;
  }
  
  currentUtterance = new SpeechSynthesisUtterance(text);
  currentUtterance.rate = 0.85;
  currentUtterance.pitch = 1.0;
  currentUtterance.volume = 1.0;
  currentUtterance.lang = 'en-US';
  
  // Try to find a good voice
  const voices = window.speechSynthesis.getVoices();
  const goodVoice = voices.find(v => 
    v.lang.startsWith('en') && (v.name.includes('Samantha') || v.name.includes('Karen') || v.name.includes('Daniel'))
  ) || voices.find(v => v.lang.startsWith('en-GB')) || voices.find(v => v.lang.startsWith('en'));
  
  if (goodVoice) currentUtterance.voice = goodVoice;
  
  currentUtterance.onend = () => {
    button.classList.remove('playing');
    if (label) label.textContent = label.dataset.original || 'Listen';
  };
  
  window.speechSynthesis.speak(currentUtterance);
}

// SVG SHAPE GENERATORS
// ===========================================
const SHAPES = {
  star: (size = 100, color = '#1A2138') => {
    const cx = size/2, cy = size/2;
    const outer = size * 0.45, inner = outer * 0.42;
    let points = '';
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2 - Math.PI / 2;
      const r = i % 2 === 0 ? outer : inner;
      points += `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)} `;
    }
    return `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${points.trim()}" fill="${color}" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
    </svg>`;
  },
  triangle: (size = 100, color = '#1A2138') => {
    const cx = size/2, cy = size/2, r = size * 0.45;
    let points = '';
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2 - Math.PI / 2;
      points += `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)} `;
    }
    return `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${points.trim()}" fill="${color}" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
    </svg>`;
  },
  circle: (size = 100, color = '#1A2138') => {
    return `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${size/2}" cy="${size/2}" r="${size*0.42}" fill="${color}"/>
    </svg>`;
  },
  square: (size = 100, color = '#1A2138') => {
    const s = size * 0.7;
    const offset = (size - s) / 2;
    return `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect x="${offset}" y="${offset}" width="${s}" height="${s}" rx="4" fill="${color}"/>
    </svg>`;
  },
  pentagon: (size = 100, color = '#1A2138') => {
    const cx = size/2, cy = size/2, r = size * 0.45;
    let points = '';
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
      points += `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)} `;
    }
    return `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${points.trim()}" fill="${color}" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
    </svg>`;
  },
  diamond: (size = 100, color = '#1A2138') => {
    const cx = size/2, cy = size/2;
    const w = size * 0.4, h = size * 0.48;
    const points = `${cx},${cy-h} ${cx+w},${cy} ${cx},${cy+h} ${cx-w},${cy}`;
    return `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${points}" fill="${color}" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
    </svg>`;
  },
  heart: (size = 100, color = '#1A2138') => {
    const s = size * 0.32;
    const cx = size/2, cy = size/2;
    const d = `M ${cx},${cy+s*1.2} C ${cx-s*2},${cy-s*0.2} ${cx-s*0.4},${cy-s*1.8} ${cx},${cy-s*0.6} C ${cx+s*0.4},${cy-s*1.8} ${cx+s*2},${cy-s*0.2} ${cx},${cy+s*1.2} Z`;
    return `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <path d="${d}" fill="${color}"/>
    </svg>`;
  },
  arrow: (size = 100, color = '#1A2138') => {
    const cx = size/2, cy = size/2;
    const w = size * 0.5, h = size * 0.85;
    const aw = w * 0.8 / 2, sw = w * 0.25 / 2, ah = h * 0.35;
    const points = `${cx},${cy-h/2} ${cx+aw},${cy-h/2+ah} ${cx+sw},${cy-h/2+ah} ${cx+sw},${cy+h/2} ${cx-sw},${cy+h/2} ${cx-sw},${cy-h/2+ah} ${cx-aw},${cy-h/2+ah}`;
    return `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <polygon points="${points}" fill="${color}" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
    </svg>`;
  }
};

// Inject shape into element
function renderShape(element, shapeName, size = 60, color = null) {
  const c = color || getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#1A2138';
  if (SHAPES[shapeName]) {
    element.innerHTML = SHAPES[shapeName](size, c);
  }
}

// Auto-render all shape elements on page load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-shape]').forEach(el => {
    const shape = el.dataset.shape;
    const size = parseInt(el.dataset.size) || 60;
    const color = el.dataset.color || null;
    renderShape(el, shape, size, color);
  });
  
  // Trigger speech synthesis voice loading
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
  }
});

// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (link) {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});

// Get URL parameters helper
function getURLParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
