(function() {
  var out = {};
  var jobs = [];
  //var jobsSelector = 'div.corps_offre';  //SELECTOR DE LOS JOBS

  var data = [
   
   {titles:["CDI Chargé d’Assistance Trilingue H/F – Paris","Chargé d'assistance polyglotte","Chargé d'assistance parlant 3 langues","Chargé d'assistance plurilingue","Chargé d'assistance multilingue"],url:"https://www.jobmania.fr/job/cdi-charge-dassistance-trilingue-h-f-paris/",cpc:"33",empname:"Europ assistance",logo:"https://www.jobmania.fr/wp-content/uploads/2019/09/Logo-Europ_150x150-1-120x120.png"},
   {titles:["CDI Chargé d’Assistance H/F – Permanence de Nuit – Paris","Chargé d'assistance polyglotte","Chargé d'assistance parlant 3 langues","Chargé d'assistance plurilingue","Chargé d'assistance multilingue"],url:"https://www.jobmania.fr/job/cdi-charge-dassistance-h-f-permanence-de-nuit-paris/",cpc:"33",empname:"Europ assistance",logo:"https://www.jobmania.fr/wp-content/uploads/2019/09/Logo-Europ_150x150-1-120x120.png"},
   {titles:["CDI Temps Partiel – Chargé d’Assistance H/F – Paris","Chargé d'assistance polyglotte","Chargé d'assistance parlant 3 langues","Chargé d'assistance plurilingue","Chargé d'assistance multilingue"],url:"https://www.jobmania.fr/job/cdi-temps-partiel-charge-dassistance-h-f-paris/",cpc:"33",empname:"Europ assistance",logo:"https://www.jobmania.fr/wp-content/uploads/2019/09/Logo-Europ_150x150-1-120x120.png"},
       
   {titles:["CDI Chef de Secteur GMS H/F – Tours"],url:"https://www.jobmania.fr/job/cdi-chef-de-secteur-gms-h-f-tours/",cpc:"27",empname:"Henri raffin",logo:"https://www.jobmania.fr/wp-content/uploads/2020/05/HenriRAFFIN_Logo_150x150-120x120.jpg"},
   {titles:["Gestionnaire de paie et RH confirmé H/F – Paris"],url:"https://www.jobmania.fr/job/gestionnaire-de-paie-et-rh-confirme-h-f-paris/",cpc:"27",empname:"Galaxy conseil",logo:"https://www.jobmania.fr/wp-content/uploads/2020/09/Galaxy150x150-120x120.jpg"},
   {titles:["Business Developer B2B M/F – Paris"],url:"https://www.jobmania.fr/job/business-developer-b2b-m-f-paris/",cpc:"27",empname:"Jobmania",logo:"https://www.jobmania.fr/wp-content/themes/injob-child/assets/images/logo-jobmania-mini.png"},
   {titles:["CDI Retail Business Developer M/F – Paris"],url:"https://www.jobmania.fr/job/cdi-retail-business-developer-m-f-paris/",cpc:"27",empname:"Jobmania",logo:"https://www.jobmania.fr/wp-content/themes/injob-child/assets/images/logo-jobmania-mini.png"},
   {titles:["CDI Product Manager H/F – Lead Design – Paris"],url:"https://www.jobmania.fr/job/cdi-product-manager-h-f-lead-design-paris/",cpc:"27",empname:"Jobmania",logo:"https://www.jobmania.fr/wp-content/themes/injob-child/assets/images/logo-jobmania-mini.png"}
    
  ];
  
  var locs = ["Paris","Montrouge","Gentilly","La défense","Levallois-perret","Clichy","Le Pré-Saint-Gervais","Malakoff","Bagnolet","Vanves"];
      
  for(var x in data){
    
    var job = {};
    
    job.url = data[x].url;
    job.source_ppc = data[x].cpc;
    job.source_empname = data[x].empname;
    job.logo = data[x].logo;
        
    var full_html = getDescription(job.url);
    var temp = document.createElement("div");
    temp.innerHTML = full_html;
    var desc = temp.querySelector('#job-detail-content');
    job.html      = desc.innerHTML.trim();  
    job.jobdesc   = desc.textContent.trim();
    job.html = removeTextBefore(job.html, 'introduction', false);
    job.jobdesc = removeTextBefore(job.jobdesc, 'introduction', false);
    job.html      = cleanHTML(job.html);
    job.jobdesc   = cleanHTML(job.jobdesc);

    job.temp = 45;
    
    //jobs.push(job);
    
    //Replicar trabajos en locs
    for(var nl in data[x].titles){
      for(var li in locs){
        var jobi = {};
          jobi.title = data[x].titles[nl];
          jobi.url =  job.url;
          jobi.location = locs[li]+ ", FR";
          jobi.source_empname = job.source_empname;
          jobi.logo = job.logo;
          jobi.source_ppc = job.source_ppc;
          jobi.html = job.html;    
          jobi.jobdesc = job.jobdesc;
          jobi.temp = job.temp;
          jobs.push(jobi);
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
  msg("GETTING DESCRIPTION");
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