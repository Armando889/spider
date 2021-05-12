https://job.webhelp.pt/en/offre-emploi?job=0&city=0&sector=0&language=50&page=1
/*Nefore Extract */
setTimeout(function(){
  var out = {};
  out.waitFor = "div.offre-actualites-item"
  return out;
}, 3000)

/* Extract */
(function() {
  var out = {};
  var html_jobs = document.querySelectorAll("div.offre-actualites-item");
  var jobs = [];

  //var locations = ["Berlin","Hamburg","Munich","Koeln","Frankfurt am Main","Essen","Stuttgart","Dortmund","Duesseldorf","Bremen","Hannover","Leipzig","Duisburg","Nuernberg","Dresden", "Wandsbek","Bochum","Bochum-Hordel","Wuppertal","Bielefeld","Bonn","Mannheim","Mariental","Karlsruhe","Hamburg-Nord","Wiesbaden","Muenster","Gelsenkirchen","Aachen", "Moenchengladbach","Augsburg","Eimsbuettel","Altona","Chemnitz","Braunschweig","Krefeld","Halle (Saale)","Hamburg-Mitte","Kiel","Magdeburg","Neue Neustadt","Oberhausen", "Freiburg","Luebeck","Erfurt","Harburg","Hagen","Rostock","Kassel","Hamm","Mainz","Saarbruecken","Herne","Muelheim","Neukoelln","Osnabrueck","Solingen","Ludwigshafen am Rhein","Leverkusen", "Oldenburg","Neuss","Prenzlauer Berg Bezirk","Bezirk Kreuzberg","Potsdam","Heidelberg","Paderborn","Darmstadt","Wuerzburg","Regensburg","Wolfsburg","Recklinghausen","Goettingen", "Heilbronn","Ingolstadt","Ulm","Bottrop","Charlottenburg Bezirk","Bergedorf","Pforzheim","Offenbach","Friedrichshain Bezirk","Bremerhaven","Remscheid","Berlin Schoeneberg", "Schoneberg Bezirk","Nippes","Reutlingen","Furth","Moers","Koblenz","Siegen","Bergisch Gladbach","Jena","Gera","Marzahn","Hildesheim","Erlangen","Witten","Salzgitter","Trier", "Zwickau","Kaiserslautern","Iserlohn","Schwerin","Guetersloh","Wilmersdorf Bezirk","Dueren","Esslingen","Ratingen","Marl","Luenen","Hanau am Main","Velbert","Ludwigsburg","Flensburg", "Gesundbrunnen","Cottbus","Wilhelmshaven","Tuebingen","Minden","Villingen-Schwenningen","Konstanz","Mitte","Worms","Lichterfelde","Dorsten","Luedenscheid","Marburg an der Lahn","Neumuenster", "Wedding Bezirk","Castrop-Rauxel","Bogenhausen","Dessau","Gladbeck","Arnsberg","Rheine","Viersen","Delmenhorst","Reinickendorf","Bayreuth","Hellersdorf","Troisdorf","Giessen", "Bocholt","Detmold","Steglitz Bezirk","Norderstedt","Lueneburg","Celle","Moabit","Dinslaken","Bamberg","Aschaffenburg","Neubrandenburg","Lippstadt","Aalen","Neuwied","Unna", "Plauen","Herten","Herford","Grevenbroich","Weimar","Kerpen","Fulda","Dormagen","Bergheim","Garbsen","Wesel","Kempten","Schwabisch Gmund","Sindelfingen","Landshut", "Rosenheim","Kopenick Bezirk","Brandenburg an der Havel","Ruesselsheim","Berlin Koepenick","Langenfeld","Offenburg","Stralsund","Stolberg","Hameln","Zehlendorf Bezirk","Menden", "Friedrichshafen","Goeppingen","Goerlitz","Pankow","Hattingen","Tempelhof Bezirk","Hilden","Sankt Augustin","Eschweiler","Ahlen","Bad Salzuflen","Euskirchen","Meerbusch","Wolfenbuettel"/*, "Huerth","Baden-Baden","Schweinfurt","Pulheim","Neu-Hohenschoenhausen","Gummersbach","Waiblingen","Nordhorn","Greifswald","Cuxhaven","Wetzlar","Bergkamen","Bad Homburg vor der Hoehe", "Willich","Frankfurt","Emden","Neu-Ulm","Lingen","Winterhude","Erftstadt","Neubrueck","Ibbenbueren","Passau","Langenhagen","Schwerte","Speyer","Heidenheim an der Brenz","Berlin Treptow", "Peine","Mariendorf","Neunkirchen","Bad Oeynhausen","Lichtenrade","Hof","Friedrichsfelde","Kleve","Ravensburg","Frechen","Elmshorn","Bornheim","Soest","Rastatt","Erkrath","Weissensee", "Stuttgart-Ost","Duelmen","Frankenthal","Herzogenrath","Loerrach","Albstadt","Gotha","Melle","Alsdorf","Boeblingen","Gronau","Rheda-Wiedenbrueck","Neustadt am Ruebenberge","Kamen", "Leonberg","Singen","Stade","Hennef","Buende","Meiderich","Wismar","Amberg","Erkelenz","Homburg","Straubing","Halle Neustadt","Bruehl","Fellbach","Lehrte","Nordhausen","Lahr", "Eisenach","Hoyerswerda","Freiberg","Pirmasens","Goslar","Filderstadt","Suhl","Weinheim","Rodgau","Bad Kreuznach","Monheim am Rhein","Gifhorn","Bruchsal","Rottenburg","Alt-Hohenschoenhausen", "Freising","Staaken","Weiden","Kaufbeuren","Oberursel","Nettetal","Kaarst","Wunstorf","Eberswalde","Bautzen","Lemgo","Coburg","Bietigheim-Bissingen","Landau in der Pfalz","Heinsberg", "Seevetal","Lankwitz","Koenigswinter","Memmingen","Voelklingen","Borken","Rudow","Oranienburg","Pinneberg","Dreieich","Pirna","Aurich","Barmbek-Nord","Nurtingen","Kirchheim unter Teck","Laatzen", "Hueckelhoven","Dachau","Halberstadt","Schorndorf","Neumarkt in der Oberpfalz","Mettmann","Loehne","Kamp-Lintfort","Britz","Bensheim","Siegburg","Gallus","Freital","Ettlingen","Voerde", "Warendorf","Sankt Ingbert","Altenburg","Schwabach","Westend","Buckow","Saarlouis","Maintal","Buxtehude","Ahaus","Muehlhausen","Schwedt","Neustadt","Sued","Beckum","Haltern", "Hofheim am Taunus","Stendal","Wilhelmstadt","Hemer","Falkensee","Buchholz in der Nordheide","Riesa","Wuerselen","Germering","Wermelskirchen","Leinfelden-Echterdingen","Coesfeld", "Schwaebisch Hall","Niederkassel","Porta Westfalica","Datteln","Kempen","Lage","Lurup","Gropiusstadt","Backnang","Falkenhagener Feld","Pasing","Wesseling","Emsdetten","Langen", "Neu Isenburg","Markisches Viertel","Zweibruecken","Sinsheim","Greven","Uelzen","Bernau bei Berlin","Tuttlingen","Merseburg","Steinfurt","Spandau","Wernigerode","Balingen", "Schoenebeck","Tegel","Meppen","Papenburg","Geldern","Kehl","Vegesack","Juelich","Leer"*/];
  for(var x in html_jobs){
    if(typeof html_jobs[x] =="function") continue;
    if(typeof html_jobs[x] =="number") continue;
    var job = {};
    var elem = html_jobs[x];
    job.title = elem.querySelector("div.poste.content-gray-box > h5 > a:nth-child(2)").textContent.trim();
    job.url = elem.querySelector('div.poste.content-gray-box > h5 > a:nth-child(2)').href.trim()+"?utm_source=neuvoo&utm_medium=ppc&utm_campaign=DE";
    job.location = elem.querySelector("div.ville-offre > p").textContent.replace("City :","")
      .trim()+", PT";
    if(job.location.indexOf("Lisbon") !== -1){
      job.location = "Lisbon, PT";
    }

    /*var full_html = getDescription(job.url);
    var language = $("span#LanguageNameValue", full_html).text().trim();
    //msg("LANG: "+language);
    job.html = $("div.content-details-offres", full_html).html();

    if (typeof(job.html)=="undefined"){
      job.html= "";
    }
    job.html = cleanHTML(job.html);
    var tmp       = document.createElement('div');
    tmp.innerHTML = job.html;
    job.jobdesc   = tmp.textContent.trim();
    job.temp = 18081998;*/
    job.html 		= elem.innerHTML.trim(); 

    var full_html = getDescription(job.url);
    var language = $("span#LanguageNameValue", full_html).text().trim();
    var temp = document.createElement("div");
    temp.innerHTML = full_html;
    var desc = temp.querySelector('div.content-details-offres');
    job.html      = desc.innerHTML.trim();    
    job.html = removeTextBefore(job.html, 'Sector :', false);
    //job.html = removeTextAfter(job.html, 'Application Instructions', true);
    job.html      = cleanHTML(job.html);
    job.jobdesc   = desc.textContent.trim();
    //job.jobdesc   = cleanHTML(job.jobdesc);
    
    var tmp       = document.createElement('div');
    tmp.innerHTML = job.html;
    job.jobdesc   = tmp.textContent.trim();
    job.jobdesc   = cleanHTML(job.jobdesc);

    //msg("Este es un lenguaje  "+language+"Este es la location "+job.location);

    //if(/*job.location.toLowerCase().indexOf("lisbon")===-1 &&*/ language === "German"){
      jobs.push(job);
  }
    /*
    if(language === "German"){
      for(var l in locations){

        var jobl = {};

        jobl.title = job.title;
        jobl.url = job.url;
        jobl.location = locations[l]+", DE";

        jobl.html = job.html;
        jobl.jobdesc 	= job.jobdesc;

        jobl.temp = job.temp;
        jobs.push(jobl);
      }
    }*/
  //} 
  if(jobs.length === 0){
    var job_fantasma = Math.random();
    jobs.push(job_fantasma);
  }
  out["jobs"]= jobs;
  return out;
})();

