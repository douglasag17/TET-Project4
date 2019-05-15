$(function() {
    var $h1 = $("h1");
    var $latitude = $("input[name='title']");
    var $longitude= $("input[name='description']");
    var btnLocation = $("input[name='btnLocation']");
    var btndetener = $("input[name='btnDetener']");
    var myVar;
    var latAnt;
    var lonAnt;
    var posicion="[]".toString();

    btnLocation.on('click',llamar);
    btndetener.on('click',myStopFunction);
    function llamar(){
        myVar = setInterval(obtener, 5000);
    }
    function myStopFunction() {
        clearInterval(myVar);
      }
    function obtener() {
        geoconfig = {
        enableHighAccuracy:true,
        timeout:10000,
        maximunAge:60000
        };
        navigator.geolocation.getCurrentPosition(//watchPosition
        mostrar, errores, geoconfig
        );
    }

    function mostrar(position) {
        num1=position.coords.latitude;
        num2=position.coords.longitude;
        if(num1!=latAnt&&num2!=lonAnt){
            latAnt=position.coords.latitude;
            lonAnt=position.coords.longitude;
            posicion=posicion.substring(0,posicion.length-1)+",["+num1+","+num2+"]]";
            $longitude.val(posicion);
        }
        
    }

    function errores(error) {// este objeto tine dos atributos: error y message
        alert('Error: '+error.code + ' '+error.message);
    }
});  