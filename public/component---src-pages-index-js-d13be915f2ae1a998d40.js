(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("HaE+"),r=a("q1tI"),i=a.n(r),o=a("TJpk"),l=a.n(o),s=a("4R65"),c=a.n(s),p=a("vDqi"),u=a.n(p),m=a("7oih"),f=a("VUD3"),d=a("SVAT"),v=[38.814566,23.06738];t.default=function(){var e=i.a.useState([]),t=e[0],a=e[1],r=i.a.useState(!1),o=r[0],s=r[1];function p(){return(p=Object(n.a)((function*(e){var a=(void 0===e?{}:e).leafletElement;if(Array.isArray(t)&&t.length>=0){var n={type:"FeatureCollection",features:t.filter((function(e){return null!==e.capacity&&(0!==e.total_confirmed_cases||!0!==o)})).map((function(e){void 0===e&&(e={});var t=e,a=t.latitude,n=t.longtitude;return{type:"Feature",properties:Object.assign({},e),geometry:{type:"Point",coordinates:[n,a]}}}))};new c.a.GeoJSON(n,{pointToLayer:function(e,t){void 0===e&&(e={});var a,n=e.properties,r=void 0===n?{}:n,i=r.capacity,o=r["last update"],l=r.description,s=r.name_gr,p=r.region_gr,u=r.total_confirmed_cases,m=r.total_samples;a=""+i,i>1e3&&(a=a.slice(0,-3)+"k+");var f='\n          <span class="icon-marker">\n            <span class="icon-marker-tooltip">\n              <h3> Camp '+s+"</h3>\n              <h3>"+p+"</h3>\n              <ul>\n              <li><strong>Χωρητικότητα:</strong> "+i+"</li>\n              <li><strong>Αριθμός Tests:</strong> "+m+"</li>\n              <li><strong>Κρούσματα COVID19:</strong> "+u+"</li>\n                <li><i><h3>Camp info:</h3> "+l+" </i></li>\n                <li><strong>Τελευταία ανανέωση:</strong> "+o+"</li>\n              </ul>\n            </span>\n            "+s+"\n          </span>\n        ";return c.a.marker(t,{icon:c.a.divIcon({className:"icon",html:f}),riseOnHover:!0})}}).addTo(a)}}))).apply(this,arguments)}i.a.useEffect((function(){function e(){return(e=Object(n.a)((function*(){var e=yield u.a.get("https://covid-19-greece.herokuapp.com/refugee-camps");a(e.data["refugee-camps"])}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var g={center:v,defaultBaseMap:"OpenStreetMap",zoom:6.75,mapEffect:function(e){return p.apply(this,arguments)},zoomSnap:.25,zoomDelta:.5},h=function(){s(!o)};return i.a.createElement(m.a,{pageName:"home"},i.a.createElement(l.a,null,i.a.createElement("title",null,"COVID19 ΣΤΙΣ ΔΟΜΕΣ ΦΙΛΟΞΕΝΙΑΣ ΠΡΟΣΦΥΓΩΝ")),o&&i.a.createElement(d.a,Object.assign({},g,{setfilter:h})),!o&&i.a.createElement(d.a,Object.assign({},g,{setfilter:h})),i.a.createElement(f.a,{type:"content",className:"home-start"},i.a.createElement("h2",null,"ΣΤΑΤΙΣΤΙΚΑ ΣΤΙΣ ΔΟΜΕΣ ΦΙΛΟΞΕΝΙΑΣ ΠΡΟΣΦΥΓΩΝ"),i.a.createElement("pre",null),i.a.createElement("p",null,"Περιλαμβάνει: ",i.a.createElement("br",null),"Eξέλιξη των Covid19 κρουσμάτων",i.a.createElement("br",null),"Αριθμός Covid19 Tests που έχουν γίνει",i.a.createElement("br",null),"Χωρητικότητα Δομής Φιλοξενίας",i.a.createElement("br",null),"Στατιστικά γραφήματα με ημερολογιακή καταγραφή των κρουσμάτων COVID19 ανα δομή"),i.a.createElement("p",{className:"note"},"Πηγές DATA: Covid19 Response Greece | Data provided by National & Kapodistrian University via Coronovirus Greece Api ")))}}}]);
//# sourceMappingURL=component---src-pages-index-js-d13be915f2ae1a998d40.js.map