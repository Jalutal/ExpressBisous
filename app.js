const express = require('express')
// Déjà installé dans le package.json, on va le chercher pour construire une instance d'express.
const app = express()
// Constructeur vide dans lequel on crée son app
const port = 3000
// Port arbitraire, souvent 3000 dans les docs.


const arrNames = [
  "paul", "pierre", "mathilde"
]


app.get('/', (req, res) => {
  res.send('Salut tout le monde cest moi !')
})
// le / est la route de base. 

app.get('/names', (req, res) => {

// Une requête ne peut renvoyer qu'une seule et même réponse 
let sentence = `${arrNames[0]} et ${arrNames[1]} et ${arrNames[2]} !`;
  arrNames.forEach(() => {
    res.send(sentence);
  }
    )
  
});


app.listen(port, () => {
  console.log(`Un exemple d'app qui écoute sur le port ${port}`)
})
// Quand on execute app.js, il écoute en continu sur le port 3000 les requêtes faites.

// On stop le run à base de CTRL+C