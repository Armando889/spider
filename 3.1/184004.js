https://nostalentsnosemplois.auvergnerhonealpes.fr/jobsearch/offers?_industries_=16%2C3%2C12%2C14%2C24%2C17%2C42%2C11%2C22

/* Before */
(function() {
  var out = {};
  out.waitFor = "article.mj-offer"
  return out;
})();

/*Extract */

(function() {
  var out = {};
  var html_jobs = document.querySelectorAll("article.mj-offer");
  var jobs = [];
  for(var x in html_jobs){
    if(typeof html_jobs[x] =="function") continue;
    if(typeof html_jobs[x] =="number") continue;
    var job = {};
    var elem = html_jobs[x];

    if(elem.querySelector("a.block-link")){
      if(elem.querySelector("h2.title")){
        job.title = elem.querySelector("h2.title").textContent.trim();
      }  
      job.url = elem.querySelector("a.block-link").href.trim();
      job.location = elem.querySelector("div.header-data.logoPresent > div.info > ul > li:last-of-type > h3").textContent.trim()+", FR";
      if(elem.querySelector("header > div.logo > span > span > img")){
        job.logo = "https://nostalentsnosemplois.auvergnerhonealpes.fr"+elem.querySelector("header > div.logo > span > span > img").getAttribute("src").trim();
        job.source_empname = elem.querySelector("header > div.logo > span > span > img").getAttribute("alt").trim();
      }
      job.source_jobtype = elem.querySelector("div.header-data.logoPresent > div.info > ul > li:nth-child(1)").textContent.trim();
      job.temp = 1;
      jobs.push(job);
    } 
  }

  out["jobs"]= jobs;
  return out;
})();

/* Pagination */

(function () {
  var out = {};
  var selector = ".pagination-pages li a";  // selector donde esta la paginacion

  if (typeof pass_it == "undefined") pass_it = {};

  if (!pass_it["cont"]) {
    out["pass_it"] = {
      "cont": 1
    };
  } else {
    out["pass_it"] = pass_it;
  }

  out["has_next_page"] = false;
  out["pass_it"].cont += 1;

  var all_elems = document.querySelectorAll(selector);
  [].forEach.call(all_elems, function(elemento){
    if(elemento.textContent.trim() == out["pass_it"].cont){                
      //msg("click!!!!!"+elemento.textContent.trim());
      elemento.click();
      out["has_next_page"] = true;
    }
  });  

  out.waitFor = '.mj-offer';
  return out;
})();

/* Jobdata */

(function() {
  var out = {};
  var job = {};
  var selector = ".mj-offer-details";
  var remove_selectors = [];
  //var job = pass_it["job"];
  var full_html = document.querySelector(selector);
  // remove something from the jobdatata
  if (remove_selectors.length > 0) remove_selectors.forEach(remove_selector => {if(full_html.querySelector(remove_selector)) full_html.querySelector(remove_selector).remove();});
  if (typeof cleanHTML == "undefined") cleanHTML = function(x){return x};
  if (typeof msg == "undefined") msg = console.log;

  job.html      = full_html.innerHTML.trim();    
  job.html = removeTextBefore(job.html, "L'entreprise :", false);
  //job.html = removeTextAfter(job.html, 'Application Instructions', true);
  job.html =  job.html.split("Créez votre").shift();
  job.html      = cleanHTML(job.html);
  var tmp       = document.createElement('div');
  tmp.innerHTML = job.html;
  job.jobdesc   = tmp.textContent.trim();
  job.jobdesc   = cleanHTML(job.jobdesc);
  
  if(job.html.indexOf("Référence") !== -1){
    job.reqid = job.html.split("Référence :").pop();
  }
  
  out["job"] = job;
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