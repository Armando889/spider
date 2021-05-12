(function() {
  var out = {};
  var jobs = [];

  var data = [
    {title:["Hardware and Software Engineer"],id:"https://tietalent.com/en/jobs/3140/balingen/hardware-and-software-engineer---embedded-systems#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=Hardware%20and%20Software%20Engineer", locs:["Karlsruhe","Mannheim","Freiburg im Breisgau","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},
    {title:["Online Marketing Manager", "Digital Marketing Manager"],id:"https://tietalent.com/en/jobs/3132/berlin/online-marketing-manager-(crm)#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=Online%20Marketing%20Manager", locs:["Karlsruhe","Mannheim","Freiburg im Breisgau","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},
    {title:["Quality Assuance Manager"],id:"https://tietalent.com/en/jobs/3129/ravensburg/quality-assurance-manager---engineering#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=Quality%20Assurance%20Manager", locs:["Braunschweig","Hamburg","bremen","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},
    {title:["SAP ERP Sales Architect"],id:"https://tietalent.com/en/jobs/3060/mannheim/sap-erp-sales-architect#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=SAP%20ERP%20Sales%20Architect ", locs:["Karlsruhe","Mannheim","Freiburg im Breisgau","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},
    {title:["Senior Consultant Digital Analytics", "Senior Analytics Specialist"],id:"https://tietalent.com/en/jobs/3002/berlin,-stuttgart/(senior)-consultant-digital-analytics#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=Senior%20Consultant%20Digital%20Analytics ", locs:["Karlsruhe","Mannheim","Freiburg im Breisgau","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},
    {title:["Microsoft Dynamics Consultant", "Microsoft Dynamics Specialist "],id:"https://tietalent.com/en/jobs/2982/stuttgart/microsoft-dynamics-berater#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=Microsoft%20Dynamics%20Berater ", locs:["Karlsruhe","Mannheim","Freiburg im Breisgau","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},
    {title:["Software Developer", "Backend Developer"],id:"https://tietalent.com/en/jobs/2962/berlin/software-developer-(backend/infrastructure)#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=Software%20Developer%20backend", locs:["Karlsruhe","Mannheim","Freiburg im Breisgau","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},
    {title:["Consultant SAP IS "],id:"https://tietalent.com/en/jobs/2959/munich/consultant-sap-is-u#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=Consultant%20SAP%20-%20is%20-%20u", locs:["Munich","Augsburg","Regensburg","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},
    {title:["IT Data Manager"],id:"https://tietalent.com/en/jobs/2951/bielefield/it-data-manager#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=IT%20Data%20Manager", locs:["Hannover","Hamburg","bremen","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},
    {title:["IT Consultant HR"],id:"https://tietalent.com/en/jobs/2885/munich/it--consultant-(hr)#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=IT%20Consultant ", locs:["Karlsruhe","Stuttgart","Freiburg im Breisgau","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},
    {title:["VoIP Tk Administrator"],id:"https://tietalent.com/en/jobs/2883/dre%C3%9Fden/voip--und-tk-administrator#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=VoIP%20Tk%20Administrator", locs:["Munich","Köln","Frankfurt","Stuttgart","Düsseldorf","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},
    {title:["IT SystemAdministrator"],id:"https://tietalent.com/en/jobs/2876/dre%C3%9Fden/it-systemadministrator#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=IT%20SystemAdministrator", locs:["Karlsruhe","Stuttgart","Mannheim","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},
    {title:["Junior Frontend Developer", " Junior Frontend Engineer"],id:"https://tietalent.com/en/jobs/2620/duisburg/junior-frontend-developer#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=Junior%20Fronted%20Developer", locs:["Karlsruhe","Stuttgart","Mannheim","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},    {title:[".NET Sofware Developer"],id:"https://tietalent.com/en/jobs/2868/frankfurt/.net-software-developer#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=.NET%20Software%20Developer", locs:["Braunschweig","Hamburg","bremen","Cologne","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},
    {title:["Fullstack Developer", "Fullstack Engineer"],id:"https://tietalent.com/en/jobs/2873/frankfurt/fullstack-developer-javascript/java#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=Fullstack%20Developer%20Javascript", locs:["Cologne","Dusseldorf","Dortmund","essen","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},
    {title:["Cloud DevOps Engineer"],id:"https://tietalent.com/en/jobs/2866/frankfurt/cloud-devops-engineer#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=Cloud%20Devops%20Developer", locs:["Braunschweig","Hamburg","bremen","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},
    {title:["Java Software Entwickler", "Java Software Engineer"],id:"https://tietalent.com/en/jobs/2603/hannover/java-software-entwickler#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=Java%20Software%20Entwickler ", locs:["Karlsruhe","Stuttgart","Freiburg im Breisgau","mannheim","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},
    {title:["Oracle Applications Developer"],id:"https://tietalent.com/en/jobs/2586/stuttgart/oracle-applications-developer#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=Oracle%20Applications%20Developer", locs:["Braunschweig","Hannover","bremen","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},
    {title:["C++ Software Entwickler"],id:"https://tietalent.com/en/jobs/2584/hamburg/c++/c#-softwareentwickler&utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=C%2B%2B%20Software%20Developer ", locs:["Braunschweig","Hannover","bremen","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},
    {title:["IT Administrator"],id:"https://tietalent.com/en/jobs/2582/hamburg/it-administrator#utm_source=talentcom&utm_medium=CPC-DE&utm_campaign=IT%20Administrator", locs:["Karlsruhe","Mannheim","Freiburg im Breisgau","Berlin","Hamburg","Munich (München)","Cologne (Köln)","Frankfurt am Main","Stuttgart","Düsseldorf","Dortmund","Essen","Leipzig","Münster","Bremen","Wiesbaden"]},

  ];

  // $(jobsSelector).each(function( index ) {
  for(var x in data){

    var job = {};
    //job.title = data[x].title;
    job.url = data[x].id; 
    /*var full_html = getDescription(job.url);
    job.html = $("#root > div > section > div.sc-ikPAkQ.ceimHt", full_html).html();
    //job.html = $("<div>"+job.html+"</div>").find("div > p:nth-child(1)").remove().end().html();
    if (typeof(job.html)=="undefined"){
      job.html= "";
    }
    job.html = cleanHTML(job.html);

    job.jobdesc = $("<div>"+job.html+"</div>").text();*/
    //var location = $("div.sc-bsipQr.fbzSf > div", full_html).text().trim();

    job.temp = 123;

    //jobs.push(job);


    for(var nl in data[x].title){
      for(var lus in data[x].locs){
        var jobpar = {};
        jobpar.title = data[x].title[nl];
        jobpar.url = job.url;
        jobpar.location = data[x].locs[lus]+", DE";
        //jobpar.html = job.html;
        //jobpar.jobdesc = job.jobdesc;
        jobpar.temp = job.temp;
        jobs.push(jobpar);

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
