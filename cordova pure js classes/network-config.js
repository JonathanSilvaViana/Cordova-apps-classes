//this classe requires the plugin: cordova-plugin-network-information

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady()
{
    checkConnection();
}

function checkConnection()
{
    var networkState = navigator.network.connection.type;
    
    
    var states = {};
    states[Connection.UNKNOWN]  = 'Conexão desconhecida';
    states[Connection.ETHERNET] = 'Conexão Ethernet';
    states[Connection.WIFI]     = 'Conexão WiFi';
    states[Connection.CELL_2G]  = 'Conexão 2G';
    states[Connection.CELL_3G]  = 'Conexão 3G';
    states[Connection.CELL_4G]  = 'Conexão 4G';
    states[Connection.NONE] = 'Sem rede de dados';
    
    //alert('Connection type: ' + states[networkState]);
    
    document.addEventListener("offline", onOffline, false);
    
    function onOffline()
    {
        //var p404 = "<div><ons-sliding-menu id='world' var='app.slidingMenu' menu-page='menu.html' main-page='404.html' side='left' type='overlay' max-slide-distance='200px'></ons-sliding-menu></div>";
        //alert('Connection type: ' + states[networkState]);
        //document.getElementById('world').innerHTML = p404;
        
        //window.localtion="404/index.html";
        
        var semNet = "Dispositivo sem conexão. Aplicativo encerrado.";
        alert(semNet);
        navigator.app.exitApp();
        
        
    }
    
    document.addEventListener('online', onOnline, false);
    
    function onOnline()
    
    {
        console.log("dispositivo está online");
    }
    
    
}
//https://stackoverflow.com/questions/10009596/alert-box-when-no-internet-connection-phonegap


