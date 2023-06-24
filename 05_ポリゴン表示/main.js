var map = new maplibregl.Map({
    container: 'map',
    style: 'https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json', // 地図のスタイル
    center: [139.7024, 35.6598], // 中心座標
    zoom: 16, // ズームレベル
});

// ポリゴンデータを表示する
map.on('load', function () {
    map.addSource('industrial_area', {
        type: 'geojson',
        data: './data/polygon.geojson',
    });
    map.addLayer({
        id: 'industrial_area',
        type: 'fill',
        source: 'industrial_area',
        layout: {},
        paint: {
            'fill-color': '#FD7E00',
            'fill-opacity': 0.8,
        },
    });
});

// 地物クリック時にポップアップを表示する
map.on('click', 'industrial_area', function (e) {
    var name = e.features[0].properties.L05_002;
    // ポップアップを表示する
    new maplibregl.Popup({
        closeButton: false, // 閉じるボタンの表示
    })
        .setLngLat(e.lngLat)
        .setHTML(name)
        .addTo(map);
});
