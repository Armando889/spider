https://backoffice.hrweb.it/it/feed/neuvoo/careersite/organico

$multi_jobs = array();
$url = trim((String) $j->url);

$city = trim((string) $j->luogo->regioni->regione);
$state = trim((string) $j->luogo->province->provincia);
$country = "IT";

$arrloc=array();
if($city) $arrloc[] = $city;
if($state) $arrloc[] = $state;
if($country) $arrloc[] = $country;
$loc = implode(", ", $arrloc);

if(strpos($url, 'http://generali.hrweb.it')!==false && strpos(strtoupper($loc), "TRIESTE")!==false){
  $job=array();
  $job['temp']=1;
  $job['title'] = (String) $j->titolo;
  $job['html']  = (String) $j->descrizione;
  $job['jobdesc'] = strip_tags($job["html"]);
  $job['location'] = $loc;
  $job['source_city'] = $city;
  $job['source_state'] = $state;
  $job['source_country'] = $country;
  $job['reqid'] = (String) $j->id;
  $job['client_tag'] = (String) $j->funzioni->funzione;
  $job['url'] = (String) $j->url;
  $job['source_empname'] = (String) $j->azienda;
  $multi_jobs[] = $job;

  $array_locations = array("Friuli Venezia Giulia, Trieste, IT" => array(" Muggia, 34015 UTI Giuliana, Italy",
                                                                         " Monfalcone, 34074 Province of Gorizia, Italy",
                                                                         " Gorizia, 34170 Province of Gorizia, Italy",
                                                                         " Sistiana, 34011 UTI Giuliana, Italy",
                                                                         " Sežana, 6210, Slovenia",
                                                                         " Basovizza, 34149 UTI Giuliana, Italy",
                                                                         " Koper, 6000, Slovenia"));


  foreach($array_locations as $key => $locations){
    //Validamos si el departamento ($key en el arreglo) existe en el location para proceder a replicar
    if(strpos($loc, $key)!==false){
      //Se replica tantas veces existan ciudades en el arreglo
      foreach($locations as $location){
        $jobx=array();
        $jobx['title'] = $job['title'];
        $jobx['html'] = $job['html'];
        $jobx['jobdesc'] = $job['jobdesc'];
        $jobx['location'] = trim($location);
        $jobx['url'] = $job['url'];
        $jobx['source_empname'] = $job['source_empname'];
        $jobx['source_city'] = $job['source_city'];
        $jobx['source_state'] =   $job['source_state'];
        $jobx['source_country'] = $job['source_country'];
        $jobx['reqid'] = $job['reqid'];
        $jobx['client_tag'] = $job['client_tag'];
        $jobx['temp'] = $job['temp'];
        //print_r($jobx['location']."\n");
        $multi_jobs[] = $jobx;
      }
    }
  }

}

