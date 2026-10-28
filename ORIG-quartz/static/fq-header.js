document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("div");
  header.className = "fq-header";
  header.innerHTML = `
    <a href="/" class="fq-brand">
      <img src="/static/fq-avatar.webp" alt="" class="fq-avatar">
      <div>
        <div class="fq-name">FAISAL QURESHI</div>
        <div class="fq-tag">A digital garden of mostly nothing</div>
      </div>
    </a>
    <nav class="fq-nav">
      <a href="/">Home</a>
      <a href="/me">About</a>
      <a href="/me/contact">Contact</a>
      <a href="/settings">Settings</a>
    </nav>
  `;
  const body = document.querySelector("#quartz-root") || document.body;
  body.prepend(header);
});
