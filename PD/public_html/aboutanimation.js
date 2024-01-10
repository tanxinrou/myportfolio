anime({
  targets: '.skill-level',
  width: function(el, i) {
    const skillLevel = el.getAttribute('data-level');
    return skillLevel < 80 ? skillLevel + '%' : '80%'; // Animation stops at 80%
  },
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: false
});
