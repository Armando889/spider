https://emplois.neuvoo-ats.com/?showempid=2261


(function() {
  var out = {};
  var html_jobs = document.querySelectorAll(".jl");
  var jobs = [];
  var locations = ["Abbiategrasso", "Albairate", "Arconate", "Arese", "Arluno", "Assago", "Bareggio", "Basiano", "Basiglio", "Bellinzago Lombardo", "Bernate Ticino", "Besate", "Binasco", "Boffalora sopra Ticino", "Bollate", "Bresso", "Bubbiano", "Buccinasco", "Buscate", "Bussero", "Busto Garolfo", "Calvignasco", "Cambiago", "Canegrate", "Carpiano", "Carugate", "Casarile", "Casorezzo", "Cassano d'Adda", "Cassina de' Pecchi", "Cassinetta di Lugagnano", "Castano Primo", "Cernusco sul Naviglio", "Cerro al Lambro", "Cerro Maggiore", "Cesano Boscone", "Cesate", "Cinisello Balsamo", "Cisliano", "Cologno Monzese", "Colturano", "Corbetta", "Cormano", "Cornaredo", "Corsico", "Cuggiono", "Cusago", "Cusano Milanino", "Dairago", "Dresano", "Gaggiano", "Garbagnate Milanese", "Gessate", "Gorgonzola", "Grezzago", "Gudo Visconti", "Inveruno", "Inzago", "Lacchiarella", "Lainate", "Legnano", "Liscate", "Locate di Triulzi", "Magenta", "Magnago", "Marcallo con Casone", "Masate", "Mediglia", "Melegnano", "Melzo", "Mesero", "Milano", "Morimondo", "Motta Visconti", "Nerviano", "Nosate", "Novate Milanese", "Noviglio", "Opera", "Ossona", "Ozzero", "Paderno Dugnano", "Pantigliate", "Parabiago", "Paullo", "Pero", "Peschiera Borromeo", "Pessano con Bornago", "Pieve Emanuele", "Pioltello", "Pogliano Milanese", "Pozzo d'Adda", "Pozzuolo Martesana", "Pregnana Milanese", "Rescaldina", "Rho", "Robecchetto con Induno", "Robecco sul Naviglio", "Rodano", "Rosate", "Rozzano", "San Colombano al Lambro", "San Donato Milanese", "San Giorgio su Legnano", "San Giuliano Milanese", "Santo Stefano Ticino", "San Vittore Olona", "San Zenone al Lambro", "Sedriano", "Segrate", "Senago", "Sesto San Giovanni", "Settala", "Settimo Milanese", "Solaro", "Trezzano Rosa", "Trezzano sul Naviglio", "Trezzo sull'Adda", "Tribiano", "Truccazzano", "Turbigo", "Vanzago", "Vaprio d'Adda", "Vernate", "Vignate", "Vimodrone", "Vittuone", "Vizzolo Predabissi", "Zibido San Giacomo", "Villa Cortese", "Vanzaghello", "Baranzate", "Vermezzo con Zelo"];
  var titles = ["Consulente Assicurativo con Assunzione Tempo Det. - Filiale Milano", "Consulente Assicurativo | Family Solution Planner - Filiale Milano", "Consulente Commerciale Junior con Assunzione - Filiale Milano", "Dipendente Settore Assicurativo Previdenziale - Filiale Milano", "Venditore Ramo Assicurativo Con Assunzione - Filiale Milano"];

  for(var x in html_jobs){
    if(typeof html_jobs[x] =="function") continue;
    if(typeof html_jobs[x] =="number") continue;
    var job = {};

    var elem = html_jobs[x];
    job.title = elem.querySelector("a").textContent.trim();
    job.url = elem.querySelector("a").href.trim();
    job.location = elem.querySelector(".jc").textContent.trim();
    job.source_empname = elem.querySelector(".company").textContent.trim();
    job.reqid = elem.querySelector("a").href.split("=")[1].trim();
    job.temp = 1;

    var full_html = getDescription(job.url);
    var temp = document.createElement("div");
    temp.innerHTML = full_html;

    var desc = temp.querySelector('div.description');

    job.html      = desc.innerHTML.trim();    
    job.jobdesc   = desc.textContent.trim();

    job.html      = cleanHTML(job.html);
    job.jobdesc   = cleanHTML(job.jobdesc);

    //jobs.push(job);
    job.url = "https://jobs.neuvoo-ats.com/job.php?id="+temp.querySelector('div.bottom-apply a.applyb').href.split('id=').pop().trim();
    //job.url = url + "&apply=1";
    //[Request to assign the application link as the url of the job]


    var urltoinclude = /7089/g;
    var urlfound = job.url.match(urltoinclude);
    if(urlfound){

      for(var l in locations){
        if(typeof locations[l] =="function") continue;
        if(typeof locations[l] =="number") continue;

        for(var t in titles){
          if(typeof titles[t] =="function") continue;
          if(typeof titles[t] =="number") continue;

          var jobx = {};

          jobx.title = titles[t];
          jobx.url =  job.url;
          jobx.location = locations[l]+", IT";
          jobx.source_empname = job.source_empname;
          jobx.temp = job.temp;
          jobx.reqid = job.reqid;
          jobx.html = job.html;    
          jobx.jobdesc = job.jobdesc;
          jobs.push(jobx);
        }
      }
    }
  }
  out["jobs"]= jobs;
  return out;
})();
function getDescription(url) {
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