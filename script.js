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
    controlDiv.id = 'controlDiv';

    const controlUI = document.createElement("div");
    controlUI.style.backgroundColor = "#143a3b";
    controlUI.style.border = "1px solid #c7bc84";
    controlUI.style.width = '33vh';
    controlUI.style.borderRadius = "3px";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,0)";
    controlUI.style.textAlign = "center";
    controlUI.style.opacity = '0.97'
    controlUI.style.paddingBottom = '1vh'
    controlUI.title = "Map Canvas";
    controlUI.setAttribute('data-geojson', 'geojson files/360.geojson')
    controlUI.setAttribute('data-zoom', '3')
    controlUI.setAttribute('data-lat', '43.439892724608804')
    controlUI.setAttribute('data-lng', '34.51101884210948')
    controlDiv.appendChild(controlUI);

    const canvasHeader = document.createElement("div");
    canvasHeader.style.backgroundColor = "#143a3b";
    canvasHeader.style.color = "#fff";
    canvasHeader.style.fontSize = "32px";
    canvasHeader.setAttribute('data-geojson', 'geojson files/360.geojson')
    canvasHeader.setAttribute('data-zoom', '3')
    canvasHeader.setAttribute('data-lat', '43.439892724608804')
    canvasHeader.setAttribute('data-lng', '34.51101884210948')
    canvasHeader.innerHTML = "<div data-geojson='geojson files/360.geojson' data-zoom='3' data-lat=43.439892724608804 data-lng=43.439892724608804 align='center'><img data-geojson='geojson files/360.geojson' data-zoom='3' data-lat=31.424050672391203 data-lng=43.439892724608804 src='img/360 logo.png' width='190' height='140'> </div>";
    controlUI.appendChild(canvasHeader);

    const buttonCurata = document.createElement("button");
    buttonCurata.style.backgroundColor = "#235354";
    buttonCurata.style.color = "#c9dcdd";
    buttonCurata.style.fontSize = "17px";
    buttonCurata.style.paddingLeft='5px';
    buttonCurata.style.paddingRight='10px';
    buttonCurata.style.height = "5vh";
    buttonCurata.style.width = "30vh"
    buttonCurata.style.cursor = "pointer";
    buttonCurata.style.marginBottom = "0.5vh"
    buttonCurata.style.borderRadius = "1vh"
    buttonCurata.style.border = "1px solid #a38647"  
    buttonCurata.title = "Curata";
    buttonCurata.setAttribute('data-geojson', 'geojson files/curata.geojson')
    buttonCurata.setAttribute('data-zoom', '6')
    buttonCurata.setAttribute('data-lat', '51.32953115554232')
    buttonCurata.setAttribute('data-lng', '9.189274737633982')
    buttonCurata.innerHTML = "<div align='left' data-geojson='geojson files/curata.geojson' data-zoom='6' data-lat=51.32953115554232 data-lng=9.189274737633982>  Curata  <span style='float:right' data-geojson='geojson files/curata.geojson' data-zoom='6' data-lat=51.32953115554232 data-lng=9.189274737633982> <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24'><path d='M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z'/></svg> </span> </div>  ";

    controlUI.appendChild(buttonCurata);

    const buttonStaytoo = document.createElement("button");
    buttonStaytoo.style.backgroundColor = "#235354";
    buttonStaytoo.style.color = "#c9dcdd";
    buttonStaytoo.style.fontSize = "17px";
    buttonStaytoo.style.paddingLeft='5px';
    buttonStaytoo.style.paddingRight='10px';
    buttonStaytoo.style.height = "5vh";
    buttonStaytoo.style.width = "30vh"
    buttonStaytoo.style.cursor = "pointer";
    buttonStaytoo.style.marginBottom = "0.5vh"
    buttonStaytoo.style.borderRadius = "1vh"
    buttonStaytoo.style.border = "1px solid #a38647"  
    buttonStaytoo.title = "StayToo";
    buttonStaytoo.setAttribute('data-geojson', 'geojson files/staytoo.geojson')
    buttonStaytoo.setAttribute('data-zoom', '6')
    buttonStaytoo.setAttribute('data-lat', '51.24963589341015')
    buttonStaytoo.setAttribute('data-lng', '9.435256299888994')
    buttonStaytoo.innerHTML = "<div align='left' data-geojson='geojson files/staytoo.geojson' data-zoom='6' data-lat=51.24963589341015 data-lng=9.435256299888994>  Staytoo  <span style='float:right' data-geojson='geojson files/staytoo.geojson' data-zoom='6' data-lat=51.24963589341015 data-lng=9.435256299888994>  <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24'><path d='M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z'/></svg> </span> </div>";
    controlUI.appendChild(buttonStaytoo);

    const buttonSquareville = document.createElement("button");
    buttonSquareville.style.backgroundColor = "#235354";
    buttonSquareville.style.color = "#c9dcdd";
    buttonSquareville.style.fontSize = "17px";
    buttonSquareville.style.paddingLeft='5px';
    buttonSquareville.style.paddingRight='10px';
    buttonSquareville.style.height = "5vh";
    buttonSquareville.style.width = "30vh"
    buttonSquareville.style.cursor = "pointer";
    buttonSquareville.style.marginBottom = "0.5vh"
    buttonSquareville.style.borderRadius = "1vh"
    buttonSquareville.style.border = "1px solid #a38647"  
    buttonSquareville.title = "SquareVille";
    buttonSquareville.setAttribute('data-geojson', 'geojson files/squareville.geojson')
    buttonSquareville.setAttribute('data-zoom', '12')
    buttonSquareville.setAttribute('data-lat', '48.1393784')
    buttonSquareville.setAttribute('data-lng', '11.4089721')
    buttonSquareville.innerHTML = "<div align='left' data-geojson='geojson files/squareville.geojson' data-zoom='12' data-lat=48.1393784 data-lng=11.4089721>  Squareville  <span style='float:right' data-geojson='geojson files/squareville.geojson' data-zoom='12' data-lat=48.1393784 data-lng=11.4089721>  <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24'><path d='M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z'/></svg> </span> </div> ";
    controlUI.appendChild(buttonSquareville);

    const buttonTibadocare = document.createElement("button");
    buttonTibadocare.style.backgroundColor = "#235354";
    buttonTibadocare.style.color = "#c9dcdd";
    buttonTibadocare.style.fontSize = "17px";
    buttonTibadocare.style.paddingLeft='5px';
    buttonTibadocare.style.paddingRight='10px';
    buttonTibadocare.style.height = "5vh";
    buttonTibadocare.style.width = "30vh"
    buttonTibadocare.style.cursor = "pointer";
    buttonTibadocare.style.marginBottom = "0.5vh"
    buttonTibadocare.style.borderRadius = "1vh"
    buttonTibadocare.style.border = "1px solid #a38647"  
    buttonTibadocare.title = "Tibado Care";
    buttonTibadocare.setAttribute('data-geojson', 'geojson files/tibadocare.geojson')
    buttonTibadocare.setAttribute('data-zoom', '10')
    buttonTibadocare.setAttribute('data-lat', '52.58598575073316')
    buttonTibadocare.setAttribute('data-lng', '13.223651439856479')
    buttonTibadocare.innerHTML = "<div align='left' data-geojson='geojson files/tibadocare.geojson' data-zoom='10' data-lat=52.58598575073316 data-lng=13.223651439856479>  Tibado Care  <span style='float:right' data-geojson='geojson files/tibadocare.geojson' data-zoom='10' data-lat=52.58598575073316 data-lng=13.223651439856479> <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24'><path d='M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z'/></svg> </span> </div> ";
    controlUI.appendChild(buttonTibadocare);

    const buttonPentahotels = document.createElement("button");
    buttonPentahotels.style.backgroundColor = "#235354";
    buttonPentahotels.style.color = "#c9dcdd";
    buttonPentahotels.style.fontSize = "17px";
    buttonPentahotels.style.paddingLeft='5px';
    buttonPentahotels.style.paddingRight='10px';
    buttonPentahotels.style.height = "5vh";
    buttonPentahotels.style.width = "30vh"
    buttonPentahotels.style.cursor = "pointer";
    buttonPentahotels.style.marginBottom = "0.5vh"
    buttonPentahotels.style.borderRadius = "1vh"
    buttonPentahotels.style.border = "1px solid #a38647"  
    buttonPentahotels.title = "Penta Hotels";
    buttonPentahotels.setAttribute('data-geojson', 'geojson files/pentahotels.geojson')
    buttonPentahotels.setAttribute('data-zoom', '3')
    buttonPentahotels.setAttribute('data-lat', '43.439892724608804')
    buttonPentahotels.setAttribute('data-lng', '34.51101884210948')
    buttonPentahotels.innerHTML = "<div align='left' data-geojson='geojson files/pentahotels.geojson' data-zoom='3' data-lat=43.439892724608804 data-lng=34.51101884210948>  Penta Hotels  <span style='float:right' data-geojson='geojson files/pentahotels.geojson' data-zoom='3' data-lat=43.439892724608804 data-lng=34.51101884210948> <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24'><path d='M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z'/></svg> </span> </div> ";
    controlUI.appendChild(buttonPentahotels);
};
// Legend in JS
// function CenterControlLegend(controlDivLegend, map) {

