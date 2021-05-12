boo.start();
var h = "";
var t = "";
//---------------------------Función para abrir el jobsiteurl------------------------------------------------------------------

boo.then(function() {
  boo.open(boo.out.url);
  boo.pushThen(['wait-for-page-load']);
}, "go-to-page");

//--------------------------Función para esperar por la informacion de la página---------------------------------------------------------

//funcion para esperar por la informacion de la pagina
boo.saveThen(function() {
  //Se debe obtener el key h y t que permiten accesar al Json
  boo.waitForSelector('form#JBSearchList_form', function success( ){
    var keys = boo.getHTML();
    h = $("form#JBSearchList_form", keys).find('input[name="h"]').attr("value");
    boo.msg('[Y]H: '+h);
    t = $("form#JBSearchList_form", keys).find('input[name="t"]').attr("value");
    boo.msg('[I]T: '+t);
    boo.msg('[I]Pagina cargada');
    boo.pushThen(['get-json']);
  },function fail(){
    boo.msg('[W]La pagina no cargó');
  },5000);
},"wait-for-page-load");


//---------------------------------------------------------------------------------------------

boo.saveThen(function() {  
   var link = "https://jobs.luttrellstaffing.com/json/index.smpl?arg=list_posts&pp=1000&pid=gwt&h="+h+"&t="+t+"&first=0";
    boo.open(link);
  
  boo.waitForText('ResultSet', function success( ){
    boo.pushThen(['extract']);
    boo.msg('[I]Pagina cargada');
  },function fail(){
    boo.msg('[W]La pagina no cargó');
  },5000);
    
    
},"get-json");

var jobs_to_send = [];

//Funcion para extraer los jobs
boo.saveThen(function() {
  json = JSON.parse(this.getPageContent());

  //Echo # of page and add +1 to current page counter
  boo.msg("Starting page: "+(++boo.out.numpage));

  //create page object -- pagejobs => array , have_next_page => false , nextpage => currentpage +1
  page = {pagejobs:[], have_next_page: false, nextpage: boo.out.numpage + 1};

  if(json.ResultSet){
    var jobs = json.ResultSet.list;

    /*extract-start*/
    //var remap = {};
    boo.msg('Total jobs: '+jobs.length);
    for(var i in jobs){
      var job = {};
      job.title = jobs[i].POST_TITLE;

      var city = jobs[i].POST_CITY;
      var state = jobs[i].POST_STATE;
      var country = jobs[i].POST_COUNTRY;
      var loc = "";
      var array_loc = Array();

      if(city) array_loc.push(city);
      if(state) array_loc.push(state);
      if(country) array_loc.push(country);

      if(array_loc.length) loc = array_loc.join(", ");
      job.location = (loc.trim()) ? loc.trim() : "US";
      // job.logo = "http://www.reed.co.uk/resources/cms/images/logos/thumbs/"+jobs[i].LogoImage;
      job.url = "https://jobs.luttrellstaffing.com/jb/" + jobs[i].POST_ID;
      job.source_salary = jobs[i].POST_PAYRATE;
      job.source_jobtype = jobs[i].POST_EMPLOYMENT_TYPE;
      job.temp = 78345;
      job.html = jobs[i].POST_DESCRIPTION;

      if (typeof(job.html)=="undefined"){
        job.html= "";
      }
      job.html = boo.cleanHTML(job.html);

      job.jobdesc="<div>"+job.html+"</div>";
      
      jobs_to_send.push(job);
    }/*loop-end*/
    /*extract-end*/
  }

  //Echo # of jobs found
  boo.msg("Jobs found: "+jobs_to_send.length);
  //boo.msg("Jobs found: "+page.pagejobs.length);
  //Send jobs to Ghost Process
  //boo.send_jobs(page.pagejobs);	

  //	boo.pushThen(['have-next-page']);
  boo.pushThen(['get-jobdata']);
}, "extract");

boo.saveThen(function() {
  var have_next_page = false;

  /* Si existe el elemento
	if($("", html).length > 0){
		have_next_page = true;    
    } 
    */

  /* Paginación por números
    $("", html).each(function(){
        if($(this).text().trim() == page.nextpage){
            have_next_page = true;
        }
    });
	*/

  if(have_next_page) boo.pushThen(['go-to-next-page']);
}, "have-next-page"); 

boo.saveThen(function() {
  /*Haciendo click en un elemento
	boo.clickSelector('');
	boo.pushThen(['wait-for-page-load']);
	*/

  /* Abriendo un link en la página
	boo.multilink_set({urls:[""]});
	boo.multilink_open('wait-for-page-load');
	*/
}, "go-to-next-page");

