https://jobs.jobvite.com/von/jobs?__jvst=JobBoard&__jvsd=talent
(function () {
  var out = {};
  var html_jobs = document.querySelectorAll("div.jv-wrapper td.jv-job-list-name");
  var jobs = []; for (var x in html_jobs) {
    if (typeof html_jobs[x] == "function") continue;
    if (typeof html_jobs[x] == "number") continue;
    var job = {};
    var elem = html_jobs[x];

    console.log(elem)
    job.title = elem.querySelector("a").textContent.trim().split('(').shift();
    job.url = elem.querySelector("a").href.trim() +'?__jvst=Job Board&__jvsd=talent';
    job.source_jobtype = elem.parentNode.querySelector(".jv-job-list-type").textContent.trim().split('(').shift();
    job.location = elem.parentNode.querySelector(".jv-job-list-location").textContent.trim();
    job.reqid = elem.parentNode.querySelector(".jv-job-list-req").textContent.split(":")[1].trim();
    job.temp = 202029;

    if (job.location.indexOf("Locations") > -1) {

      var full_html = getDescription(job.url);
      var div = document.createElement("div");
      div.innerHTML = full_html
      var locclean = div.querySelector('p.jv-job-detail-meta').innerHTML.trim().replace('<span class="jv-inline-separator"></span>', '|').split('|').pop();

      var locs = locclean;
      locs = locs.split('<span class="jv-inline-separator"></span>');
      for (l in locs) {
        var jobx = {};
        jobx.title = job.title.split('(').shift();
        jobx.url = job.url;
        jobx.reqid = job.reqid;
        jobx.source_jobtype = job.source_jobtype.split('(').shift();
        jobx.location = locs[l].trim();
        jobx.temp = job.temp;

        if (jobx.location.length > 0 && jobx.location.indexOf("Time")<0 && jobx.location.indexOf("ReqID")<0 && jobx.location.indexOf("Casual")<0 && jobx.location.indexOf("Permanent")<0 && jobx.location.indexOf("Regular")<0 ) {
          jobs.push(jobx);
        }
      }
    } else {
      job.location = job.location;

      jobs.push(job);
    }
  }

  out["jobs"] = jobs;
  return out;
})();


function getDescription(url) {

  var xhrrequest = new XMLHttpRequest();
  xhrrequest.open("GET", url, false); //URL del ajax que trae la información del job

  var response = "";
  xhrrequest.onreadystatechange = function () {
    if (xhrrequest.readyState == 4 && xhrrequest.status == 200) {
      //console.log(xhrrequest.responseText);
      response = xhrrequest.responseText;
    }
  };

  xhrrequest.send();
  return response;
}
