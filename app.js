const friendList = document.querySelector('#listaAmigos');
const iptFriends = document.querySelector('#amigo');
const resultadoView = document.querySelector('#resultado');


let friends = []; //lista dos participantes

function updateList(){
    friendList.innerHTML = " ";
    
    for (friend of friends) {
        const friendItem = friendList.appendChild(document.createElement("li"));
        friendItem.className = "friend-item";
        friendItem.id = friend;
        friendItem.innerHTML = friend ;
    }
    console.log(friends);
}

function adicionarAmigo() {
    const friendName = iptFriends.value.trim();

    if (friendName === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    if (friends.includes(friendName)) {
        alert("Esse amigo já foi adicionado!");
        return;
    }

    friends.push(friendName);
    updateList();
    iptFriends.value = "";
}

function generateRandomNum(limite){
    // gera um numero aleatorio com base no numero dos participantes
    return Math.floor(Math.random() * limite);
}

function sortearAmigo(){
    const numParticipantes = friends.length;
    if (numParticipantes == 0){
        alert("Tente inserir mais participantes");
        return;
    }
    
    randomNum = generateRandomNum(numParticipantes);
    const resultadoItem = resultadoView.appendChild(document.createElement("li"));
    resultadoItem.innerHTML = `O amigo secreto sorteado é: ${friends[randomNum]}`;
    

    console.log(friends[randomNum]);
    return friends[randomNum];
}