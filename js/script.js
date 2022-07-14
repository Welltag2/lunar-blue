let query = document.querySelector('.query');
        function ejs_code_clavier(keyStroke){
            ejs_code_eventChooser = (!document.all) ? keyStroke.which : event.keyCode;
            if (event.keyCode == 13){if (query.value != "") { let url = 'https://www.google.fr/search?q='+query.value; window.open(url,'_self');}}
        }document.onkeypress = ejs_code_clavier;

        (function(d, s, id) {
            if (d.getElementById(id)) {
                if (window.__TOMORROW__) {
                    window.__TOMORROW__.renderWidget();
                }
                return;
            }
            const fjs = d.getElementsByTagName(s)[0];
            const js = d.createElement(s);
            js.id = id;
            js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'tomorrow-sdk');

        let theme = 1
function toggleTheme(){
  if (theme == 1){
    
    document.documentElement.style.setProperty('--ft','#171120')
    document.documentElement.style.setProperty('--tft','#D6D6D6')
    document.documentElement.style.setProperty('--bleu','#0072f5')
    document.documentElement.style.setProperty('--bg','#F2F2F2')
    document.documentElement.style.setProperty('--backc','#F2F2F2')
    document.documentElement.style.setProperty('--bggr','#D6D6D6')
    document.documentElement.style.setProperty('--txt','#000000')
    theme = 0
  }else{
   
    document.documentElement.style.setProperty('--ft','#c9c1c1')
    document.documentElement.style.setProperty('--tft','#171120')
    document.documentElement.style.setProperty('--bleu','#00ffff')
    document.documentElement.style.setProperty('--backc','#171120')
    document.documentElement.style.setProperty('--bggr','#ff83cd')
    document.documentElement.style.setProperty('--txt','#ffffff')
    theme = 1
  }
}