boo.saveThen(function() {
      boo.each(jobs_to_send, function(self, job) {
        boo.thenOpen(job.url, function() {
          boo.waitForSelector("div.hmg-jb-panel-body", 
          function success(){
            boo.msg('[I] Revisando jobdata');

            var htmlDetail = this.takeHTML();

            job.html = $(htmlDetail).find("div.hmg-jb-panel-body").html();
                        
            if($('div#recruiter-bio-box a:contains(@)', htmlDetail).length > 0)
              job.source_apply_email = $('div#recruiter-bio-box a:contains(@)', htmlDetail).text();
            else{
              if(job.title=="Quality Technician" && job.location.toUpperCase().indexOf("CLINTON, TN") !== -1){
                job.source_apply_email = "krains@lstaff.com";
              }
              else if(job.title=="Machine Operator | Production" && job.location.toUpperCase().indexOf("MARYVILLE, TN") !== -1){
                job.source_apply_email = "krains@lstaff.com";
              }
              else if(job.title=="Recycling Coordinator" && job.location.toUpperCase().indexOf("MARYVILLE, TN") !== -1){
                job.source_apply_email = "krains@lstaff.com";
              }
              else if(job.title=="Material Handler" && job.location.toUpperCase().indexOf("ROANOKE, VA") !== -1){
                job.source_apply_email = "redwards@lstaff.com";
              }
              else if(job.title=="Machine Operator" && job.location.toUpperCase().indexOf("SALEM, VA") !== -1){
                job.source_apply_email = "redwards@lstaff.com";
              }
              else if(job.title=="Maintenance Technician" && job.location.toUpperCase().indexOf("SALEM, VA") !== -1){
                job.source_apply_email = "redwards@lstaff.com";
              }
              else if(job.title=="Mechanical Assembler | Manufacturing" && job.location.toUpperCase().indexOf("ROANOKE, VA") !== -1){
                job.source_apply_email = "redwards@lstaff.com";
              }
              else if(job.title=="Maintenance Electronic Technician" && job.location.toUpperCase().indexOf("SALEM, VA") !== -1){
                job.source_apply_email = "redwards@lstaff.com";
              }
              else if(job.title=="Extruder Operator | Machine Operator" && job.location.toUpperCase().indexOf("ROANOKE, VA") !== -1){
                job.source_apply_email = "redwards@lstaff.com";
              }  
              else if(job.title=="Assembly | Production" && job.location.toUpperCase().indexOf("ROANOKE, VA") !== -1){
                job.source_apply_email = "redwards@lstaff.com";
              } 
              else if(job.title=="Industrial Painter" && job.location.toUpperCase().indexOf("ROANOKE, VA") !== -1){
                job.source_apply_email = "redwards@lstaff.com";
              } 
              else if(job.title=="Welding" && job.location.toUpperCase().indexOf("ROANOKE, VA") !== -1){
                job.source_apply_email = "redwards@lstaff.com";
              }  
              else if(job.title=="Accounting Associate" && job.location.toUpperCase().indexOf("KNOXVILLE") !== -1){
                job.source_apply_email = "krains@lstaff.com";
              }    
              else if(job.title=="CAD Detailer | Structural Detailer" && job.location.toUpperCase().indexOf("KNOXVILLE") !== -1){
                job.source_apply_email = "krains@lstaff.com";
              }    
              else if(job.title=="Store Associate | Clerk" && job.location.toUpperCase().indexOf("DANDRIDGE") !== -1){
                job.source_apply_email = "cshoemaker@lstaff.com";
              }    
              else if(job.title=="Machine Operator | Manufacturing" && job.location.toUpperCase().indexOf("SALEM") !== -1){
                job.source_apply_email = "redwards@lstaff.com";
              }            
            }
            
            boo.msg('[Y]TITLE: '+job.title+' EMAIL: '+job.source_apply_email);  

            job.html = boo.cleanHTML(job.html);
            job.jobdesc = $("<div>"+job.html+"</div>").text();
            boo.send_jobs([job]);
            //boo.msg('[Y] Entre success' + status);
            //boo.msg('[w] Url: ' + job.url);
          },
          function fail(){
          },15000);
        });
      });
}, "get-jobdata"); 

boo.run();


//////////////////////////////

var bridge = 'http://qa.neuvoo.com/service/get_fgc.php?url=';

boo.start(boo.out.url);

boo.then(function(){
  boo.waitForSelectorTextChange('div[aria-labelledby="job-desc-heading"]', 
                                function success(){
                 boo.msg('[I]iFrame Loaded!');
  },
                                function fail(){
  },3000);
}, '');

boo.then(function(){
  boo.waitForSelector('div', function success() {
    //lets take the html of the current page
    var html = this.takeHTML();
    /*_____________________________________________________________________________________________________*/

    var job = {};

    /*job-data-start*/

    html = $("<div>"+html+"</div>").find("img").remove().end().html();
    html = $("<div>"+html+"</div>").find("div.alert").remove().end().html();
    if($('a[title="click to email"]', html).length > 0)
      job.source_apply_email = $('a[title="click to email"]', html).text();
    html = $("<div>"+html+"</div>").find("a").remove().end().html();

    /*_____________________________________________________________________________________________________*/

    job.html = $('div[aria-labelledby="job-desc-heading"]', html).html();//.replace(/<\/div>/g,"<br />");
    if (typeof job.html == 'undefined') 
      job.html = "";

    //
    job.html = job.html.split("Please apply").shift();
    job.html = job.html.split("Interested?").shift();
    job.html = job.html.split("*For more information").shift();
    job.html = job.html.split("For more information").shift();
    /*_____________________________________________________________________________________________________*/

    job.html = boo.cleanHTML(job.html);

    /*_____________________________________________________________________________________________________*/


    
    if (job.html.indexOf('https') > -1) {   job.html = job.html.replace(/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?/gi,"");}
    if (job.html.indexOf('http') > -1) {   job.html = job.html.replace(/(http?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?/gi,"");}
    if (job.html.indexOf('HTTPS') > -1) {   job.html = job.html.replace(/(HTTPS?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?/gi,"");}
    if (job.html.indexOf('HTTP') > -1) {   job.html = job.html.replace(/(HTTP?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?/gi,"");}



    /*_____________________________________________________________________________________________________*/

    if(job.html.length<200)
      job.html="";
    /*job-data-end*/

    //Send data...
    this.updateJob(job);
  },function error() {
  }, 40000);
});
boo.run();