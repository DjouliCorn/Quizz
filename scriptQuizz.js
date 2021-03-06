const resultatAttendu = 5;

//La fonction est relié au bouton grâce au "on click" dans le fichier HTML
function getValue() {

    //Variable instancié à 0 et qui recevra les scores lors de bonnes réponses
    let resultat = "";

    const resultArray = [
        0,
        3,
        6,
        8,
        10,
        14
    ]

    for(i = 1; i <= 5; i++){
        let concatQ = 'q' + i;
        let concatHq = '#q' + i;
        let result = resultArray[i];

        //Récupération des valeurs qui sont cochés dans les questions
        let value = document.querySelector('input[name=' + concatQ + ']:checked').value;

        //Comparaison de ce que l'utilisateur a choisi avec les réponses attendues
        if(value == result){

            document.getElementById(concatQ).style.backgroundColor = '#96d896';
            document.querySelector(concatHq).classList.add("success");
            //Appelle de la fonction remove après une seconde
            setTimeout(() => { document.querySelector(concatHq).classList.remove("success"); }, 1000);
            resultat++;

        } else{

            document.getElementById(concatQ).style.backgroundColor = '#f09d9d';
            document.querySelector(concatHq).classList.add("fail");
            setTimeout(() => { document.querySelector(concatHq).classList.remove("fail"); }, 1000);

        }
    }

    //Si l'utilisateur a 5 bonnes réponses, alors le message qui apparait lui indique qu'il a gagné
    if (resultat == resultatAttendu) {

        let div = document.getElementById('messageAlert');
        div.innerHTML = "Bravo ! Vous avez gagné ! 🐶";

        //L'utilisateur n'a pas eu les 5 bonnes réponses, le jeu l'invite gentillement à recommencer
    } else {
        let div = document.getElementById('messageAlert');
        div.innerHTML = "Recommencez ! 💩";
    }

}