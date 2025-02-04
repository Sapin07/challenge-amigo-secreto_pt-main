const friendList = document.querySelector('#listaAmigos');
const iptFriends = document.querySelector('#amigo');


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