var pronoun = ['these', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];

function mydomain() {
         let ul = document.getElementById ("domain");
    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < noun.length; k++) {
            console.log(pronoun[i] + adj[j] + noun[k] + ".com");
             var node = document.createElement ('li');
             var textnode = document.createTextNode (pronoun[i]+adj[j]+noun[k]+".com");
             node.appendChild(textnode);
             document.getElementById("domain").appendChild(node);
             }
        }
    }
}
mydomain();


