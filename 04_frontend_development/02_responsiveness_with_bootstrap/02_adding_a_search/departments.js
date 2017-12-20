const DEPARTMENTS = [
  "AIN",
  "AISNE",
  "ALLIER",
  "HAUTES-ALPES",
  "ALPES-DE-HAUTE-PROVENCE",
  "ALPES-MARITIMES",
  "ARDÈCHE",
  "ARDENNES",
  "ARIÈGE",
  "AUBE",
  "AUDE",
  "AVEYRON",
  "BOUCHES-DU-RHÔNE",
  "CALVADOS",
  "CANTAL",
  "CHARENTE",
  "CHARENTE-MARITIME",
  "CHER",
  "CORRÈZE",
  "CORSE-DU-SUD",
  "HAUTE-CORSE",
  "CÔTE-D'OR",
  "CÔTES-D'ARMOR",
  "CREUSE",
  "DORDOGNE",
  "DOUBS",
  "DRÔME",
  "EURE",
  "EURE-ET-LOIR",
  "FINISTÈRE",
  "GARD",
  "HAUTE-GARONNE",
  "GERS",
  "GIRONDE",
  "HÉRAULT",
  "ILE-ET-VILAINE",
  "INDRE",
  "INDRE-ET-LOIRE",
  "ISÈRE",
  "JURA",
  "LANDES",
  "LOIR-ET-CHER",
  "LOIRE",
  "HAUTE-LOIRE",
  "LOIRE-ATLANTIQUE",
  "LOIRET",
  "LOT",
  "LOT-ET-GARONNE",
  "LOZÈRE",
  "MAINE-ET-LOIRE",
  "MANCHE",
  "MARNE",
  "HAUTE-MARNE",
  "MAYENNE",
  "MEURTHE-ET-MOSELLE",
  "MEUSE",
  "MORBIHAN",
  "MOSELLE",
  "NIÈVRE",
  "NORD",
  "OISE",
  "ORNE",
  "PAS-DE-CALAIS",
  "PUY-DE-DÔME",
  "PYRÉNÉES-ATLANTIQUES",
  "HAUTES-PYRÉNÉES",
  "PYRÉNÉES-ORIENTALES",
  "BAS-RHIN",
  "HAUT-RHIN",
  "RHÔNE",
  "HAUTE-SAÔNE",
  "SAÔNE-ET-LOIRE",
  "SARTHE",
  "SAVOIE",
  "HAUTE-SAVOIE",
  "PARIS",
  "SEINE-MARITIME",
  "SEINE-ET-MARNE",
  "YVELINES",
  "DEUX-SÈVRES",
  "SOMME",
  "TARN",
  "TARN-ET-GARONNE",
  "VAR",
  "VAUCLUSE",
  "VENDÉE",
  "VIENNE",
  "HAUTE-VIENNE",
  "VOSGES",
  "YONNE",
  "TERRITOIRE DE BELFORT",
  "ESSONNE",
  "HAUTS-DE-SEINE",
  "SEINE-SAINT-DENIS",
  "VAL-DE-MARNE",
  "VAL-D'OISE",
  "MAYOTTE",
  "GUADELOUPE",
  "GUYANE",
  "MARTINIQUE",
  "RÉUNION"
];

function displayDepartments(departments) {
  const container = document.querySelector("#department-list");
  container.innerHTML = departments.map(function(department) {
    return `<li class="list-group-item">${department}</li>`
  }).join("")
}

function displaySearchedDepartments(departments) {
  // each time something is typed into the search input
  // it will call this function and display the departments which name includes the string typed
  const mySearchInput = document.querySelector("#search-department");

  mySearchInput.addEventListener("input", function() {
    const searchString = mySearchInput.value.toUpperCase();

    const filteredDepartments = DEPARTMENTS.filter(department => department.includes(searchString));
    displayDepartments(filteredDepartments);
  });
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = DEPARTMENTS;
}
