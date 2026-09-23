// Theme toggle
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeBtn');
  const sunPath = 'M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4';
  const moonPath = 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z';
  function applyIcon(theme){
    document.getElementById('themeIcon').innerHTML = '<path d="'+(theme==='light'?sunPath:moonPath)+'"/>' + (theme==='light' ? '<circle cx="12" cy="12" r="4"/>' : '');
  }
  try{
    const saved = localStorage.getItem('kinnari-theme');
    if(saved){ root.setAttribute('data-theme', saved); applyIcon(saved); }
  }catch(e){}
  themeBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'light' : (root.getAttribute('data-theme') === 'dark' ? 'dark' : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light':'dark'));
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    applyIcon(next);
    try{ localStorage.setItem('kinnari-theme', next); }catch(e){}
  });

  // Mobile nav
  const burger = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  document.getElementById('year').textContent = new Date().getFullYear();