function getDescription(url) {
  msg("GETTING DESCRIPTION");
  var xhrrequest = new XMLHttpRequest();
  xhrrequest.open("GET", url, false); //URL del ajax que trae la información del job

  var response = "";
  xhrrequest.onreadystatechange = function() {
    if(xhrrequest.readyState == 4 && xhrrequest.status == 200) 
    {
      //console.log(xhrrequest.responseText);
      response = xhrrequest.responseText;
    }
  };

  xhrrequest.send(); 
  return response;
}

function removeTextBefore(html, text, flag) {
  var newHtml = html;
  if (newHtml.indexOf(text) > -1) {
    newHtml = newHtml.split(text).pop();
    if (!flag) {
      newHtml = "<h3>" + text + "</h3>" + newHtml;
    }  		
  }
  return newHtml;
}

function removeTextAfter(html, text, flag) {
  var newHtml = html;
  if (newHtml.indexOf(text) > -1) {
    newHtml = newHtml.split(text).shift();
    if (!flag) {
      newHtml = newHtml + "<p>" + text + "</p>";
    }  		
  }
  return newHtml;
}

/*Pagintation */

(function () {
  var out = {};
  var have_next_page = false;

  //var clickable_elem = document.querySelector(next_page_selector);
  var nextpagectrl = document.evaluate("//a[contains(., 'Next')]", document, null, XPathResult.ANY_TYPE, null );
  var nextpageval = nextpagectrl.iterateNext();
  var nextpage = nextpageval;

  if(nextpage) have_next_page = true;

  /*var suivant = nextpage.textContent; 
  msg("NEXT PAGE "+nextpage); // Prints the html element in console
  msg("NEXT PAGE AVAILABLE "+suivant); // prints the text content in console*/

  if (have_next_page) {
    var url = nextpage;
    window.location.href = url;
    out["has_next_page"] = true;
  } else {
    out["has_next_page"] = false;
  }
  out.pic=true;
  out.waitFor = "div.offre-actualites-item";
  return out;
})();

/*(function () {
    var out = {};
    var jobs_number = 0;    // número de jobs por página. Jobs amount per page
    var url_base = "https://job.webhelp.pt/en/offre-emploi?job=0&city=0&sector=0&language=50&page=";
    var selector = "";

    if (typeof pass_it == "undefined") pass_it = {};
    if (typeof msg == "undefined") msg = console.log;

    if (!pass_it["cont"]) {
        out["pass_it"] = {
            "cont": 2,
          	"pagen": 2
        };
    } else {
        out["pass_it"] = pass_it;
    }

    if (document.querySelector('a[href="/en/offre-emploi?job=0&city=0&sector=0&language=50&page='+out["pass_it"].pagen+'"]')) {
		msg(out["pass_it"].pagen)
        var url = url_base + out["pass_it"].cont;
        window.location.href = url;
      	out["pass_it"].pagen++;
        out["pass_it"].cont++;
        out["has_next_page"] = true;
    } 
  else {
        out["has_next_page"] = false;
    }
	out.pic=true;
    out["wait"] = true;
    return out;
})();*/

/*