//     controlDivLegend.style.marginLeft = '-4vh';
//     controlDivLegend.style.marginBottom = "5vh";

//     const controlUILegend = document.createElement("div");
//     controlUILegend.style.backgroundColor = "#769c7e";
//     controlUILegend.style.border = "1px solid #c7bc84";
//     controlUILegend.style.width = '33vh';
//     controlUILegend.style.borderRadius = "3px";
//     controlUILegend.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
//     controlUILegend.style.textAlign = "center";
//     controlUILegend.style.opacity = '0.98'
//     controlUILegend.title = "Map Canvas";
//     controlDivLegend.appendChild(controlUILegend);

//     const canvasHeaderLegend = document.createElement("div");
//     canvasHeaderLegend.style.backgroundColor = "#769c7e";
//     canvasHeaderLegend.style.color = "#fff";
//     canvasHeaderLegend.style.fontSize = "32px";
//     canvasHeaderLegend.innerHTML = "<div align='center'><img src='img/360 logo.png' width='100' height='70'> </div>";
//     controlUILegend.appendChild(canvasHeaderLegend);
//   };

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
    // var controlDivLegend = document.createElement('div');
    // var mapControlPanelLegend = new CenterControlLegend(controlDivLegend, map)
    // map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(controlDivLegend);

    // Changing geojson file and call back init funtion on click events
    controlDiv.onclick = (e)=>{
        // console.log(e);
        // console.log(e.currentTarget);
        // console.log(e.target.getAttribute('data-geojson'));
        // console.log(e.currentTarget.getAttribute('data-geojson'));
        // console.log(e.target.parentNode.getAttribute('data-geojson'));
        // console.log(e.target.parentNode.getAttribute('data-lat'))
        // console.log(e.target.parentNode.getAttribute('data-lng'))
        geoJsonFile = e.target.parentNode.getAttribute('data-geojson');
        dataLat =  parseFloat(e.target.parentNode.getAttribute('data-lat'));
        dataLng = parseFloat(e.target.parentNode.getAttribute('data-lng'));
        zoomLevel = parseFloat(e.target.parentNode.getAttribute('data-zoom'));
        initMap();
    };

    // load markers and infowindow
    var prev_infowindow = false; 
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
                    <img style="float:left; align-items:center; width:120px; margin-top:0px" src="img/icon_${category}.png">
                    <div style="margin-left:120px; margin-bottom:20px;">
                        <h2>${description}</h2>
                        <h4> ${name}</h4>
                        <p><b>Email:</b> ${email}<br/><b>Phone:</b> ${phone}</p>
                    </div>
                    `;
                    // <p><img src="https://maps.googleapis.com/maps/api/streetview?location=${position.lat()},${position.lng()}&size=350x120&key=${apiKey}"></p>
                if(prev_infowindow) {
                    prev_infowindow.close();
                }
                prev_infowindow = infoWindow
                infoWindow.setContent(content);
                infoWindow.setPosition(position);
                // infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
                infoWindow.open(map, marker);
            });
            return marker;
        }); 
    // Render custom cluster icons  
    const renderer = {
    render({ count, position }) {
        return new google.maps.Marker({
        label: { text: String(count), color: "white", fontSize: "10px" },
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

