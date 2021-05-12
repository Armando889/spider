(function() {
  var out = {};
  var html_jobs = document.querySelectorAll("div.jl");
  var jobs = [];
  for(var x in html_jobs){
    if(typeof html_jobs[x] =="function") continue;
    if(typeof html_jobs[x] =="number") continue;
    var job = {};
    var elem = html_jobs[x];
    job.title = elem.querySelector("a.title").textContent.trim();
    //auxtitle.push(job.title);
    job.url = elem.querySelector("a.title").href.trim();
    job.location = elem.querySelector("div.jc").textContent.trim();
    //job.dateposted_raw = elem.querySelector("").textContent.trim();
    //job.logo = elem.querySelector("").getAttribute("src").trim();
    //job.source_apply_email = elem.querySelector("").textContent.trim();
    job.source_empname = elem.querySelector("span.company").textContent.trim();
    //job.source_jobtype = elem.querySelector("").textContent.trim();
    //job.source_salary = elem.querySelector("").textContent.trim();
    job.temp = 9763;

    /*var loc= ["Cicero (IL)","Oak Park (IL)","Berwyn (IL)","Forest Park (IL)","Elmwood Park (IL)","River Forest (IL)","Bedford Park (IL)","Lincolnwood (IL)","Hines (IL)","Riverside (IL)","Lyons (IL)","Maywood (IL)","Hometown (IL)","Evergreen Park (IL)","River Grove (IL)","Harwood Heights (IL)","Burbank (IL)","Brookfield (IL)","Broadview (IL)","Summit Argo (IL)","Evanston (IL)","La Grange Park (IL)"
              ,"Bellwood (IL)","Skokie (IL)","Stone Park (IL)","Bridgeview (IL)","Oak Lawn (IL)","La Grange (IL)","Westchester (IL)","Schiller Park (IL)"
              ,"Justice (IL)","Franklin Park (IL)","Melrose Park (IL)","Morton Grove (IL)","Chicago Ridge (IL)","Hillside (IL)","Niles (IL)","Berkeley (IL)"
              ,"Hickory Hills (IL)","Park Ridge (IL)","Wilmette (IL)","Golf (IL)","Western Springs (IL)","Alsip (IL)","Riverdale (IL)","Whiting (IN)"
              ,"Kenilworth (IL)","Worth (IL)","Blue Island (IL)","Palos Hills (IL)","Chicago (IL)","Elmhurst (IL)","Des Plaines (IL)","Crestwood (IL)"
              ,"Robbins (IL)","Hinsdale (IL)","Willow Springs (IL)","Oak Brook (IL)","Dolton (IL)","Palos Heights (IL)","Posen (IL)","Winnetka (IL)"
              ,"Hammond (IN)","Bensenville (IL)","Midlothian (IL)","Villa Park (IL)","East Chicago (IN)","Clarendon Hills (IL)","Willowbrook (IL)"
              ,"Harvey (IL)","Calumet City (IL)","Techny (IL)","Glenview (IL)","Westmont (IL)","Palos Park (IL)","Markham (IL)","South Holland (IL)"
              ,"Glencoe (IL)","Wood Dale (IL)","Oak Forest (IL)","Fox Valley (IL)","Mount Prospect (IL)","Northbrook (IL)","Lombard (IL)","Addison (IL)"
              ,"Darien (IL)","Elk Grove Village (IL)","Itasca (IL)","Downers Grove (IL)","Hazel Crest (IL)","Thornton (IL)","Lansing (IL)","Gary (IN)",
              "Prospect Heights (IL)","Homewood (IL)","Arlington Heights (IL)","Country Club Hills (IL)","Glen Ellyn (IL)","Lemont (IL)","Wheeling (IL)",
              "Glenwood (IL)","Medinah (IL)","Orland Park (IL)","Munster (IN)","Glendale Heights (IL)","Flossmoor (IL)","Highland Park (IL)","Woodridge (IL)",
              "Tinley Park (IL)","Merrillville (IN)","Highland (IN)","Lisle (IL)","Deerfield (IL)","Bloomingdale (IL)","Highwood (IL)","Fort Sheridan (IL)",
              "Rolling Meadows (IL)","Olympia Fields (IL)","Roselle (IL)","Chicago Heights (IL)","Wheaton (IL)","Homer Glen (IL)","Buffalo Grove (IL)",
              "Griffith (IN)","Lincolnshire (IL)","Matteson (IL)","Schaumburg (IL)","Mokena (IL)","Winfield (IL)","Palatine (IL)","Hanover Park (IL)","Steger (IL)",
              "University Park (IL)","Lake Station (IN)","Richton Park (IL)","Lake Forest (IL)","Schererville (IN)","Park Forest (IL)","Lockport (IL)",
              "Dyer (IN)","Romeoville (IL)","Frankfort (IL)","Warrenville (IL)","Bolingbrook (IL)","West Chicago (IL)","Streamwood (IL)","Vernon Hills (IL)",
              "Portage (IN)","Saint John (IN)","Bartlett (IL)","New Lenox (IL)","Crete (IL)","Hoffman Estates (IL)","Lake Bluff (IL)","Lake Zurich (IL)",
              "Hobart (IN)","Naperville (IL)","Great Lakes (IL)","Springfield (IL)","Eola (IL)","Libertyville (IL)","Monee (IL)","Crest Hill (IL)","Wayne (IL)",
              "North Chicago (IL)","Barrington (IL)","Crown Point (IN)","Wheeler (IN)","Mundelein (IL)","Chesterton (IN)","Carol Stream (IL)","Cedar Lake (IN)",
              "Beverly Shores (IN)","Beecher (IL)","South Elgin (IL)","Geneva (IL)","Mooseheart (IL)","Batavia (IL)","Valparaiso (IN)","North Aurora (IL)",
              "Fox River Grove (IL)","Manhattan (IL)","Wauconda (IL)","Plainfield (IL)","Dundee (IL)","Gurnee (IL)","Grayslake (IL)","Carpentersville (IL)",
              "Joliet (IL)","Waukegan (IL)","Peotone (IL)","Elwood (IL)","Montgomery (IL)","Oswego (IL)","Aurora (IL)","Cary (IL)","Shorewood (IL)",
              "Saint Charles (IL)","Leroy (IN)","Wasco (IL)","Algonquin (IL)","Lafox (IL)","Michigan City (IN)","Island Lake (IL)","Round Lake (IL)","Zion (IL)",
              "Elgin (IL)","Wadsworth (IL)","Gilberts (IL)","Channahon (IL)","Lake Villa (IL)","Winthrop Harbor (IL)","Westville (IN)","Bristol (IL)",
              "Ingleside (IL)","Lake In The Hills (IL)","Grant Park (IL)","Crystal Lake (IL)","Sugar Grove (IL)","Boone Grove (IN)","Minooka (IL)",
              "Lowell (IN)","Elburn (IL)","Russell (IL)","Fox Lake (IL)","Manteno (IL)","New Buffalo (MI)","Yorkville (IL)","Kaneville (IL)","Antioch (IL)",
              "Wilmington (IL)","Mchenry (IL)","Huntley (IL)","Pleasant Prairie (WI)","Hampshire (IL)","Union Pier (MI)","Big Rock (IL)","Kenosha (WI)",
              "Plano (IL)","Maple Park (IL)","Schneider (IN)","Bourbonnais (IL)","La Porte (IN)","Burlington (IL)","Lakeside (MI)","Shelby (IN)",
              "Sumava Resorts (IN)"];*/
    
    
  /*   comentado
  
  let loc = ["Cicero, IL", "Oak Park, IL", "Berwyn, IL", "Forest Park, IL", "Elmwood Park, IL", "River Forest, IL", "Bedford Park, IL", "Lincolnwood, IL", "Hines, IL", 
               "Riverside, IL", "Lyons, IL", "Maywood, IL", "Hometown, IL", "Evergreen Park, IL", "River Grove, IL", "Harwood Heights, IL", "Burbank, IL", "Brookfield, IL", 
               "Broadview, IL", "Summit Argo, IL", "Evanston, IL", "La Grange Park, IL", "Bellwood, IL", "Skokie, IL", "Stone Park, IL", "Bridgeview, IL", "Oak Lawn, IL", 
               "La Grange, IL", "Westchester, IL", "Schiller Park, IL", "Justice, IL", "Franklin Park, IL", "Melrose Park, IL", "Morton Grove, IL", "Chicago Ridge, IL", 
               "Hillside, IL", "Niles, IL", "Berkeley, IL", "Hickory Hills, IL", "Park Ridge, IL", "Wilmette, IL","Naperville, IL","Aurora, IL"];

*/
    let loc = ["chicago, IL ","naperville IL ","aurora IL ","schaumbrg IL ","evanston IL ","glenview IL ","palatine IL ","tinley park IL ","oak lawn IL ","Arlington Heights IL "];

    var urltoinclude = /4601/g;
    var urlfound = job.url.match(urltoinclude);
    if(urlfound){
      let titles=["MORTGAGE LOAN OFFICER"];
      titles.push(job.title);
      for(let i in titles){
        for(var lu in loc){
          var jobx = {};
          jobx.title = titles[i];
          jobx.url = job.url;
          jobx.location = loc[lu]+", US";
          jobx.source_empname =job.source_empname;
          jobx.temp = job.temp;
          if(jobx.title.toUpperCase().indexOf("LOAN OFFICER") !== -1){
            //jobx.title = "MORTGAGE "+jobx.title;
            jobs.push(jobx);
          }  
          if(jobx.title ==="Loan Officer"){
          var joby = {...jobx};
            joby.title ="Licensed Loan Officer";
            jobs.push(joby);
          }

        }
      }
      /*if(job.title.indexOf("Loan Officer") !== -1){
        jobs.push(job);
      } */ 
    }

  } 
if(jobs.length===0){
	let jobs_fantasma={title:pass_it.page};
	jobs.push(jobs_fantasma);
}

  out["jobs"]= jobs;
  return out;
})();