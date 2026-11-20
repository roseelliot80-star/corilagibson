const form = document.querySelector('[data-plan], [data-contact]');
if (form) {
  fetch('/api/status', {cache:'no-store'})
    .then(response => response.ok ? response.json() : {})
    .then(status => {
      const plan = form.dataset.plan;
      const available = plan ? status.plans?.[plan] && status.checkout : status.contact;
      if (!available) return;
      form.querySelector('button').disabled = false;
      form.querySelector('.status').textContent = plan ? 'Secure payment through Stripe. Download after payment.' : 'Your message goes to the support team.';
    }).catch(() => {});
}
