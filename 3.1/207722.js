(function() {
  var out = {};
  var html_jobs = document.querySelectorAll(".jl");
  var jobs = [];
  var data = [
    {id:["6939"],newtitle:["Senior Investment Banking Analyst","Experienced Investment Banking Analyst"],newlocs:["Newark, NY","Queens, NY","Nouvelle-Rochelle, NY","New York City, NY"],email:'cdeangelis@seaburysecurities.com, jsmith@seaburysecurities.com'},
  ];
  for(var x in html_jobs){
    if(typeof html_jobs[x] =="function") continue;
    if(typeof html_jobs[x] =="number") continue;
    var job = {};
    var elem = html_jobs[x];
    var url = elem.querySelector("a").href.trim();

    job.title          = elem.querySelector("a.title").textContent.trim();
    job.url            = elem.querySelector("a.title").href.trim();
    job.reqid          = job.url.split('id=').pop().split('/').shift().trim();
    job.location       = elem.querySelector(".jc").textContent.trim();
    job.source_empname = elem.querySelector(".company").textContent.trim();
    job.temp = "1";

    var full_html = getDescription(url);
    var temp = document.createElement("div");
    temp.innerHTML = full_html;
    var desc = temp.querySelector('div.description');
    job.html 		= desc.innerHTML.trim();
    job.html 	    = job.html.replace('although not required', 'although not required <br> Please add cover letter');
    job.jobdesc 	= desc.textContent.trim();
    job.jobdesc   = job.jobdesc.replace('although not required', 'although not required Please add cover letter');
    //jobs.push(job);

    /* var dataJobs = ['cdeangelis@seaburysecurities.com, jsmith@seaburysecurities.com'];
    dataJobs.forEach((newEmail) =>{
      var jobx = {};
      jobx = {...job};
      jobx.source_apply_email = newEmail;
      jobs.push(jobx);

      if(jobx.reqid.search(/6939/)>-1){
        var newTiles = ['Senior Investment Banking Analyst'];
        newTiles.forEach((newTitle) =>{
          var jobxx = {};
          jobxx = {...jobx};
          jobxx.title = newTitle;
          jobs.push(jobxx);
        });
      }

    });*/
    for(var d in data){
      if(job.url.indexOf(data[d].id) > -1 ){
        for(var nl in data[d].newlocs){
          for(var i in data[d].newtitle){
            var jobx = {};  
            jobx = {...job};
            jobx.title = data[d].newtitle[i];
            jobx.location = data[d].newlocs[nl];
            jobx.source_apply_email = data[d].email;
            jobs.push(jobx);
          }
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