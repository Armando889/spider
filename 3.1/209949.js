(function () {
  var out = {};
  out["wait"] = true;
  /*var data = [
    {id:["6118"],newtitle:["Warehouse Associate","General Labour", "Skilled Labour","Warehouse"],newlocs:["Burlington, ON","Hamilton, ON", "Niagara, ON","Oakville, ON"]},
  ];*/


  var script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(script);
  var jobsSelector = ".job-card";
  var returnedJobs = [];
  var html_jobs = [];

  if (typeof pass_it == "undefined") pass_it = {};
  if (typeof msg == "undefined") msg = console.log;

  if (!pass_it["cont"]) {
    out["pass_it"] = {
      "cont": 0,
      "jobs": 0
    };
  } else {
    out["pass_it"] = pass_it;
  }

  /*if(window.location.href.search(/3311/)>-1){
    returnedJobs.push(getData());
    out['jobs'] = returnedJobs;
    return out; 
  }*/
  var iframe_selector = "#icims_content_iframe";   
  var iframeDocument = document.querySelector(iframe_selector).contentWindow.document;

  html_jobs = iframeDocument.querySelectorAll(jobsSelector);

  for (var x in html_jobs) {

    if(typeof html_jobs[x] =="function") continue;
    if(typeof html_jobs[x] =="number") continue;
    var elem = html_jobs[x];           
    var job = {};/*init*/

    job.title = elem.querySelector("div.job-link > a > span > span").textContent.replace("Job Title", "").trim();
    job.url = elem.querySelector("a").href.trim()+"?mode=job&iis=Neuvoo&iisn=talentsponsored&in_iframe=1";
    job.reqid = elem.querySelector("div.additional-fields > dl").textContent.replace("Identifiant de la demande","").replace("ID","").trim();
    var full_html = getDescription(job.url);
    var temp = document.createElement("div");
    temp.innerHTML = full_html;
    job.location = temp.querySelector('div[class="col-xs-6 header left"]').textContent.replace("Job Locations","").trim();
    job.location = job.location.split("-").reverse().join(", ").trim();
    //job.location = job.location.split("-").reverse().join(", ");
    job.temp = '3312';
    //Ticket id=62792. Remove jobs with ppc=0
    /*var urltoexclude = /3702|3753|3779|3903|4163|4398|4401|4403|4405|4485|4486|4494|4517|4534|4569|4571|4578|4625|4626|4640|4641|4642|4648|4649|4666|4668|4669|4677|4485|4486|4493|4494|4625|4626/g;

    var jobstoexclude = job.url.match(urltoexclude);
    if(!jobstoexclude)
      for(var d in data){
        if(job.url.indexOf(data[d].id) > -1 ){
          for(var nl in data[d].newlocs){
            if(typeof data[d].newlocs[nl] =="function") continue;
            if(typeof data[d].newlocs[nl] =="number") continue;

            for(var i in data[d].newtitle){
              if(typeof data[d].newtitle[i] =="function") continue;
              if(typeof data[d].newtitle[i] =="number") continue;

              var jobx = {};  
              jobx = {...job};
              jobx.title = data[d].newtitle[i];
              jobx.location = data[d].newlocs[nl];
              returnedJobs.push(jobx);
            }
          }
        }
      }*/
    if(job.location.indexOf('Sherbrooke, QC, CA')>-1 || job.location.indexOf('Dorval, QC, CA')>-1 || job.location.indexOf('Anjou, QC, CA')>-1
       || job.location.indexOf('Hubert, Saint, QC, CA')>-1 || job.location.indexOf('Quebec, QC, CA')>-1
       || job.location.indexOf('Laval, QC, CA')>-1){
      returnedJobs.push(job);
    }
  }  

  //out["pic"] = true;
  //out.html = true;
  // out["pass_it"]["jobs"] = returnedJobs.length;
  var job_fantasma = Math.random();
  returnedJobs.push(job_fantasma);
  out["pass_it"]["jobs"] = returnedJobs.length;
  out["jobs"] = returnedJobs;
  return out;
})();

/*function getData() {
  var job             = {};
  var selector        = "div.iCIMS_JobContent";
  if (typeof msg == "undefined") msg = console.log;

  var iframe_selector = "#icims_iframe_span > iframe";   
  var iframeDocument  = document.querySelector(iframe_selector).contentWindow.document;


  job.title    		= iframeDocument.querySelector('h1.iCIMS_Header').innerText.trim()
  job.temp 			= '3312';
  job.url				= window.location.href;

  if($('div[class="iCIMS_JobHeaderGroup"] dl:contains(ICIMS Job ID)', iframeDocument)[0]){
    job.reqid    = $('div[class="iCIMS_JobHeaderGroup"] dl:contains(ICIMS Job ID)', iframeDocument)[0].innerText.split('ICIMS Job ID').pop().trim();
  }

  return job;
};
*/

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