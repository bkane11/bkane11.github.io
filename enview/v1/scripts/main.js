var map, tif, basemap, RoWLayer, polyline, RoW, coords;
window.onload = function() {

    map = L.map('map', {
        center: [38.35946, -122.34786],
        zoom: 16
        , maxZoom: 22
    });

   //  basemap = L.tileLayer('https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + 'pk.eyJ1IjoiYmVua2FuZTExIiwiYSI6Ik1vLTFLMncifQ.NgU4eI8NXH82HGMK0i8cDw', {
   //          attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>',
			// maxNativeZoom: 18,
   //          maxZoom: 22
   //      })
   //      .addTo(map);

    tif = L.tileLayer('http://{s}.tiles.mapbox.com/v4/benkane11.0lunxw29/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYmVua2FuZTExIiwiYSI6Ik1vLTFLMncifQ.NgU4eI8NXH82HGMK0i8cDw', {
            maxNativeZoom: 18,
            maxZoom: 22
            //bounds: [[38.357440825698134,-122.35196828842162],[38.36164723671958,-122.34428644180299]],
            //minZoom: 12
        })
        .addTo(map);


    coords = [
        [38.361388, -122.351231],
        [38.360597, -122.348628],
        [38.359281, -122.348485],
        [38.358145, -122.344600]
    ];


    var pt = {
	  "type": "Feature",
	  "geometry": {
	    "type": "LineString",
	    "coordinates": [].slice.call(coords).map(function(item){
	    	return [].slice.call(item).reverse()
	    })
	  }
	};
	
	var unit = 'feet';

	var buffered = turf.buffer(pt, 100, unit);
	buffered.features.forEach(function(feature){
		feature.properties.type = 'Right of Way'
	})

	RoWLayer = L.geoJson(buffered, {
	    style: function (feature) {
	        return {fillColor: 'yellow', color: 'yellow', opacity: 1, fillOpacity: 0.5};
	    },
	    onEachFeature: function (feature, layer) {
	        layer.bindPopup(feature.properties.type);
	    }
	}).addTo(map);

	// create number of foci between 2 and 5
	var number = Math.max(Math.ceil(Math.random() * 5), 2);
    var foci = turf.random('points', number, {
		  bbox: getBBox(RoWLayer).reduce(function(a,b){ return a.concat(b); })
		})
    .features
		.map(function(feature){ return feature.geometry.coordinates });
    console.log('number of foci:', foci.length);

    polyline = L.polyline(coords, {color: 'red'}).addTo(map);


	var renderScannerFill = function(point, radius, color) {
	    var ctx = this;
	    ctx.fillStyle = ctx.strokeStyle = color;
	    ctx.save();
	    ctx.translate(point.x, point.y);
	    ctx.beginPath();
	    ctx.arc(0,0,radius,0,2*Math.PI);
	    ctx.lineWidth = 1;
	    ctx.fill();
	    ctx.restore();
	};


	var colors = ['blue', 'lightblue'];


	L.canvasOverlay()
        .drawing(drawingOnCanvas)
        .addTo(map);

    function drawingOnCanvas(canvasOverlay, params) {
        var ctx = params.canvas.getContext('2d');
        ctx.clearRect(0, 0, params.canvas.width, params.canvas.height);
        var point1 = canvasOverlay._map.latLngToContainerPoint(foci[0])
    	, point2 = canvasOverlay._map.latLngToContainerPoint(foci[1])
    	;

    	var points = foci.map(function(loc, index){
    		var point = canvasOverlay._map.latLngToContainerPoint(loc);
    		point.maxr = index % 2 ? 30 : 25
    		return point
    	});

    	ctx.clearRect(0, 0, params.canvas.width, params.canvas.height);

		ctx.save();	


		/*
		* from
		* http://buildnewgames.com/global-composit-operations/
		*/
		var i;
		ctx.globalCompositeOperation = "xor";
		for(i=0; i<points.length; i++) {
		    renderScannerFill.call(ctx, points[i], points[i].maxr, colors[i % 2]);
		}
		ctx.save();	
		
		ctx.globalCompositeOperation = "destination-out";
		for(i=0; i<points.length; i++) {
		    renderScannerFill.call(ctx, points[i], points[i].maxr-2, chroma(colors[i % 2]).alpha(0.5).css() );
		}
		ctx.save();	

		ctx.globalCompositeOperation = "destination-out";
		for(i=0; i<points.length; i++) {
		    renderScannerFill.call(ctx, points[i], points[i].maxr-15 , "rgba(0,0,0,1)");
		}
		ctx.save();	

		ctx.restore();

    };

	function getBBox(item){
		return item.getBounds().toBBoxString()
			.split(',').map(function(a,index,arr){
				return index==0||index==2 ? [+arr[index+1], +a] : null
			}).filter(function(a){return a})
	}
	// JSON.stringify( getBBox(map) );	
}
