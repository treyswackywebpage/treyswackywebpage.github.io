function changeText() {
    var message = "Look! It changed!";
    document.getElementById("exampleID").innerHTML = message;
}
function translate() {
    var translate = "最後に、JS関数を起動する<button>があります。 onclick属性を通してこれを行います。これはボタンにボタンがクリックされた時に何をするべきかを伝えます。この場合、changeText（）関数が実行されます。";
    document.getElementById("translate").innerHTML = translate;
}
function addOn() {
    var addedToSentence = "I've been added";
    document.getElementById("addOn").innerHTML = addedToSentence;
}