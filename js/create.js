const form = document.getElementById("createForm");
const artistInput = document.getElementById("artist");
const titleInput = document.getElementById("title");
const durationInput = document.getElementById("duration");
const viewsInput = document.getElementById("views");
const imageInput = document.getElementById("imageUrl");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalMessage = document.getElementById("modalMessage");
const modalClose = document.getElementById("modalClose");

function showModal(title, message, isError = true) {
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modalTitle.style.color = isError ? "var(--accent-color)" : "#2ba640";
  modal.style.display = "flex";
}

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    let errorMsg = "Please verify your input:\n";
    if (artistInput.value.trim() === "") errorMsg += "- Artist is required\n";
    if (titleInput.value.trim() === "")
      errorMsg += "- Song title is required\n";
    if (
      durationInput.validity.valueMissing ||
      durationInput.validity.rangeUnderflow
    )
      errorMsg += "- Invalid duration (must be at least 10 sec)\n";
    if (viewsInput.validity.valueMissing || viewsInput.validity.rangeUnderflow)
      errorMsg += "- Invalid view count (must be >= 0)\n";
    showModal("Validation Error!", errorMsg, true);
    return;
  }

  const newClip = {
    id: Date.now(),
    artist: artistInput.value.trim(),
    title: titleInput.value.trim(),
    duration: parseInt(durationInput.value),
    views: parseInt(viewsInput.value),
    image:
      imageInput.value.trim() ||
      "https://images.unsplash.com/photo-1614613535808-3196b010c732?w=500&q=80",
  };

  clips.push(newClip);
  localStorage.setItem("clips", JSON.stringify(clips));

  showModal(
    "Success!",
    `Clip "${newClip.title}" by ${newClip.artist} was successfully added to your library!`,
    false
  );
  form.reset();
});
