// Map Style in JSON
const mapStyle = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#224442"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#d3e7d7"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#769c7e"
            },
            {
                "visibility": "on"
            }
        ]
    }
]

// Map Canvas Design in JS
function CenterControl(controlDiv, map) {

    controlDiv.style.marginLeft = '5vh';
    controlDiv.style.marginTop = "5vh";

    const controlUI = document.createElement("div");
    controlUI.style.backgroundColor = "#143a3b";
    controlUI.style.border = "1px solid #c7bc84";
    controlUI.style.width = '33vh';
    controlUI.style.borderRadius = "3px";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlUI.style.textAlign = "center";
    controlUI.style.opacity = '0.98'
    controlUI.title = "Map Canvas";
    controlDiv.appendChild(controlUI);

    const canvasHeader = document.createElement("div");
    canvasHeader.style.backgroundColor = "#143a3b";
    canvasHeader.style.color = "#fff";
    canvasHeader.style.fontSize = "32px";
    canvasHeader.setAttribute('data-geojson', 'geojson files/360.geojson')
    canvasHeader.setAttribute('data-zoom', '3')
    canvasHeader.setAttribute('data-lat', '43.439892724608804')
    canvasHeader.setAttribute('data-lng', '34.51101884210948')
    canvasHeader.innerHTML = "<div align='center'><img src='img/360 logo.png' width='190' height='140'> </div>";
    controlUI.appendChild(canvasHeader);

    const buttonCurata = document.createElement("div");
    buttonCurata.style.backgroundColor = "#1a4444";
    buttonCurata.style.color = "#c9dcdd";
    buttonCurata.style.fontSize = "25px";
    buttonCurata.style.paddingLeft='5px';
    buttonCurata.style.paddingRight='10px';
    buttonCurata.style.height = "5vh";
    buttonCurata.style.cursor = "pointer";
    buttonCurata.title = "Curata";
    buttonCurata.innerHTML = "<div align='left' data-geojson='geojson files/curata.geojson' data-zoom='14' data-lat=31.424050672391203 data-lng=74.18639186197906>  Curata  <span style='float:right'> > </span> </div> ";

    controlUI.appendChild(buttonCurata);

    const buttonStaytoo = document.createElement("div");
    buttonStaytoo.style.backgroundColor = "#235354";
    buttonStaytoo.style.color = "#c9dcdd";
    buttonStaytoo.style.fontSize = "25px";
    buttonStaytoo.style.paddingLeft='5px';
    buttonStaytoo.style.paddingRight='10px';
    buttonStaytoo.style.height = "5vh";
    buttonStaytoo.style.cursor = "pointer";
    buttonStaytoo.title = "StayToo";
    buttonStaytoo.innerHTML = "<div align='left' data-geojson='geojson files/staytoo.geojson' data-zoom='5' data-lat=31.424050672391203 data-lng=74.18639186197906>  Staytoo  <span style='float:right'> > </span> </div> ";
    controlUI.appendChild(buttonStaytoo);

    const buttonSquareville = document.createElement("div");
    buttonSquareville.style.backgroundColor = "#2e6263";
    buttonSquareville.style.color = "#c9dcdd";
    buttonSquareville.style.fontSize = "25px";
    buttonSquareville.style.paddingLeft='5px';
    buttonSquareville.style.paddingRight='10px';
    buttonSquareville.style.height = "5vh";
    buttonSquareville.style.cursor = "pointer";
    buttonSquareville.title = "SquareVille";
    buttonSquareville.innerHTML = "<div align='left' data-geojson='geojson files/squareville.geojson' data-zoom='1' data-lat=31.424050672391203 data-lng=74.18639186197906>  Squareville  <span style='float:right'> > </span> </div> ";
    controlUI.appendChild(buttonSquareville);

    const buttonTibadocare = document.createElement("div");
    buttonTibadocare.style.backgroundColor = "#44797a";
    buttonTibadocare.style.color = "#c9dcdd";
    buttonTibadocare.style.fontSize = "25px";
    buttonTibadocare.style.paddingLeft='5px';
    buttonTibadocare.style.paddingRight='10px';
    buttonTibadocare.style.height = "5vh";
    buttonTibadocare.style.cursor = "pointer";
    buttonTibadocare.title = "Tibado Care";
    buttonTibadocare.innerHTML = "<div align='left' data-geojson='geojson files/tibadocare.geojson' data-zoom='12' data-lat=31.424050672391203 data-lng=74.18639186197906>  Tibado Care  <span style='float:right'> > </span> </div> ";
    controlUI.appendChild(buttonTibadocare);

    const buttonPentahotels = document.createElement("div");
    buttonPentahotels.style.backgroundColor = "#4f8687";
    buttonPentahotels.style.color = "#c9dcdd";
    buttonPentahotels.style.fontSize = "25px";
    buttonPentahotels.style.paddingLeft='5px';
    buttonPentahotels.style.paddingRight='10px';
    buttonPentahotels.style.height = "5vh";
    buttonPentahotels.style.cursor = "pointer";
    buttonPentahotels.title = "Penta Hotels";
    buttonPentahotels.innerHTML = "<div align='left' data-geojson='geojson files/pentahotels.geojson' data-zoom='6' data-lat=31.424050672391203 data-lng=74.18639186197906>  Penta Hotels  <span style='float:right'> > </span> </div> ";
    controlUI.appendChild(buttonPentahotels);
};
// Legend in JS
function CenterControlLegend(controlDivLegend, map) {

    controlDivLegend.style.marginLeft = '-4vh';
    controlDivLegend.style.marginBottom = "5vh";

    const controlUILegend = document.createElement("div");
    controlUILegend.style.backgroundColor = "#769c7e";
    controlUILegend.style.border = "1px solid #c7bc84";
    controlUILegend.style.width = '33vh';
    controlUILegend.style.borderRadius = "3px";
    controlUILegend.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlUILegend.style.textAlign = "center";
    controlUILegend.style.opacity = '0.98'
    controlUILegend.title = "Map Canvas";
    controlDivLegend.appendChild(controlUILegend);

    const canvasHeaderLegend = document.createElement("div");
    canvasHeaderLegend.style.backgroundColor = "#769c7e";
    canvasHeaderLegend.style.color = "#fff";
    canvasHeaderLegend.style.fontSize = "32px";
    canvasHeaderLegend.innerHTML = "<div align='center'><img src='img/360 logo.png' width='100' height='70'> </div>";
    controlUILegend.appendChild(canvasHeaderLegend);
  };

