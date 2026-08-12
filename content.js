// ============================================================================
// SITE CONTENT & CONFIG
// Every placeholder (draft links, gallery photos, the Google Form URL) lives
// here. Swap values below — no need to touch index.html, styles.css, or
// script.js.
// ============================================================================

const SITE_CONTENT = {
  // --- Playbook drafts -------------------------------------------------
  // Replace `draftUrl: "#"` with the real link to each draft doc when ready.
  // Replace with the real link once the final versions are published.
  playbooks: [
    {
      audience: "For Students",
      title: "How Students Can Access Meaningful Internships",
      cover: "assets/covers/cover-students.jpg",
      draftUrl: "#", // PLACEHOLDER: link to the student draft playbook
    },
    {
      audience: "For Faculty & Colleges",
      title:
        "How can a college make legitimate internships easier without creating an administrative burden?",
      cover: "assets/covers/cover-faculty.jpg",
      draftUrl: "#", // PLACEHOLDER: link to the faculty/college draft playbook
    },
    {
      audience: "For Companies",
      title:
        "How can companies create meaningful internships and build an early talent pipeline?",
      cover: "assets/covers/cover-companies.jpg",
      draftUrl: "#", // PLACEHOLDER: link to the companies draft playbook
    },
  ],

  // --- Photo gallery -----------------------------------------------------
  // Add/remove/reorder entries freely — the gallery grid adapts automatically.
  // Drop new images into assets/gallery/ and reference them here.
  gallery: [
    { src: "assets/gallery/event-1.jpg", alt: "Co:lab workshop at TinkerSpace, Kochi" },
    { src: "assets/gallery/event-2.jpg", alt: "Co:lab workshop at TinkerSpace, Kochi" },
    { src: "assets/gallery/event-3.jpg", alt: "Co:lab workshop at TinkerSpace, Kochi" },
    { src: "assets/gallery/event-4.jpg", alt: "Co:lab workshop at TinkerSpace, Kochi" },
    { src: "assets/gallery/event-5.jpg", alt: "Co:lab workshop at TinkerSpace, Kochi" },
    { src: "assets/gallery/event-6.jpg", alt: "Co:lab workshop at TinkerSpace, Kochi" },
  ],

  // --- Email capture -------------------------------------------------------
  // Replace with the real Google Form URL that collects emails for the
  // final playbooks.
  googleFormUrl: "#", // PLACEHOLDER: Google Form URL

  // --- Contact / footer ----------------------------------------------------
  contact: {
    name: "Joan Hanna",
    phone: "+91 85479 90225",
    email: "joan@tinkerhub.org",
  },

  tinkerhubUrl: "https://tinkerhub.org",
};
