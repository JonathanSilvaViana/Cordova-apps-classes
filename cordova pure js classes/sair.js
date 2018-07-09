function sair()
{
    var continuar = console.log('continua execução');

    if(confirm('Deseja sair?') == true)
        {
            navigator.app.exitApp();
        }
    else{
        continuar;
    }

    alert = continuar;
}
