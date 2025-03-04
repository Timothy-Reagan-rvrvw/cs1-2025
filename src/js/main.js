function submit() {
    console.log("hbfkhvdhvhdblhbvkhdbKJHS:FHvhjhbidHljhvdLFJhlhjbf");
    var name = document.getElementsByName("name").item(0).value;
    var message = document.getElementsByName("message").item(0).value;
    console.log(message);
    alert("hello " + name + " message " + message);
    console.log(name);
    document.getElementById("message").innerHTML = message;
}