// Global variable declaration
var geoJsonFile = 'geojson files/360.geojson';
var dataLat = 43.439892724608804 
var dataLng = 34.51101884210948
var zoomLevel = 3

function initMap() {

    // Map options.
    const myOptions = {
        zoom: zoomLevel,
        center: {lat:dataLat, lng:dataLng },
        styles: mapStyle,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        fullscreenControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM,
        },
        zoomControl: true,
        zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP,
        },
    }
    
    // Map variable.
    const map = new google.maps.Map(document.getElementById('map'), myOptions); 

    // Custom Map canvas & controls push to map
    var controlDiv = document.createElement('div');
    var mapControlPanel = new CenterControl(controlDiv, map)
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(controlDiv);

    // Custom Legend push to map
    var controlDivLegend = document.createElement('div');
    var mapControlPanelLegend = new CenterControlLegend(controlDivLegend, map)
    map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(controlDivLegend);

    // Changing geojson file and call back init funtion on click events
    controlDiv.onclick = (e)=>{
            geoJsonFile = e.target.getAttribute('data-geojson');
        console.log(e);
        console.log(e.currentTarget.dataset.lat)
        dataLat =  parseFloat(e.target.getAttribute('data-lat'));
        console.log(e.currentTarget.dataset.lng)
        dataLng = parseFloat(e.target.getAttribute('data-lng'));
        console.log(e.currentTarget.dataset.zoom)
        zoomLevel = parseFloat(e.target.getAttribute('data-zoom'));
        initMap();
    };

    // load markers and infowindow
    map.data.loadGeoJson(geoJsonFile, null, function(features){
        markers = features.map(function(feature){
            var marker = new google.maps.Marker({
                position: feature.getGeometry().get(0),
                icon: {
                    url: `img/icon_${feature.getProperty('category')}.png`,
                    scaledSize: new google.maps.Size(45, 35),
                }
            });

            // Show the information when its marker is clicked.
            const apiKey = 'AIzaSyCUFOiGO_Uhny3lJ5tOiVk6i-9nQCCRHKw';
            const infoWindow = new google.maps.InfoWindow();
            marker.addListener('click', function(event){
                const category = feature.getProperty('category');
                const name = feature.getProperty('address');
                const description = feature.getProperty('city');
                const email = feature.getProperty('email');
                const phone = feature.getProperty('phone');
                const position = feature.getGeometry().get();
                const content = `
                    <img style="float:left; width:200px; margin-top:30px" src="img/icon_${category}.png">
                    <div style="margin-left:220px; margin-bottom:20px;">
                        <h2>${name}</h2><p>${description}</p>
                        <p><b>Email:</b> ${email}<br/><b>Phone:</b> ${phone}</p>
                        <p><img src="https://maps.googleapis.com/maps/api/streetview?location=${position.lat()},${position.lng()}&size=350x120&key=${apiKey}"></p>
                    </div>
                    `;
                infoWindow.setContent(content);
                infoWindow.setPosition(position);
                infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
                infoWindow.open(map);
            });
            return marker;
        }); 
    // Render custom cluster icons  
    const renderer = {
    render({ count, position }) {
        return new google.maps.Marker({
        label: { text: String(count), color: "black", fontSize: "10px" },
        position,
        icon: "img/m1.png",
        // adjust zIndex to be above other markers
        zIndex: Number(google.maps.Marker.MAX_ZINDEX) + count,
        })
    }
    };
    // Marker Cluster Display
    const markerCluster = new markerClusterer.MarkerClusterer({ map, markers, renderer});
    });
    map.data.setMap(null);
}

