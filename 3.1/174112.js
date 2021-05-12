https://emplois.neuvoo-ats.com/?showempid=2261

(function() {
  var out = {};
  var html_jobs = document.querySelectorAll(".jl");
  var jobs = [];
  var locations = ["Agliè", "Airasca", "Ala di Stura", "Albiano d'Ivrea", "Almese", "Alpette", "Alpignano", "Andezeno", "Andrate", "Angrogna", "Arignano", "Avigliana", "Azeglio", "Bairo", "Balangero", "Baldissero Canavese", "Baldissero Torinese", "Balme", "Banchette", "Barbania", "Bardonecchia", "Barone Canavese", "Beinasco", "Bibiana", "Bobbio Pellice", "Bollengo", "Borgaro Torinese", "Borgiallo", "Borgofranco d'Ivrea", "Borgomasino", "Borgone Susa", "Bosconero", "Brandizzo", "Bricherasio", "Brosso", "Brozolo", "Bruino", "Brusasco", "Bruzolo", "Buriasco", "Burolo", "Busano", "Bussoleno", "Buttigliera Alta", "Cafasse", "Caluso", "Cambiano", "Campiglione Fenile", "Candia Canavese", "Candiolo", "Canischio", "Cantalupa", "Cantoira", "Caprie", "Caravino", "Carema", "Carignano", "Carmagnola", "Casalborgone", "Cascinette d'Ivrea", "Caselette", "Caselle Torinese", "Castagneto Po", "Castagnole Piemonte", "Castellamonte", "Castelnuovo Nigra", "Castiglione Torinese", "Cavagnolo", "Cavour", "Cercenasco", "Ceres", "Ceresole Reale", "Cesana Torinese", "Chialamberto", "Chianocco", "Chiaverano", "Chieri", "Chiesanuova", "Chiomonte", "Chiusa di San Michele", "Chivasso", "Ciconio", "Cintano", "Cinzano", "Ciriè", "Claviere", "Coassolo Torinese", "Coazze", "Collegno", "Colleretto Castelnuovo", "Colleretto Giacosa", "Condove", "Corio", "Cossano Canavese", "Cuceglio", "Cumiana", "Cuorgnè", "Druento", "Exilles", "Favria", "Feletto", "Fenestrelle", "Fiano", "Fiorano Canavese", "Foglizzo", "Forno Canavese", "Frassinetto", "Front", "Frossasco", "Garzigliana", "Gassino Torinese", "Germagnano", "Giaglione", "Giaveno", "Givoletto", "Gravere", "Groscavallo", "Grosso", "Grugliasco", "Ingria", "Inverso Pinasca", "Isolabella", "Issiglio", "Ivrea", "La Cassa", "La Loggia", "Lanzo Torinese", "Lauriano", "Leini", "Lemie", "Lessolo", "Levone", "Locana", "Lombardore", "Lombriasco", "Loranzè", "Luserna San Giovanni", "Lusernetta", "Lusigliè", "Macello", "Maglione", "Marentino", "Massello", "Mathi", "Mattie", "Mazzè", "Meana di Susa", "Mercenasco", "Mezzenile", "Mombello di Torino", "Mompantero", "Monastero di Lanzo", "Moncalieri", "Moncenisio", "Montaldo Torinese", "Montalenghe", "Montalto Dora", "Montanaro", "Monteu da Po", "Moriondo Torinese", "Nichelino", "Noasca", "Nole", "Nomaglio", "None", "Novalesa", "Oglianico", "Orbassano", "Orio Canavese", "Osasco", "Osasio", "Oulx", "Ozegna", "Palazzo Canavese", "Pancalieri", "Parella", "Pavarolo", "Pavone Canavese", "Pecetto Torinese", "Perosa Argentina", "Perosa Canavese", "Perrero", "Pertusio", "Pessinetto", "Pianezza", "Pinasca", "Pinerolo", "Pino Torinese", "Piobesi Torinese", "Piossasco", "Piscina", "Piverone", "Poirino", "Pomaretto", "Pont Canavese", "Porte", "Pragelato", "Prali", "Pralormo", "Pramollo", "Prarostino", "Prascorsano", "Pratiglione", "Quagliuzzo", "Quassolo", "Quincinetto", "Reano", "Ribordone", "Rivalba", "Rivalta di Torino", "Riva presso Chieri", "Rivara", "Rivarolo Canavese", "Rivarossa", "Rivoli", "Robassomero", "Rocca Canavese", "Roletto", "Romano Canavese", "Ronco Canavese", "Rondissone", "Rorà", "Roure", "Rosta", "Rubiana", "Rueglio", "Salassa", "Salbertrand", "Salerano Canavese", "Salza di Pinerolo", "Samone", "San Benigno Canavese", "San Carlo Canavese", "San Colombano Belmonte", "San Didero", "San Francesco al Campo", "Sangano", "San Germano Chisone", "San Gillio", "San Giorgio Canavese", "San Giorio di Susa", "San Giusto Canavese", "San Martino Canavese", "San Maurizio Canavese", "San Mauro Torinese", "San Pietro Val Lemina", "San Ponso", "San Raffaele Cimena", "San Sebastiano da Po", "San Secondo di Pinerolo", "Sant'Ambrogio di Torino", "Sant'Antonino di Susa", "Santena", "Sauze di Cesana", "Sauze d'Oulx", "Scalenghe", "Scarmagno", "Sciolze", "Sestriere", "Settimo Rottaro", "Settimo Torinese", "Settimo Vittone", "Sparone", "Strambinello", "Strambino", "Susa", "Tavagnasco", "Torino", "Torrazza Piemonte", "Torre Canavese", "Torre Pellice", "Trana", "Traversella", "Traves", "Trofarello", "Usseaux", "Usseglio", "Vaie", "Val della Torre", "Valgioie", "Vallo Torinese", "Valperga", "Valprato Soana", "Varisella", "Vauda Canavese", "Venaus", "Venaria Reale", "Verolengo", "Verrua Savoia", "Vestignè", "Vialfrè", "Vidracco", "Vigone", "Villafranca Piemonte", "Villanova Canavese", "Villarbasse", "Villar Dora", "Villareggia", "Villar Focchiardo", "Villar Pellice", "Villar Perosa", "Villastellone", "Vinovo", "Virle Piemonte", "Vische", "Vistrorio", "Viu", "Volpiano", "Volvera", "Mappano", "Val di Chy", "Valchiusa"];
  var titles = ["Consulente Assicurativo con Assunzione Tempo Det. - Filiale Torino","Consulente Assicurativo | Family Solution Planner - Filiale Torino","Consulente Commerciale Junior con Assunzione - Filiale Torino","Dipendente Settore Assicurativo Previdenziale - Filiale Torino","Venditore Ramo Assicurativo Con Assunzione - Filiale Torino"];

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


    var urltoinclude = /7090/g;
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