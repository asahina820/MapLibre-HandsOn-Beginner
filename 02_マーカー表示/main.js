var map = new maplibregl.Map({
    container: 'map',
    style: 'https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json', // 地図のスタイル
    center: [139.7024, 35.6598], // 中心座標
    zoom: 16, // ズームレベル
});

var popup = new maplibregl.Popup({
    offset: 25, // ポップアップの位置
    closeButton: false, // 閉じるボタンの表示
}).setText('渋谷ヒカリエ');

var marker = new maplibregl.Marker().setLngLat([139.70356, 35.65901]).setPopup(popup).addTo(map);
