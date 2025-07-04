const heart = document.getElementById('heart');
const envelope = document.getElementById('envelopeWrapper');
const letter = document.querySelector('.letter');

// Click heart → open flap
heart.addEventListener('click', (e) => {
  e.stopPropagation();
  envelope.classList.add('flap');
});

// Click envelope boom center
envelope.addEventListener('click', (e) => {
  e.stopPropagation();
  envelope.classList.remove('shrink-start');
  envelope.classList.add('expanded');
});

letter.addEventListener('dblclick', (e) => {
  e.stopPropagation();
  envelope.classList.add('closing');

  setTimeout(() => {
    envelope.classList.remove('flap'); 
  }, 800);

  setTimeout(() => {
    envelope.classList.remove('closing');
  }, 2000);
});


document.addEventListener('click', () => {
  envelope.classList.remove('expanded');
  envelope.classList.add('shrink-start');
});
