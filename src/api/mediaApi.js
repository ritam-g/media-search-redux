import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY=import.meta.env.VITE_PEXELS_KEY

export async function fetchPhoto(
  query = "cat",
  page = 1,
  per_page = 20
) {
  try {
    const response = await axios.get(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          query,       // ✅ correct key
          page,
          per_page,
        },
        headers: {
          Authorization: `Client-ID ${UNSPLASH_KEY}`,
        },
      }
    );

    
    return response.data.results;
  } catch (error) {
    console.error("Unsplash API error:", error);
  }
}

export async function fetchPexelsVideo(
  query = "Nature",
  page = 1,
  per_page = 20
) {
  try {
    const response = await axios.get(
      "https://api.pexels.com/videos/search",
      {
        params: {
          query,
          page,
          per_page,
        },
        headers: {
          Authorization: PEXELS_KEY,
        },
      }
    );

    return response.data.videos
      
  } catch (error) {
    console.error(
      "Pexels API error:",
      error.response?.status,
      error.response?.data
    );
  }
}
