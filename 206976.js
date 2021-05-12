(function() {
  var out = {};
  var html_jobs = document.querySelectorAll(".jl");
  var jobs = [];
  var locations = ["Adrara San Martino", "Adrara San Rocco", "Albano Sant'Alessandro", "Albino", "Almè", "Almenno San Bartolomeo", "Almenno San Salvatore", "Alzano Lombardo", "Ambivere", "Antegnate", "Arcene", "Ardesio", "Arzago d'Adda", "Averara", "Aviatico", "Azzano San Paolo", "Azzone", "Bagnatica", "Barbata", "Bariano", "Barzana", "Bedulita", "Berbenno", "Bergamo", "Berzo San Fermo", "Bianzano", "Blello", "Bolgare", "Boltiere", "Bonate Sopra", "Bonate Sotto", "Borgo di Terzo", "Bossico", "Bottanuco", "Bracca", "Branzi", "Brembate", "Brembate di Sopra", "Brignano Gera d'Adda", "Brumano", "Brusaporto", "Calcinate", "Calcio", "Calusco d'Adda", "Calvenzano", "Camerata Cornello", "Canonica d'Adda", "Capizzone", "Capriate San Gervasio", "Caprino Bergamasco", "Caravaggio", "Carobbio degli Angeli", "Carona", "Carvico", "Casazza", "Casirate d'Adda", "Casnigo", "Cassiglio", "Castelli Calepio", "Castel Rozzone", "Castione della Presolana", "Castro", "Cavernago", "Cazzano Sant'Andrea", "Cenate Sopra", "Cenate Sotto", "Cene", "Cerete", "Chignolo d'Isola", "Chiuduno", "Cisano Bergamasco", "Ciserano", "Cividate al Piano", "Clusone", "Colere", "Cologno al Serio", "Colzate", "Comun Nuovo", "Corna Imagna", "Cortenuova", "Costa di Mezzate", "Costa Valle Imagna", "Costa Volpino", "Covo", "Credaro", "Curno", "Cusio", "Dalmine", "Dossena", "Endine Gaiano", "Entratico", "Fara Gera d'Adda", "Fara Olivana con Sola", "Filago", "Fino del Monte", "Fiorano al Serio", "Fontanella", "Fonteno", "Foppolo", "Foresto Sparso", "Fornovo San Giovanni", "Fuipiano Valle Imagna", "Gandellino", "Gandino", "Gandosso", "Gaverina Terme", "Gazzaniga", "Ghisalba", "Gorlago", "Gorle", "Gorno", "Grassobbio", "Gromo", "Grone", "Grumello del Monte", "Isola di Fondra", "Isso", "Lallio", "Leffe", "Lenna", "Levate", "Locatello", "Lovere", "Lurano", "Luzzana", "Madone", "Mapello", "Martinengo", "Mezzoldo", "Misano di Gera d'Adda", "Moio de' Calvi", "Monasterolo del Castello", "Montello", "Morengo", "Mornico al Serio", "Mozzanica", "Mozzo", "Nembro", "Olmo al Brembo", "Oltre il Colle", "Oltressenda Alta", "Oneta", "Onore", "Orio al Serio", "Ornica", "Osio Sopra", "Osio Sotto", "Pagazzano", "Paladina", "Palazzago", "Palosco", "Parre", "Parzanica", "Pedrengo", "Peia", "Pianico", "Piario", "Piazza Brembana", "Piazzatorre", "Piazzolo", "Pognano", "Ponte Nossa", "Ponteranica", "Ponte San Pietro", "Pontida", "Pontirolo Nuovo", "Pradalunga", "Predore", "Premolo", "Presezzo", "Pumenengo", "Ranica", "Ranzanico", "Riva di Solto", "Rogno", "Romano di Lombardia", "Roncobello", "Roncola", "Rota d'Imagna", "Rovetta", "San Giovanni Bianco", "San Paolo d'Argon", "San Pellegrino Terme", "Santa Brigida", "Sarnico", "Scanzorosciate", "Schilpario", "Sedrina", "Selvino", "Seriate", "Serina", "Solto Collina", "Songavazzo", "Sorisole", "Sotto il Monte Giovanni XXIII", "Sovere", "Spinone al Lago", "Spirano", "Stezzano", "Strozza", "Suisio", "Taleggio", "Tavernola Bergamasca", "Telgate", "Terno d'Isola", "Torre Boldone", "Torre de' Busi", "Torre de' Roveri", "Torre Pallavicina", "Trescore Balneario", "Treviglio", "Treviolo", "Ubiale Clanezzo", "Urgnano", "Valbondione", "Valbrembo", "Valgoglio", "Valleve", "Valnegra", "Valtorta", "Vedeseta", "Verdellino", "Verdello", "Vertova", "Viadanica", "Vigano San Martino", "Vigolo", "Villa d'Adda", "Villa d'Almè", "Villa di Serio", "Villa d'Ogna", "Villongo", "Vilminore di Scalve", "Zandobbio", "Zanica", "Zogno", "Costa Serina", "Algua", "Cornalba", "Medolago", "Solza", "Sant'Omobono Terme", "Val Brembilla", "Abbadia Cerreto", "Bertonico", "Boffalora d'Adda", "Borghetto Lodigiano", "Borgo San Giovanni", "Brembio", "Casaletto Lodigiano", "Casalmaiocco", "Casalpusterlengo", "Caselle Landi", "Caselle Lurani", "Castelnuovo Bocca d'Adda", "Castiglione d'Adda", "Castiraga Vidardo", "Cavenago d'Adda", "Cervignano d'Adda", "Codogno", "Comazzo", "Cornegliano Laudense", "Corno Giovine", "Cornovecchio", "Corte Palasio", "Crespiatica", "Fombio", "Galgagnano", "Graffignana", "Guardamiglio", "Livraga", "Lodi", "Lodi Vecchio", "Maccastorna", "Mairago", "Maleo", "Marudo", "Massalengo", "Meleti", "Merlino", "Montanaso Lombardo", "Mulazzano", "Orio Litta", "Ospedaletto Lodigiano", "Ossago Lodigiano", "Pieve Fissiraga", "Salerano sul Lambro", "San Fiorano", "San Martino in Strada", "San Rocco al Porto", "Sant'Angelo Lodigiano", "Santo Stefano Lodigiano", "Secugnago", "Senna Lodigiana", "Somaglia", "Sordio", "Tavazzano con Villavesco", "Terranova dei Passerini", "Turano Lodigiano", "Valera Fratta", "Villanova del Sillaro", "Zelo Buon Persico", "Castelgerundo"];

  var title = ["Addetto / Addetta al Magazzino - Amazon", "Addetto / Addetta al Magazzino - Amazon Casirate d’Adda", "Addetto / Addetta al Magazzino Amazon Casirate d’Adda", "Impiegato Magazzino - Amazon", "Impiegato Magazzino - Amazon Casirate d’Adda", "Magazziniere - Amazon", "Magazziniere - Amazon Casirate d’Adda", "Operaio Magazziniere / Magazzinieri - Amazon", "Operatore di Magazzino - Amazon Casirate d’Adda", "Operatori di Magazzino - Amazon", "Operatori di Magazzino - Amazon Casirate d’Adda", "Operatori di magazzino – Associates"];

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

    for(var l in locations){
      if(typeof locations[l] =="function") continue;
      if(typeof locations[l] =="number") continue;
      for(var t in title){
        if(typeof title[t] =="function") continue;
        if(typeof title[t] =="number") continue;

        var jobx = {};

        jobx.title = title[t];
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