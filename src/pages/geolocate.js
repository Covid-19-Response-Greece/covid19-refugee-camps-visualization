import React from "react";
import Helmet from "react-helmet";
import L from "leaflet";
import axios from "axios";
import Layout from "components/Layout";
import Container from "components/Container";
import Map from "components/Mapen";

const LOCATION = {
  lat: 38.814566,
  lng: 24.06738,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 10;

const SecondPage = () => {
  const [data, setdata] = React.useState([]);
  const [filter, setfilter] = React.useState(false);
  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://covid-19-greece.herokuapp.com/refugee-camps"
      );

      setdata(response.data["refugee-camps"]);
    }
    fetchData();
  }, []);

  

  async function mapEffect({ leafletElement: map } = {}) {
    map.locate({ setView: true, maxZoom: 16 });

    const hasData = Array.isArray(data) && data.length >= 0;

    if (!hasData) return;

    const geoJson = {
      type: "FeatureCollection",
      features: data
        .filter((element) => {
          if (element.total_confirmed_cases === 0 && filter === true)
            return false;
          return true;
        })
        .map((region = {}) => {
          const { latitude: lat, longtitude: lng } = region;
          return {
            type: "Feature",
            properties: {
              ...region,
            },
            geometry: {
              type: "Point",
              coordinates: [lng, lat],
            },
          };
        }),
    };

    const geoJsonLayers = new L.GeoJSON(geoJson, {
      pointToLayer: (feature = {}, latlng) => {
        const { properties = {} } = feature;
        let casesString;

        const {
          capacity,
          "last update": lastupdate,
          description,
          name_gr,
          region_gr,
          total_confirmed_cases,
          total_samples,
        } = properties;

        casesString = `${capacity}`;

        if (capacity > 1000) {
          casesString = `${casesString.slice(0, -3)}χ+`;
        }

        let capacity_fixed = (capacity === null) ? 'N/A' : capacity

        const html = `
          <span class="icon-marker">
            <span class="icon-marker-tooltip">
              <h3> Camp ${name_gr}</h3>
              <h3>${region_gr}</h3>
              <ul>
              <li><strong>Χωρητικότητα:</strong> ${capacity}</li>
              <li><strong>Αριθμός Tests:</strong> ${total_samples}</li>
              <li><strong>Κρούσματα COVID19:</strong> ${total_confirmed_cases}</li>
                <li><i><h2>Camp info:</h2> ${description} </i></li>
                <li><strong>Τελευταία ενημέρωση::</strong> ${lastupdate}</li>
              </ul>
            </span>
            ${name_gr}
          </span>
        `;

        return L.marker(latlng, {
          icon: L.divIcon({
            className: "icon",
            html,
          }),
          riseOnHover: true,
        });
      },
    });

    geoJsonLayers.addTo(map);
  }
  const setMappingFilter = () => {
    setfilter(!filter);
  };
  const mapSettings = {
    center: CENTER,
    defaultBaseMap: "OpenStreetMap",
    zoom: DEFAULT_ZOOM,
    mapEffect,
    zoomSnap: 0.10,
    zoomDelta: 0.2,
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Refugee Camps Greece - Covid19</title>
      </Helmet>

      {filter && <Map {...mapSettings} setfilter={setMappingFilter} />}
      {!filter && <Map {...mapSettings} setfilter={setMappingFilter} />}

      <Container type="content" className="home-start">
        <h2>
        ΣΤΑΤΙΣΤΙΚΑ ΣΤΙΣ ΔΟΜΕΣ ΦΙΛΟΞΕΝΙΑΣ ΠΡΟΣΦΥΓΩΝ
        </h2>
        <pre></pre>
        <p>Περιλαμβάνει: <br></br>
        Eξέλιξη των Covid19 κρουσμάτων<br></br>
        Αριθμός Covid19 Tests που έχουν γίνει<br></br>
        Χωρητικότητα Δομής Φιλοξενίας<br></br>
        Στατιστικά γραφήματα με ημερολογιακή καταγραφή των κρουσμάτων COVID19 ανά δομή
        </p>
        <p>Developed by volunteers of <a href="https://www.covid19response.gr/">Covid-19 Response Greece</a>
        <br />Data provided by <a href="https://www.uoa.gr/">National &amp; Kapodistrian University of Athens</a> via <a href="https://covid-19-greece.herokuapp.com/">Coronavirus Greece API</a></p>
      </Container>
    </Layout>
  );
};

export default SecondPage;
