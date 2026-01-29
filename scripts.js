let i=0;
let scale=1.2;
const list = [
    "na pewno?",
    "na 100% ?",
    "jesteś przekonana?",
    "myszko prosze 🥺",
    'ej no weź',
    "ale przemyśl to jeszcze",
    "kotku co masz na myśli",
    "ej no bo będzie mi przykro w chuj",
    "no dobra to chuj mi w dupe",
    "żartowałem, weź sie zgódź prosze",
    "ale czemu jesteś taka nie miła mamusiu",
    "ale tak kurwa na 1000% jesteś pewna?",
    "no weź",
    "mamusiu prosze będe dobrym chłopcem",
    "no to lipa w chuj chyba 18letni streak bez walentynki podtrzymany elegancko",
    "żartowałem, błagam zgódź sie",
    "kurde no lowkey teksty mi sie skończyły także już musisz sie zgodzić",
    "no serio nie mam już tekstów",
    "no i na co ty liczysz",
    "skąd ja ci wezme kolejny tekst",
    "no błagam cie odpuść już",
    "no dobrze zrobie ci dobrze na kolanach jeśli dasz mi ten zaszczyt i będziesz moją walentynką",
    "no i czego lepszego sie spodziewałaś? chuj skończyły sie teksty dalej nic nie ma",
    "no serio mówie że nie ma",
    "chuj ci w dupe 😝"

]
function ButtonNoHandle() {
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    if(i < list.length){
       noButton.textContent = list[i];
        i++;
    }
    
    yesButton.style.fontSize = `${12 + i*10}px`; 
    scale+=0.2;
}