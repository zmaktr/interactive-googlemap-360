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
  buttonCurata.innerHTML = "<div align='left'>  Curata  <span style='float:right'> > </span> </div> ";
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
  buttonStaytoo.innerHTML = "<div align='left'>  Staytoo  <span style='float:right'> > </span> </div> ";
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
  buttonSquareville.innerHTML = "<div align='left'>  Squareville  <span style='float:right'> > </span> </div> ";
  controlUI.appendChild(buttonSquareville);

  const buttonStayurban = document.createElement("div");
  buttonStayurban.style.backgroundColor = "#3b7172";
  buttonStayurban.style.color = "#c9dcdd";
  buttonStayurban.style.fontSize = "25px";
  buttonStayurban.style.paddingLeft='5px';
  buttonStayurban.style.paddingRight='10px';
  buttonStayurban.style.height = "5vh";
  buttonStayurban.style.cursor = "pointer";
  buttonStayurban.title = "Stay Urban";
  buttonStayurban.innerHTML = "<div align='left'>  Stay Urban  <span style='float:right'> > </span> </div> ";
  controlUI.appendChild(buttonStayurban);

  const buttonTibadocare = document.createElement("div");
  buttonTibadocare.style.backgroundColor = "#44797a";
  buttonTibadocare.style.color = "#c9dcdd";
  buttonTibadocare.style.fontSize = "25px";
  buttonTibadocare.style.paddingLeft='5px';
  buttonTibadocare.style.paddingRight='10px';
  buttonTibadocare.style.height = "5vh";
  buttonTibadocare.style.cursor = "pointer";
  buttonTibadocare.title = "Tibado Care";
  buttonTibadocare.innerHTML = "<div align='left'>  Tibado Care  <span style='float:right'> > </span> </div> ";
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
  buttonPentahotels.innerHTML = "<div align='left'>  Penta Hotels  <span style='float:right'> > </span> </div> ";
  controlUI.appendChild(buttonPentahotels);
};

function initMap() {
  
  // Map options.
  const myOptions = {
    zoom: 3,
    center: {lat: 43.439892724608804, lng: 34.51101884210948},
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

  // Custom canvas & controls
  var controlDiv = document.createElement('div');
  var mapControlPanel = new CenterControl(controlDiv, map)
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(controlDiv);

  // Load the locations GeoJSON onto the map.
  map.data.loadGeoJson('locations.json', {idPropertyName: 'assetid'});
  // Define the custom marker from GeoJSON data
  map.data.setStyle((feature) => {
    return {
      icon: {
        url: `img/icon_${feature.getProperty('category')}.png`,
        scaledSize: new google.maps.Size(45, 35),
      },
    };
  });
  // Construct infowindow from GeoJSON data
  const apiKey = 'AIzaSyCUFOiGO_Uhny3lJ5tOiVk6i-9nQCCRHKw';
  const infoWindow = new google.maps.InfoWindow();
  // Show the information for a store when its marker is clicked.
  map.data.addListener('click', (event) => {
    const category = event.feature.getProperty('category');
    const name = event.feature.getProperty('address');
    const description = event.feature.getProperty('city');
    const email = event.feature.getProperty('email');
    const phone = event.feature.getProperty('phone');
    const position = event.feature.getGeometry().get();
    const content = `
    <img style="float:left; width:200px; margin-top:30px" src="img/icon_${category}.png">
    <div style="margin-left:220px; margin-bottom:20px;">
      <h2>${name}</h2><p>${description}</p>
      <p><b>Open:</b> ${email}<br/><b>Phone:</b> ${phone}</p>
      <p><img src="https://maps.googleapis.com/maps/api/streetview?location=${position.lat()},${position.lng()}&size=350x120&key=${apiKey}"></p>
    </div>
    `;
    infoWindow.setContent(content);
    infoWindow.setPosition(position);
    infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
    infoWindow.open(map);
  });
}
