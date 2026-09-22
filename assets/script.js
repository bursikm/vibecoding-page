document.querySelectorAll('[data-accordion-group]').forEach(function (group) {
  var items = group.querySelectorAll('.accordion-item');

  items.forEach(function (item) {
    var trigger = item.querySelector('.accordion-trigger');

    trigger.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');

      items.forEach(function (other) {
        other.classList.remove('is-open');
        other.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
