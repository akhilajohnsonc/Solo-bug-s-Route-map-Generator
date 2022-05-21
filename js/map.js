mapboxgl.accessToken =
  "pk.eyJ1IjoiYWtoaWxham9obnNvbmMiLCJhIjoiY2wzZnQyNjNqMGR0YzNqbjA0dmkxeTlmciJ9.rbVoKgDNm_cSE7HGlEl0-g";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-122.662323, 45.523751], // starting position
  zoom: 12,
});

const directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
  unit: "metric",
  profile: "mapbox/driving",
  alternatives: false,
  geometries: "geojson",
  controls: { instructions: true },
  flyTo: false,
});
map.addControl(directions, "top-right");
map.scrollZoom.enable();
