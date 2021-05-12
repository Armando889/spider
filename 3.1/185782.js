(function() {
  var out = {};
  var jobstosend = [];

  var xhrrequest = new XMLHttpRequest();
  var urlToOpen = "https://boards-api.greenhouse.io/v1/boards/carvana/jobs?content=true";
  xhrrequest.open("GET", urlToOpen, false); //URL del ajax que trae la información del job
  xhrrequest.setRequestHeader("Content-Type","application/json;charset=UTF-8");
  var content = "";
  xhrrequest.onreadystatechange = function() {
    if(xhrrequest.readyState == 4 && xhrrequest.status == 200) 
    {
      //console.log(xhrrequest.responseText);
      content = xhrrequest.responseText;
    }
  };

  xhrrequest.send(); 
  //msg("CONTENT: "+content);

  //  Selector pre is usually where the string of the json is
  /*var element = document.querySelector("pre").textContent;
  //  We parse the json so it can be worked
  var json = JSON.parse(element);
  //  Replace positionOfJobs for the path were are the jobs
  var jobs = json.jobs;
*/
  var json = JSON.parse(content);
  var jobs = json.jobs;
  msg("JOBS: "+jobs.length);
  var data = [
    {currentloc:"Heath, Ohio",newlocs:["Jacksontown, OH","Hebron, OH","Newark, OH","Granville, OH","Nashport, OH","Alexandria, OH","Buckeye lake, OH","Brownsville, OH","Gratiot, OH","Pataskala, OH","Hopewell, OH","Glenford, OH","Zanesville, OH","Etna, OH","Columbus, OH"]},
    {currentloc:"Cleveland, OH",newlocs:["Beachwood, OH","Maple heights, OH","bedford, OH","Independence, OH","Solon, OH","Chagrin Falls, OH","Warrensville Heights, OH","Macedonia, OH","Northfield, OH","Twinsburg, OH","Brecksville, OH"]},
    {currentloc:"Indianapolis, IN",newlocs:["Beech Grove, IN","West Newton, IN","Greenwood, IN","Camby, IN","Avon, IN","Brownsburg, IN","Carmel, IN","New Palestine, IN","Plainfield, IN","Whiteland, IN","Fishers, IN","Mccordsville, IN","Zionsville, IN","Mooresville, IN","Fairland, IN","Fountaintown, IN","Pittsboro, IN","Bargersville, IN","Finly, IN","Needham, IN","Westfield, IN","Boggstown, IN","Brooklyn, IN","Fortville, IN","Greenfield, IN","Franklin, IN","Whitestown, IN","Clayton, IN","Danville, IN","Noblesville, IN","Maxwell, IN","Ingalls, IN","Lizton, IN","Monrovia, IN","Amo, IN","Lebanon, IN","Morristown, IN","Sheridan, IN","Shelbyville, IN","North Salem, IN","Cicero, IN","Pendleton, IN","Lapel, IN","Stilesville, IN","Trafalgar, IN","Martinsville, IN","Coatesville, IN","Jamestown, IN","Gwynneville, IN","Morgantown, IN","Arcadia, IN","Wilkinson, IN","Charlottesville, IN","Advance, IN","Edinburgh, IN","Eminence, IN","Atlanta, IN"]}
  ];


  var data_titles = [
    {title:"automotive quality technician (1st Shift)",newtitle:["Automotive Technician"]},
    {title:"automotive quality technician (2nd Shift)",newtitle:["Automotive Technician"]},
    {title:"automotive repair technician (1st Shift)",newtitle:["Automotive Service Technician"]},
    {title:"automotive repair technician (2nd Shift)",newtitle:["Automotive Service Technician"]},
    {title:"auto body prepper (1st shift)",newtitle:["Vehicle prepper","Car detailer"]},
    {title:"auto body prepper (2nd shift)",newtitle:["Vehicle prepper (2nd shift)", "Car detailer (2nd shift)"]},
    {title:"auto body professional (1st shift)",newtitle:["Auto body painter", "Vehicle body professional"]},
    {title:"auto body professional (2nd shift)",newtitle:["Auto body painter (2nd shift)", "Vehicle body professional (2nd shift)"]},
    {title:"auto body sander & buffer (1st shift)",newtitle:["Auto body sander", "Auto body buffer"]},
    {title:"auto body sander & buffer (2nd shift)",newtitle:["Auto body sander (2nd shift)", "Auto body buffer (2nd shift)"]},
    {title:"automotive painter (1st shift)",newtitle:["Auto painter", "Vehicle painter"]},
    {title:"automotive painter (2nd shift)",newtitle:["Auto painter (2nd shift)", "Vehicle painter (2nd shift)"]},
    {title:"car Detailer/ Lot Attendant (1st shift)",newtitle:["Lot Attendant", "Parking lot attendant"]},
    {title:"car Detailer/ Lot Attendant (2nd shift)",newtitle:["Lot Attendant (2nd shift)", "Parking lot attendant (2nd shift)"]},
    {title:"production associate (1st shift)",newtitle:["Car runner", "Auto porter"]},
    {title:"production associate (2nd shift)",newtitle:["Car runner (2nd shift)", "Auto porter (2nd shift)"]},
  ];


  var departments = "";
  var location = "";

  for(var i in jobs){
    if(jobs[i].departments.length > 0){
      departments = jobs[i].departments[0].name.trim();
    }
    if(departments.indexOf("Inspection Center") !== -1){
      if(jobs[i].offices.length > 0) location = jobs[i].offices[0].location;
      else location = jobs[i].location.name.trim();

      var job = {};
      job.title = jobs[i].title.trim();								
      job.url = jobs[i].absolute_url.trim()+"&gh_src=6a11c2491us";
      //job.location = jobs[i].location.name.trim();
      job.location = (location) ? location : "Tempe, Arizona, United States";
      if(job.location.indexOf('Greater Phoenix Area')>-1){
        job.location = "Tempe, Arizona, United States";
      }else if(job.location.indexOf('Multiple Locations Available')>-1){
        job.location = "Tempe, Arizona, United States";
      }
      																																		job.source_empname = "Carvana";
      job.apply_client_jobid = jobs[i].id;
      job.apply_api_endpoint = "https://boards-api.greenhouse.io/v1/boards/carvana/jobs/"+job.apply_client_jobid;
      job.jobdesc = json[i].content;
      job.html =     json[i].content;
      job.html   = cleanHTML(job.html);
      job.jobdesc   = job.html.replace(/<\/?[^>]+(>|$)|&nbsp/g, "").trim();
      /*job.html =     jobs[i].content;
      job.html = removeTextBefore(job.html, 'About Carvana', false);
      job.html = removeTextAfter(job.html, 'About Carvana', true);
      job.html   = cleanHTML(job.html);    
      job.html      = cleanHTML(job.html);
      var tmp       = document.createElement('div');
      tmp.innerHTML = job.html;
      job.jobdesc   = tmp.textContent.trim();*/
      job.temp = 561;
      jobstosend.push(job);    
      //Replica de titulos en los jobs originales
      for(var t in data_titles){
        if(typeof data_titles[t] =="function") continue;
        if(typeof data_titles[t] =="number") continue;
        if(job.title.toLowerCase().indexOf(data_titles[t].title) > -1 ){
          for(var nt in data_titles[t].newtitle){
            if(typeof data_titles[t].newtitle[nt] =="function") continue;
            if(typeof data_titles[t].newtitle[nt] =="number") continue;
            var jobnt = {};
            jobnt.title = data_titles[t].newtitle[nt];
            jobnt.url = job.url;
            jobnt.location = job.location;
            jobnt.source_empname = job.source_empname;
            jobnt.apply_client_jobid = job.apply_client_jobid;
            jobnt.apply_api_endpoint = job.apply_api_endpoint;
            //jobnt.html = job.html;
            //jobnt.jobdesc = job.jobdesc;
            jobnt.temp = job.temp;
            jobstosend.push(jobnt); 
          }
        }
      }
      for(var d in data){
        if(typeof data[d] =="function") continue;
        if(typeof data[d] =="number") continue;
        if(job.location.indexOf(data[d].currentloc) > -1 ){
          for(var nl in data[d].newlocs){
            if(typeof data[d].newlocs[nl] =="function") continue;
            if(typeof data[d].newlocs[nl] =="number") continue;
            var jobnl = {};
            jobnl.title = job.title;
            jobnl.url = job.url;
            jobnl.location = data[d].newlocs[nl]+", United States";
            jobnl.source_empname = job.source_empname;
            jobnl.apply_client_jobid = job.apply_client_jobid;
            jobnl.apply_api_endpoint = job.apply_api_endpoint;
            jobnl.html = job.html;
            jobnl.jobdesc = job.jobdesc;
            jobnl.temp = job.temp;
            jobstosend.push(jobnl); 
            //Replica de titulos en los jobs duplicados
            for(var t in data_titles){
              if(typeof data_titles[t] =="function") continue;
              if(typeof data_titles[t] =="number") continue;
              if(jobnl.title.toLowerCase().indexOf(data_titles[t].title) > -1 ){
                for(var nt in data_titles[t].newtitle){
                  if(typeof data_titles[t].newtitle[nt] =="function") continue;
                  if(typeof data_titles[t].newtitle[nt] =="number") continue;
                  var jobnt = {};
                  jobnt.title = data_titles[t].newtitle[nt];
                  jobnt.url = jobnl.url;
                  jobnt.location = jobnl.location;
                  jobnt.source_empname = jobnl.source_empname;
                  jobnt.apply_client_jobid = jobnl.apply_client_jobid;
                  jobnt.apply_api_endpoint = jobnl.apply_api_endpoint;
                  jobnt.html = jobnl.html;
                  jobnt.jobdesc = jobnl.jobdesc;
                  jobnt.temp = jobnl.temp;
                  jobstosend.push(jobnt); 
                }
              }
            }
          }
        }
      }
    }
  } 
  if(jobs && jobs.length == 0){
    var ghostJob = {title:window.location.href};
    jobstosend.push(ghostJob);
  }
  out["jobs"]= jobstosend;
  return out;
})();
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