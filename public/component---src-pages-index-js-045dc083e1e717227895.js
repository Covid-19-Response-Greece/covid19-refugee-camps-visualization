(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("HaE+"),r=a("q1tI"),o=a.n(r),l=a("TJpk"),i=a.n(l),s=a("4R65"),c=a.n(s),p=a("vDqi"),u=a.n(p),m=a("7oih"),f=a("VUD3"),d=a("SVAT"),v=[38.814566,23.06738];t.default=function(){var e=o.a.useState([]),t=e[0],a=e[1],r=o.a.useState(!1),l=r[0],s=r[1];function p(){return(p=Object(n.a)((function*(e){var a=(void 0===e?{}:e).leafletElement;if(Array.isArray(t)&&t.length>=0){var n={type:"FeatureCollection",features:t.filter((function(e){return 0!==e.total_confirmed_cases||!0!==l})).map((function(e){void 0===e&&(e={});var t=e,a=t.latitude,n=t.longtitude;return{type:"Feature",properties:Object.assign({},e),geometry:{type:"Point",coordinates:[n,a]}}}))};new c.a.GeoJSON(n,{pointToLayer:function(e,t){void 0===e&&(e={});var a,n=e.properties,r=void 0===n?{}:n,o=r.capacity,l=r["last update"],i=r.description,s=r.name_gr,p=r.region_gr,u=r.total_confirmed_cases,m=r.total_samples;a=""+o,o>1e3&&(a=a.slice(0,-3)+"χ+");var f='\n          <span class="icon-marker">\n            <span class="icon-marker-tooltip">\n              <h3>Δομή '+s+"</h3>\n              <h3>"+p+"</h3>\n              <ul>\n              <li><strong>Χωρητικότητα:</strong> "+(null===o?"N/A":o)+"</li>\n              <li><strong>Αριθμός Tests:</strong> "+m+"</li>\n              <li><strong>Κρούσματα COVID19:</strong> "+u+"</li>\n                <li><i><h2>Πληροφορίες δομής:</h2> "+i+" </i></li>\n                <li><strong>Τελευταία ενημέρωση:</strong> "+l+"</li>\n              </ul>\n            </span>\n            "+s+"\n          </span>\n        ";return c.a.marker(t,{icon:c.a.divIcon({className:"icon",html:f}),riseOnHover:!0})}}).addTo(a)}}))).apply(this,arguments)}o.a.useEffect((function(){function e(){return(e=Object(n.a)((function*(){var e=yield u.a.get("https://covid-19-greece.herokuapp.com/refugee-camps");a(e.data["refugee-camps"])}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var h={center:v,defaultBaseMap:"OpenStreetMap",zoom:6.75,mapEffect:function(e){return p.apply(this,arguments)},zoomSnap:.25,zoomDelta:.5},g=function(){s(!l)};return o.a.createElement(m.a,{pageName:"home"},o.a.createElement(i.a,null,o.a.createElement("title",null,"Refugee Camps Greece - Covid19")),l&&o.a.createElement(d.a,Object.assign({},h,{setfilter:g})),!l&&o.a.createElement(d.a,Object.assign({},h,{setfilter:g})),o.a.createElement(f.a,{type:"content",className:"home-start"},o.a.createElement("h2",null,"ΣΤΑΤΙΣΤΙΚΑ ΣΤΙΣ ΔΟΜΕΣ ΦΙΛΟΞΕΝΙΑΣ ΠΡΟΣΦΥΓΩΝ"),o.a.createElement("pre",null),o.a.createElement("p",null,"Περιλαμβάνει: ",o.a.createElement("br",null),"Eξέλιξη των Covid19 κρουσμάτων",o.a.createElement("br",null),"Αριθμός Covid19 Tests που έχουν γίνει",o.a.createElement("br",null),"Χωρητικότητα Δομής Φιλοξενίας",o.a.createElement("br",null),"Στατιστικά γραφήματα με ημερολογιακή καταγραφή των κρουσμάτων COVID19 ανά δομή"),o.a.createElement("p",null,"Developed by volunteers of ",o.a.createElement("a",{href:"https://www.covid19response.gr/"},"Covid-19 Response Greece"),o.a.createElement("br",null),"Data provided by ",o.a.createElement("a",{href:"https://www.uoa.gr/"},"National & Kapodistrian University of Athens")," via ",o.a.createElement("a",{href:"https://covid-19-greece.herokuapp.com/"},"Coronavirus Greece API"))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-045dc083e1e717227895.js.map