const reponse1 = 3;
const reponse2 = 6;
const reponse3 = 8;
const reponse4 = 10;
const reponse5 = 14;
const resultatAttendu = 5;

//La fonction est relié au bouton grâce au "on click" dans le fichier HTML
function getValue() {

    //Variable instancié à 0 et qui recevra les scores lors de bonnes réponses
    var resultat = "";

    //Récupération des valeurs qui sont cochés dans les questions
    var value1 = document.querySelector('input[name="q1"]:checked').value;
    var value2 = document.querySelector('input[name="q2"]:checked').value;
    var value3 = document.querySelector('input[name="q3"]:checked').value;
    var value4 = document.querySelector('input[name="q4"]:checked').value;
    var value5 = document.querySelector('input[name="q5"]:checked').value;


    //Comparaison de ce que l'utilisateur a choisi avec les réponses attendues
    if (value1 == reponse1) {
        //La réponse est bonne, la div s'affiche en vert
        document.getElementById("q1").style.backgroundColor = '#96d896';
        document.querySelector("#q1").classList.add("success");
        //Appelle de la fonction remove après une seconde
        setTimeout(() => { document.querySelector("#q1").classList.remove("success"); }, 1000);
        resultat++;

    } else {
        //La réponse est fausse, la div s'affiche en rouge
        document.getElementById("q1").style.backgroundColor = '#f09d9d';
        document.querySelector("#q1").classList.add("fail");
        setTimeout(() => { document.querySelector("#q1").classList.remove("fail"); }, 1000);
    }

    if (value2 == reponse2) {
        document.getElementById("q2").style.backgroundColor = '#96d896';
        document.querySelector("#q2").classList.add("success");
        setTimeout(() => { document.querySelector("#q2").classList.remove("success"); }, 1000);
        resultat++;

    } else {
        document.getElementById("q2").style.backgroundColor = '#f09d9d';
        document.querySelector("#q2").classList.add("fail");
        setTimeout(() => { document.querySelector("#q2").classList.remove("fail"); }, 1000);
    }

    if (value3 == reponse3) {
        document.getElementById("q3").style.backgroundColor = '#96d896';
        document.querySelector("#q3").classList.add("success");
        setTimeout(() => { document.querySelector("#q3").classList.remove("success"); }, 1000);
        resultat++;

    } else {
        document.getElementById("q3").style.backgroundColor = '#f09d9d';
        document.querySelector("#q3").classList.add("fail");
        setTimeout(() => { document.querySelector("#q3").classList.remove("fail"); }, 1000);
    }

    if (value4 == reponse4) {
        document.getElementById("q4").style.backgroundColor = '#96d896';
        document.querySelector("#q4").classList.add("success");
        setTimeout(() => { document.querySelector("#q4").classList.remove("success"); }, 1000);
        resultat++;

    } else {
        document.getElementById("q4").style.backgroundColor = '#f09d9d';
        document.querySelector("#q4").classList.add("fail");
        setTimeout(() => { document.querySelector("#q4").classList.remove("fail"); }, 1000);
    }

    if (value5 == reponse5) {
        document.getElementById("q5").style.backgroundColor = '#96d896';
        document.querySelector("#q5").classList.add("success");
        setTimeout(() => { document.querySelector("#q5").classList.remove("success"); }, 1000);
        resultat++;

    } else {
        document.getElementById("q5").style.backgroundColor = '#f09d9d';
        document.querySelector("#q5").classList.add("fail");
        setTimeout(() => { document.querySelector("#q5").classList.remove("fail"); }, 1000);
    }



    //Si l'utilisateur a 5 bonnes réponses, alors le message qui apparait lui indique qu'il a gagné
    if (resultat == resultatAttendu) {

        var div = document.getElementById('messageAlert');
        div.innerHTML = "Bravo ! Vous avez gagné ! 🐶";

        //L'utilisateur n'a pas eu les 5 bonnes réponses, le jeu l'invite gentillement à recommencer
    } else {
        var div = document.getElementById('messageAlert');
        div.innerHTML = "Recommencez ! 💩";
    }

}