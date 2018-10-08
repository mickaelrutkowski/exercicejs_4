function afficheIdentite(){
var firstName = document.getElementById('prenom').value;
var lastName = document.getElementById('nom').value;
var city = document.getElementById('ville').value;
var result = 'nom : ' + lastName  '\n' + 'prenom : ' + firstName + '\n' + 'ville : ' + city ;
if (isNaN(lastName) && isNaN(firstName) && isNaN(city) ){

  alert(result);
}else{
  alert('incorrect');
}
}
