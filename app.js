const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for(i = 0; i < allRonds.length; i++){

        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})

            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: true
            })
            .setTween(tween)
            // .addIndicators()
            .addTo(controller)

        }

    }

})

let dates = document.getElementById("dates")
let aller = document.getElementById("aller")
let infos = document.getElementById("infos")
 
aller.addEventListener("click", function() {
  let choix = dates.options[dates.selectedIndex]
   
  // Si on veut la valeur du choix : la valeur contenu dans l'attribut
    let choixValeur = choix.value-1
  // Si on veut le texte contenu dans le choix
     
   
  // ensuite tu peux faire ton traitement avec le choix avec choixValeur ou                choix.value
  //for(i = 0; i < allRonds.length; i++){
    //if(allRonds[i].getAttribute('data-anim') === choixValeur)
    //document.getElementById("input").value = '#'+choix.value;

    window.open('#'+choixValeur)
  

})


 
function openWin() {  
window.open('1.html');  
}  



jQuery(function(){
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200 ) { 
                $('#scrollUp').css('right','10px');
            } else { 
                $('#scrollUp').removeAttr( 'style' );
            }

        });
    });
});
