(function() {
  var out = {};
  var auxtitle = [{titulo:"Journalier",newtitulos:["Manoeuvre","Opérateur de production"]}];
  var auxloc = [
    {reqid:"3137",newlocs:["Rive-Sud, QC, CA", "Brossard, QC, CA"]},
    {reqid:"3087",newlocs:["Ontario, CA", "Hawkesbury, ON, CA"]},
    {reqid:"3157",newlocs:["Rive-Nord, QC, CA", "Terrebonne, QC, CA" ]},
    {reqid:"3140",newlocs:["Laurentides, QC, CA", "Mirabel, QC, CA"]},
    {reqid:"3161",newlocs:["Laval, Qc, CA"]},
    {reqid:"3017",newlocs:["Québec, Qc, CA"]},
    {reqid:"3158",newlocs:["Cornwall, On, CA"]},
    {reqid:"3205",newlocs:["Terrebonne, QC","L'Assomption, QC","Laval, QC"]},
    {reqid:"3219",newlocs:["Pointe-Claire, QC","Montréal, QC","Dorval, QC"]}
  ]; 
  var data = [
    //{url:"https://phh.tbe.taleo.net/phh01/ats/careers/v2/viewRequisition?org=GHR&cws=54&rid=3188",newtitles:["Livreur camion-grue(Hiab)/ JOUR","Camionneur - (Boom Truck) classe 1","Chauffeur - (Boom Truck) classe 1"],newlocs:["Boisbriand, QC","Blainville, QC","Laval, QC"]},
    {id:"https://phh.tbe.taleo.net/phh01/ats/careers/v2/viewRequisition?org=GHR&cws=54&rid=3178",newtitle:["Conducteur-trice d'autobus scolaire"],newlocs:["Saint-Jérôme, QC","Laval, QC","Blainville, QC"]},
    {id:"https://phh.tbe.taleo.net/phh01/ats/careers/v2/viewRequisition?org=GHR&cws=54&rid=3017",newtitle:["Conducteur – Classe 3","Camionneur – Classe 3"],newlocs:["Sainte=Foy, QC","Lévis, QC"]},
    {id:"https://phh.tbe.taleo.net/phh01/ats/careers/v2/viewRequisition?org=GHR&cws=54&rid=3185",newtitle:["Conducteur – Classe 3","Camionneur – Classe 3"],newlocs:["Boucherville, QC","Longueuil, QC","Brossard, QC"]},
    {id:"https://phh.tbe.taleo.net/phh01/ats/careers/v2/viewRequisition?org=GHR&cws=54&rid=3189",newtitle:["Conducteur – Classe 3","Camionneur – Classe 3"],newlocs:["Boucherville, QC","Longueuil, QC","Brossard, QC"]},
    {id:"https://phh.tbe.taleo.net/phh01/ats/careers/v2/viewRequisition?org=GHR&cws=54&rid=3162",newtitle:["Contrôleur(se) ressources humaines","Contrôleur(se) RH","Agent(e) vérification ressources humaines","Agent(e) vérification RH "],newlocs:["Boucherville, QC","Longueuil, QC","Brossard, QC"]},
    {id:"https://phh.tbe.taleo.net/phh01/ats/careers/v2/viewRequisition?org=GHR&cws=54&rid=3085",newtitle:["Commis logistique","Agent(e) logistique","Agent(e) répartition"],newlocs:["Québec, QC","Sainte-Foy, QC","Lévis, QC"]},
    {id:"https://phh.tbe.taleo.net/phh01/ats/careers/v2/viewRequisition?org=GHR&cws=54&rid=3177",newtitle:["Conducteur-trice d'autobus scolaire"],newlocs:["Vaudreuil-Dorion, QC","Pointe-Claire, QC"]},
    {id:"https://phh.tbe.taleo.net/phh01/ats/careers/v2/viewRequisition?org=GHR&cws=54&rid=3188",newtitle:["Livreur camion-grue(Hiab)/ JOUR","Camionneur - (Boom Truck) classe 1","Chauffeur - (Boom Truck) classe 1"],newlocs:["Boisbriand, QC","Blainville, QC","Laval, QC"]},
    {id:"https://phh.tbe.taleo.net/phh01/ats/careers/v2/viewRequisition?org=GHR&cws=54&rid=3137",newtitle:["Commis d'entrepôt - préparation commandes"],newlocs:["Boucherville, QC","Longueuil, QC","Châteauguay, QC","Granby, QC","Saint-Hyacinthe, QC","Saint-Jean-sur-Richelieu, QC","Sorel-Tracy, QC","Vaudreuil-Dorion, QC"]},
    {id:"https://phh.tbe.taleo.net/phh01/ats/careers/v2/viewRequisition?org=GHR&cws=54&rid=3156",newtitle:["Commis d'entrepôt"],newlocs:["Dorval, QC","Lachine, QC","Pointe-Claire, QC","Montréal, QC"]},
    {id:"https://phh.tbe.taleo.net/phh01/ats/careers/v2/viewRequisition?org=GHR&cws=54&rid=3155",newtitle:["Chauffeur de camions - Truck Driver"],newlocs:["Lachine, QC","Dorval, QC","Pointe-Claire, QC","Saint-Laurent, QC","Montréal, QC"]},
    {id:"https://phh.tbe.taleo.net/phh01/ats/careers/v2/viewRequisition?org=GHR&cws=54&rid=3154",newtitle:["Chauffeur de camions - Truck Driver"],newlocs:["Montréal, QC","Boucherville, QC","Longueuil, QC"]},
    {id:"https://phh.tbe.taleo.net/phh01/ats/careers/v2/viewRequisition?org=GHR&cws=54&rid=3152",newtitle:["Chauffeur de camions - Truck Driver"],newlocs:["Terrebonne, QC","L'Assomption, QC","Laval, QC","Saint-Jérôme, QC","Saint-Eustache, QC","Mirabel, QC"]},
    {id:"https://phh.tbe.taleo.net/phh01/ats/careers/v2/viewRequisition?org=GHR&cws=54&rid=3153",newtitle:["Chauffeur de camions - Truck Driver"],newlocs:["Montréal, QC","Boucherville, QC","Longueuil, QC"]},
    {id:"https://phh.tbe.taleo.net/phh01/ats/careers/v2/viewRequisition?org=GHR&cws=54&rid=3224",newtitle:["Camionneur CL1 et CL3 - secteur Québec","Chauffeur de camions - Truck Driver"],newlocs:["Québec, QC","Sainte-Foy, QC","Lévis, QC"]}
  ];
  var html_jobs = document.querySelectorAll("div.oracletaleocwsv2-accordion");
  var jobs = [];for(var x in html_jobs){
    if(typeof html_jobs[x] =="function") continue;
    if(typeof html_jobs[x] =="number") continue;
    var job = {};
    var elem = html_jobs[x];
    if(elem.querySelector("h4.oracletaleocwsv2-head-title a")){
      job.title = elem.querySelector("h4.oracletaleocwsv2-head-title a").textContent.trim();
      job.url = elem.querySelector("h4.oracletaleocwsv2-head-title a").href.trim()+"&source=Neuvoo";
      job.location = elem.querySelector("div.oracletaleocwsv2-accordion-head-info > div:nth-child(3)").textContent.trim();
      job.reqid = elem.querySelector("h4.oracletaleocwsv2-head-title a").href.trim().split("rid=").pop();
      ////TICKET 64935
      for(let c in auxloc){
        if(job.reqid === auxloc[c].reqid){
          for(let a in auxloc[c].newlocs){
            var newloc = auxloc[c].newlocs[a];
            if(job.location.toLowerCase().indexOf(newloc.toLowerCase())>-1){
              job.location = job.location.replace(newloc,auxloc[c].newlocs[a]);
            }else{
              job.location = job.location+"/"+auxloc[c].newlocs[a];
            }
          }
        }
      }
      if(job.location.indexOf("/")>-1) {
        var aux = job.location.split("/");
        for(i in aux)
        {
          var jobx = {};
          jobx.title = job.title;
          jobx.url = job.url;
          jobx.reqid = job.reqid;
          jobx.location = aux[i]; 
          if(jobx.title.length > 0 && jobx.location.length > 2){
            job.temp = 1;
            jobs.push(jobx);
          }
        }
      }
      else{
        for(var d in data){
          if(typeof data[d] =="function") continue;
          if(typeof data[d] =="number") continue;
          if(job.url.indexOf(data[d].id) > -1 ){
            for(var nl in data[d].newlocs){
              for(var i in data[d].newtitle){
                if(typeof data[d].newlocs[nl] =="function") continue;
                if(typeof data[d].newlocs[nl] =="number") continue;
                if(typeof data[d].newtitle[i] =="function") continue;
                if(typeof data[d].newtitle[i] =="number") continue;
                var jobx = {};  
                jobx.title = data[d].newtitle[i];
                jobx.location = data[d].newlocs[nl];
                jobx.url = job.url;
                jobx.reqid = job.reqid;
                jobx.temp = job.temp;
                jobs.push(jobx);
              }
            }
          }
        }
        jobs.push(job);
      }
    }
  } 

  out["jobs"]= jobs;
  return out;
})();