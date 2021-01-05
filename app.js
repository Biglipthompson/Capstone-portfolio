const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = `
<div class="alert alert-info bg-info text-light text-center" role="alert">
<p p class="alert-banner-close bg-dark">X</p><p class="alert-text">Welcome To My Personal Website!</p></p> 
</div>
`;
alertBanner.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
      alertBanner.style.display = 'none';
    }
  });