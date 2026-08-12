// Renders dynamic sections from SITE_CONTENT (see content.js).
// Edit content.js to change photos, playbook links, or the Google Form URL —
// this file should not need touching for routine content updates.

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  renderPlaybooks();
  wireNotifyButton();
  wireFooter();
});

function renderGallery() {
  const el = document.getElementById("gallery");
  const items = SITE_CONTENT.gallery || [];

  if (!items.length) {
    el.innerHTML = '<p class="gallery-empty">Event photos coming soon.</p>';
    return;
  }

  el.innerHTML = items
    .map(
      (item) => `
      <img src="${item.src}" alt="${escapeHtml(item.alt || "")}" loading="lazy" />
    `
    )
    .join("");
}

function renderPlaybooks() {
  const el = document.getElementById("playbook-cards");
  const items = SITE_CONTENT.playbooks || [];

  el.innerHTML = items
    .map(
      (pb) => `
      <div class="playbook-card">
        <img class="playbook-cover" src="${pb.cover}" alt="${escapeHtml(pb.audience)} playbook cover" loading="lazy" />
        <div class="playbook-body">
          <p class="playbook-audience">${escapeHtml(pb.audience)}</p>
          <p class="playbook-title">${escapeHtml(pb.title)}</p>
          <a class="playbook-link" href="${pb.draftUrl}" target="_blank" rel="noopener">View Draft →</a>
        </div>
      </div>
    `
    )
    .join("");
}

function wireNotifyButton() {
  const btn = document.getElementById("notify-btn");
  if (btn) btn.href = SITE_CONTENT.googleFormUrl;
}

function wireFooter() {
  const link = document.getElementById("footer-tinkerhub-link");
  if (link) link.href = SITE_CONTENT.tinkerhubUrl;

  const contact = document.getElementById("footer-contact");
  if (contact) {
    const c = SITE_CONTENT.contact;
    contact.innerHTML = `Contact: ${escapeHtml(c.name)} · ${escapeHtml(c.phone)} · <a href="mailto:${c.email}" style="color:inherit">${escapeHtml(c.email)}</a>`;
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
