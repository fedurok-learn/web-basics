while(confirm("So, you want me to predict your future, huh?")) {
    var childrenNum = prompt("Children amount")
    var profession = prompt("Profession")
    var partnerName = prompt("Partner's name")
    var city = prompt("City")

    if(confirm("You want me to predict your personal life?")) {
        alert(`You will get married with ${partnerName} and you will have ${childrenNum}`)
    }
    else if(confirm("You want me to predict your professional life?")) {
        alert(`You will move to the ${city} city to work as ${profession}`)
    } else {
        alert("I don't know what you want from me!")
    }
}