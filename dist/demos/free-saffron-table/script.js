// smooth nav + sticky active state (vanilla, no deps)
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',e=>{const id=a.getAttribute('href');if(id&&id.startsWith('#')){const t=document.querySelector(id);if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}}}));
