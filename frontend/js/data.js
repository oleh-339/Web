const API_URL = "http://localhost:3000/api/clips";
let clips = [];

async function fetchClips() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    clips = await response.json();
    applyFiltersAndRender();
  } catch (error) {
    console.error("Data Loading Error:", error);
  }
}
