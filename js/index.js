






//////////////7


var config = {
    apiKey: "AIzaSyDDeEsPxBYxzisg4GDOpmYbHBLvIw6L_IY",
    authDomain: "mejorvargaslleras-4fd2e.firebaseapp.com",
    databaseURL: "https://mejorvargaslleras-4fd2e.firebaseio.com",
    projectId: "mejorvargaslleras-4fd2e",
    storageBucket: "mejorvargaslleras-4fd2e.appspot.com",
    messagingSenderId: "912759721594"
  };
  firebase.initializeApp(config);




var general;
var datof="";
var urlloginok="";

unavesmensaje();


//subirdatos("user","cedula","33311111111");

unavesmensaje2("awebreg");



  firebase.database().ref().child("acontrolweb").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val();
   // alert(cedu+"  ced celu"+celu);
general=mi;// firebase.database().ref().child("user");

/*for (var indice in s) {
	if(s[indice].cedula==c &&  s[indice].whatsapp==cl){

alert("encontrado");
	}
  console.log("ind'" + indice + "'= " + s[indice]);
}
*/console.log("migene "+ general.pass);
 
   // document.getElementById("idcumplimiento").innerHTML = snapshot.val();
  });







traerdatosfirebase("acontrolweb");
unavesmensaje();


var datof="";

function login(){



//var nodo="user";



unavesmensaje();

var vpass=document.getElementById("idpass").value;

var noencontrado=true;

var vnombre=document.getElementById("idnombre").value;







	if(general.pass==vpass &&  general.nombre==vnombre){
     
//alert("encontrado " + urlloginok);

//window.location.assign("https://www.w3schools.com")
//alert(general[indice].pass);
window.location =general.webload;

//location.href = "http://www.webquequeremosver.com"; 
noencontrado=false;
	}
  //console.log("ind'" + indice + "'= " + general[indice]);

if(noencontrado){alert("no se  encontro registro");a}


}








function login2(){
//	unavesmensaje2("webhome");
registrar();
}




var urlregistrar="";
function registrar(){

unavesmensaje2("awebreg");
console.log("unre "+urlregistrar);
window.location=urlregistrar;
alert(urlregistrar);
}




function unavesmensaje()
{

//var c=String(cedu);
//var cl= String(celu);

  firebase.database().ref().child("acontrolweb").once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val();
   // alert(cedu+"  ced celu"+celu);
var s=mi;// firebase.database().ref().child("user");

general=s;
console.log("un "+mi);
/*for (var indice in s) {
	if(s[indice].cedula==c &&  s[indice].whatsapp==cl){

alert("encontrado");
	}
  console.log("ind'" + indice + "'= " + s[indice]);
}
*/
 
   // document.getElementById("idcumplimiento").innerHTML = snapshot.val();
  });


}



function unavesmensaje2(id)
{

//var c=String(cedu);
//var cl= String(celu);

  firebase.database().ref().child(String(id)).once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val();
   // alert(cedu+"  ced celu"+celu);
//var s=mi;// firebase.database().ref().child("user");
urlregistrar=mi;
//general=s;

/*for (var indice in s) {
	if(s[indice].cedula==c &&  s[indice].whatsapp==cl){

alert("encontrado");
	}
  console.log("ind'" + indice + "'= " + s[indice]);
}
*/
 
   // document.getElementById("idcumplimiento").innerHTML = snapshot.val();
  });


}





function traerdatosfirebase(id)
{

//var c=String(cedu);
//var cl= String(celu);

  firebase.database().ref().child(String(id)).once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // ...
    //alert(  snapshot.val());
    mi=snapshot.val();
   datof=mi;

   urlloginok=mi;
   // alert(cedu+"  ced celu"+celu);
//var s=mi;// firebase.database().ref().child("user");
//urlregistrar=mi;
//general=s;

/*for (var indice in s) {
	if(s[indice].cedula==c &&  s[indice].whatsapp==cl){

alert("encontrado");
	}
  console.log("ind'" + indice + "'= " + s[indice]);
}
*/
   //alert(" datof "+datof);

   // document.getElementById("idcumplimiento").innerHTML = snapshot.val();
  });

  // alert(" datof "+datof);
 return datof;
}

