(function() {
  var out = {};

  if(typeof pass_it == "undefined") pass_it = {};
  if(typeof msg == "undefined") msg = function(x){return x;};

  if (!pass_it["urls"]) {
    out["pass_it"] = {
      "jobs": 0,
      "urls": [
        //{title:"Social Media Manager",id:"https://tietalent.com/en/jobs/3146/geneva/social-media-manager#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Social%20Media%20Manager"},
         {title:"Digital Project Manager",id:"https://tietalent.com/en/jobs/3143/chur/digital-project-manager#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Digital%20Project%20Manager"},
         {title:"Java Developer",id:"https://tietalent.com/en/jobs/3133/lausanne/d%C3%A9veloppeur-java/angular#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Developer%20Java%20Angular"},
         {title:"Test Engineer",id:"https://tietalent.com/en/jobs/3124/geneva/test-engineer#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Test%20Engineer"},
         {title:"Senior SAP Consultant",id:"https://tietalent.com/en/jobs/3122/geneva/senior-consultant-sap#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Senior%20Consultant%20Sap"},
         {title:".Net Developer",id:"https://tietalent.com/en/jobs/3104/lausanne/senior-d%C3%A9veloppeur-.net#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Senior%20.Net%20Developer"},
         {title:"Data Engineer",id:"https://tietalent.com/en/jobs/3090/zurich/data-engineer#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Data%20engineer"},
         {title:"Cloud Platform Engineer",id:"https://tietalent.com/en/jobs/3075/zug/cloud-platform-engineer#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Cloud%20Platform%20Engineer"},
         {title:"DevOps Engineer",id:"https://tietalent.com/en/jobs/2929/bern/devops-engineer#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=DevOps%20Engineer"},
         {title:"Frontend Software Engineer",id:"https://tietalent.com/en/jobs/2927/bern/frontend-software-engineer#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Frontend%20Software%20Engineer"},
         {title:"Change Management Consultant",id:"https://tietalent.com/en/jobs/3065/lausanne/consultant(e)-changement-management#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Change%20management%20Consultant"},
         {title:"Subject Matter Expert Google Looker",id:"https://tietalent.com/en/jobs/3052/geneva/subject-matter-expert-google-looker#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Subject%20Matter%20Expert%20Google%20Looker"},
         {title:"Fullstack Software Engineer",id:"https://tietalent.com/en/jobs/3048/zurich/fullstack-software-engineer#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Fullstack%20Software%20Engineer"},
        //Ticket:id= 76428
        //{title:"Digital Project Manager",id:"https://tietalent.com/fr/jobs/3143/chur/digital-project-manager#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Digital%20Project%20Manager"},
        //{title:"Java Developer ",id:"https://tietalent.com/fr/jobs/3133/lausanne/d%C3%A9veloppeur-java/angular#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Developer%20Java%20Angular"},
        //{title:"Test Engineer",id:"https://tietalent.com/fr/jobs/3124/geneva/test-engineer#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Test%20Engineer"},
        //{title:"Senior SAP Consultant",id:"https://tietalent.com/en/jobs/3122/geneva/senior-consultant-sap#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Senior%20Consultant%20Sap"},
        //{title:".Net Developer",id:"https://tietalent.com/fr/jobs/3104/lausanne/senior-d%C3%A9veloppeur-.net#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Senior%20.Net%20Developer"},
        //{title:"Data Engineer",id:"https://tietalent.com/en/jobs/3090/zurich/data-engineer#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Data%20engineer"},
        //{title:"Cloud Platform Engineer",id:"https://tietalent.com/de/jobs/3075/zug/cloud-platform-engineer#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Cloud%20Platform%20Engineer"},
        //{title:"DevOps Engineer ",id:"https://tietalent.com/en/jobs/2929/bern/devops-engineer#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=DevOps%20Engineer"},
        //{title:"Frontend Software Engineer",id:"https://tietalent.com/en/jobs/2927/bern/frontend-software-engineer#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Frontend%20Software%20Engineer"},
        //{title:"Change Management Consultant",id:"https://tietalent.com/fr/jobs/3065/lausanne/consultant(e)-changement-management#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Change%20management%20Consultant"},
        //{title:"Subject Matter Expert Google Looker",id:"https://tietalent.com/en/jobs/3052/geneva/subject-matter-expert-google-looker#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Subject%20Matter%20Expert%20Google%20Looker"},
        //{title:"Fullstack Software Engineer",id:"https://tietalent.com/en/jobs/3048/zurich/fullstack-software-engineer#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Fullstack%20Software%20Engineer"},
        //{title:"Fullstack Junior Developer",id:"https://tietalent.com/fr/jobs/3329/martigny/d%C3%A9veloppeur(se)-junior--fullstack-#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Junior%20Developeur%20Fullstack"},
        //{title:"Software Engineer",id:"https://tietalent.com/de/jobs/3324/bern/software-engineer#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Software%20Engineer"},
        //{title:"Product Owner Modern Workplace",id:"https://tietalent.com/de/jobs/3317/biel/product-owner-modern-workplace-(m/w/d)#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Product%20Owner%20Modern%20Workplace"},
        //{title:"Private Cloud Engineer",id:"https://tietalent.com/de/jobs/3313/biel/private-cloud-engineer-(m/w/d)#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Private%20cloud%20Engineer"},
        //{title:"Java/ Angular Developer",id:"https://tietalent.com/fr/jobs/3314/geneva/d%C3%A9veloppeur(se)-java/-react#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Java%20Developer"},
        //{title:"Modern Workplace Engineer",id:"https://tietalent.com/de/jobs/3306/biel/modern-workplace-engineer#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Modern%20Workplace%20Engineer"},
        //{title:"Frontend Developer",id:"https://tietalent.com/en/jobs/3300/remote-work/front-end-developer#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Frontend%20Developer"},
        //{title:"Senior PHP Symfony Developer",id:"https://tietalent.com/en/jobs/3294/zurich/senior-php-symfony-developer#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Senior%20PHP%20Symfony%20Developer"},
        //{title:"Media Marketer",id:"https://tietalent.com/de/jobs/3273/z%C3%BCrich/mediamatiker-(w/m)#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Media%20Marketer"},
        //{title:"Fullstack Developer Java React",id:"https://tietalent.com/de/jobs/3249/z%C3%BCrich/fullstack-developer-java-react#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Fullstack%20Developer%20Java%20React"},
        //{title:"Senior .NET Developer",id:"https://tietalent.com/de/jobs/3213/chur/(senior)-.net-entwickler#utm_source=talentcom&utm_medium=CPC-CH&utm_campaign=Senior%20.NET%20Developer"}

      ],	
      "currentUrl": 0,
    };
  } else {
    out["pass_it"] = pass_it;
  }

  var html_jobs = document.querySelectorAll("#root > div > section");
  var jobs = [];

  for(var x in html_jobs){
    if(typeof html_jobs[x] =="function") continue;
    if(typeof html_jobs[x] =="number") continue;
    var job = {};
    var elem = html_jobs[x];

    job.title = out["pass_it"].urls[out["pass_it"]["currentUrl"]].title;
    job.url = out["pass_it"].urls[out["pass_it"]["currentUrl"]].id;
    msg("!!LINK!!"+job.url)
    if(elem.querySelector('div.sc-bsipQr.fbzSf > div')){
      job.location = elem.querySelector('div.sc-bsipQr.fbzSf > div').textContent.trim();
    }//else if(elem.querySelector("div > p:nth-child(1)")){
    //job.location = elem.querySelector("div > p:nth-child(1)").textContent.trim();
    //}
    // if(job.location.toLowerCase.indexOf("our client is looking")>-1)job.location = "Renens, Vaud";
    if(job.location.toLowerCase().indexOf("our client is looking")>-1){
      var location  = contains('p','Location:',elem).replace(/\·/g,"").trim();
      if(location!=""){
        job.location = location; 
      }else{job.location ="Renens, Vaud";}
    }
    if(job.location.indexOf("St. Gallen")>-1)job.location =job.location.replace("St. Gallen","St.Gallen");
    job.location = job.location.replace(/,Switzerland/gi,", Switzerland");
    var location =job.location;
    if(location.includes(","))location =location.split(",").shift();
    //job.title = job.title+" in "+location;

    var getvalues = job.url+job.location;
    var reqidchfound = getvalues.match(/switzerland|Winterthur|Bern|Zug|Fribourg|Lucern|Basel|St\.Gallen|Lausanne|Zurich/ig);
    if(reqidchfound) job.reqid ="ch";
    var reqiddefound = getvalues.match(/germany|deutschland/ig);
    if(reqiddefound) job.reqid ="de";
    job.temp ="123";

    job.html 		= elem.querySelector("div.sc-ikPAkQ.ceimHt").innerHTML.trim();
    job.jobdesc 	= elem.querySelector("div.sc-ikPAkQ.ceimHt").textContent.trim();

    job.html 		= cleanHTML(job.html);
    job.jobdesc 	= cleanHTML(job.jobdesc);


    //if(job.location.toLowerCase().indexOf("germany") === -1 && job.location.toLowerCase().indexOf("deutschland") === -1)
    jobs.push(job);   

    var auxloc = ["Zurich", "Lausanne", "Geneva", "St.Gallen", "Basel", "Lucern", "Fribourg", "Bern", "Zug"]; 
    for(var e in auxloc){
      var joby = {};
      joby.title = job.title+" in "+ job.location;
      joby.title = joby.title.replace(/,|Switzerland/gi,"");
      joby.location = auxloc[e]+", Switzerland";
      joby.url = job.url;
      joby.reqid = job.reqid;
      joby.temp = job.temp;
      joby.html =job.html;
      joby.jobdesc = job.jobdesc
      jobs.push(joby);

      var data = [
        {title:"Social Media Manager",newtitle:["Digital Communication Manager"]},
        {title:"Digital Project Manager",newtitle:["Digital Marketing Manager"]},
        {title:"Java Developer",newtitle:["Java Software Engineer "]},
        {title:"Senior SAP Consultant",newtitle:["SAP Specialist "]},
        {title:".Net Developer",newtitle:["Senior Developer .Net"]},
        {title:"Cloud Platform Engineer",newtitle:["Cloud Engineer"]},
        {title:"Frontend Software Engineer",newtitle:["Frontend Developer"]},
        {title:"Fullstack Software Engineer",newtitle:["Fullstack Developer"]},
      ];


      for(var d in data){
        if(typeof data[d] =="function") continue;
        if(typeof data[d] =="number") continue;
        if(joby.title.indexOf(data[d].title) > -1 ){
          for(var nl in data[d].newtitle){
            if(typeof data[d].newtitle[nl] =="function") continue;
            if(typeof data[d].newtitle[nl] =="number") continue;
            var jobnt = {};  
            jobnt.title = data[d].newtitle[nl]+" in "+ job.location;
            jobnt.title = jobnt.title.replace(/,|Switzerland/gi,"");
            jobnt.location = joby.location;
            jobnt.url = joby.url;
            jobnt.reqid = joby.reqid;
            jobnt.temp = joby.temp;
            jobnt.html =joby.html;
            jobnt.jobdesc = joby.jobdesc
            jobs.push(jobnt);
          }
        } 
      }

    }
  }
  if(jobs.length === 0){   
    var job_fantasma = Math.random();
    jobs.push(job_fantasma); 
  }
  out["pass_it"]["jobs"] = jobs.length;
  out["jobs"]= jobs;

  return out;
})();



