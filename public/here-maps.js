
/**
 * Moves the map to display over Berlin
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function moveMapToOkc(map){
  map.setCenter({lat:35.458429035, lng:-97.634299097});
  map.setZoom(14);
}

var platform = new H.service.Platform({
  app_id: '0STPnjU82xGpXSJxDmQT',
  app_code: 'TItlqj0Ysrf1NmDgNj4-fA',
  useCIT: true,
  useHTTPS: true
});
var defaultLayers = platform.createDefaultLayers();

var map = new H.Map(document.getElementById('mapContainer'),
  defaultLayers.normal.map);

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

var ui = H.ui.UI.createDefault(map, defaultLayers);

moveMapToOkc(map);
