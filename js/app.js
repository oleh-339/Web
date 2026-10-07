let currentClips = [...clips];
const cardsGrid = document.getElementById("cardsGrid");
const searchInput = document.getElementById("searchInput");
const btnSearch = document.getElementById("btnSearch");
const btnClear = document.getElementById("btnClear");
const sortToggle = document.getElementById("sortToggle");
const btnCount = document.getElementById("btnCount");
const totalBox = document.getElementById("totalBox");
const totalValue = document.getElementById("totalValue");

function renderClips(clipsToRender) {
  cardsGrid.innerHTML = "";
  if (clipsToRender.length === 0) {
    cardsGrid.innerHTML = `
      <div class="empty-state">
        <h2>No clips found</h2>
        <p>Try adjusting your search query or add a new clip.</p>
      </div>
    `;
    return;
  }

  const html = clipsToRender
    .map(
      (clip) => `
    <div class="card">
      <div class="card__img-placeholder" style="background-image: url('${clip.image}');"></div>
      <div class="card__body">
        <h3 class="card__title">${clip.title}</h3>
        <p class="card__desc"><strong>${clip.artist}</strong></p>
        <div class="card__meta">
          <span>${clip.duration} sec</span> • <span>${Number(clip.views).toLocaleString("en-US")} views</span>
        </div>
      </div>
    </div>
  `
    )
    .join("");
  cardsGrid.insertAdjacentHTML("beforeend", html);
}

function applyFiltersAndRender() {
  currentClips = [...clips];
  const query = searchInput.value.toLowerCase().replace(/\s+/g, "");

  if (query) {
    currentClips = currentClips.filter(
      (c) =>
        c.artist.toLowerCase().replace(/\s+/g, "").includes(query) ||
        c.title.toLowerCase().replace(/\s+/g, "").includes(query)
    );
  }

  if (sortToggle.checked) {
    currentClips.sort((a, b) => b.views - a.views);
  }
  
  renderClips(currentClips);
}

btnSearch.addEventListener("click", applyFiltersAndRender);
sortToggle.addEventListener("change", applyFiltersAndRender);
btnClear.addEventListener("click", () => {
  searchInput.value = "";
  sortToggle.checked = false;
  totalBox.style.display = "none";
  applyFiltersAndRender();
});
searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") applyFiltersAndRender();
});

btnCount.addEventListener("click", () => {
  const total = currentClips.reduce((acc, curr) => acc + Number(curr.views), 0);
  totalValue.textContent = total.toLocaleString("en-US");
  totalBox.style.display = "block";
});

renderClips(currentClips);
