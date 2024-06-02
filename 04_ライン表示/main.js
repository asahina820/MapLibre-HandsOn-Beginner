var map = new maplibregl.Map({
  container: 'map',
  style: 'https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json', // 地図のスタイル
  center: [139.7024, 35.6598], // 中心座標
  zoom: 16, // ズームレベル
});

// ラインデータを表示する
map.on('load', () => {
  map.addSource('tokyo_bus', {
    type: 'geojson',
    data: './data/line.geojson',
  });
  map.addLayer({
    id: 'tokyo_bus',
    type: 'line',
    source: 'tokyo_bus',
    layout: {
      'line-join': 'round',
      'line-cap': 'round',
    },
    paint: {
      'line-color': '#0067c0',
      'line-width': 5,
    },
    filter: ['==', 'N07_002', '都営バス'],
  });
});
