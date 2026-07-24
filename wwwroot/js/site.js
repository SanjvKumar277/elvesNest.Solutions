document.addEventListener('DOMContentLoaded',function(){
  // Year in footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
  // Simple client-side contact form feedback
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      if(!name || !email){
        alert('Please provide your name and email.');
        return;
      }
      // In a real site: post to an API endpoint. For now show simple message.
      alert('Thanks, ' + name + '. We will contact you at ' + email + '.');
      form.reset();
    });
  }
  // Simple counter animation (for metrics)
  const counters = document.querySelectorAll('.num[data-target]');
  counters.forEach(el=>{
    const target = parseInt(el.dataset.target || '0',10);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const iv = setInterval(()=>{
      current += step;
      if(current >= target){
        el.textContent = target + suffix;
        clearInterval(iv);
      } else {
        el.textContent = current;
      }
    },20);
  });
});
