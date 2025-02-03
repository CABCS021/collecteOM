var wms_layers = [];

var lyr_Ortho20cm_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "HR.ORTHOIMAGERY.ORTHOPHOTOS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortho 20 cm',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortho20cm_0, 0]);

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_secteurs_2 = new ol.format.GeoJSON();
var features_secteurs_2 = format_secteurs_2.readFeatures(json_secteurs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_secteurs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_secteurs_2.addFeatures(features_secteurs_2);
var lyr_secteurs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_secteurs_2, 
                style: style_secteurs_2,
                popuplayertitle: 'secteurs',
                interactive: true,
    title: 'secteurs<br />\
    <img src="styles/legend/secteurs_2_0.png" /> 1<br />\
    <img src="styles/legend/secteurs_2_1.png" /> 2<br />\
    <img src="styles/legend/secteurs_2_2.png" /> 3<br />\
    <img src="styles/legend/secteurs_2_3.png" /> 4<br />\
    <img src="styles/legend/secteurs_2_4.png" /> 5<br />'
        });

lyr_Ortho20cm_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_secteurs_2.setVisible(true);
var layersList = [lyr_Ortho20cm_0,lyr_OSMStandard_1,lyr_secteurs_2];
lyr_secteurs_2.set('fieldAliases', {'NOM': 'Secteur', 'OM': 'collecte OM', 'tri': 'collecte tri', });
lyr_secteurs_2.set('fieldImages', {'NOM': 'TextEdit', 'OM': 'TextEdit', 'tri': 'TextEdit', });
lyr_secteurs_2.set('fieldLabels', {'NOM': 'inline label - always visible', 'OM': 'inline label - always visible', 'tri': 'inline label - always visible', });
lyr_secteurs_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});