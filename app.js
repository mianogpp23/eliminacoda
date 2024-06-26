const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware per gestire il parsing dei dati del form
app.use(bodyParser.urlencoded({ extended: true }));

// Definizione dei valori iniziali per ogni sala
let initialValue1 = 0;
let initialValue2 = 0;
let initialValue3 = 0;
let initialValue4 = 0;

// Percorso per il rendering della pagina index.ejs
app.get('/', (req, res) => {
  res.render('index', {
    initialValue1: initialValue1,
    initialValue2: initialValue2,
    initialValue3: initialValue3,
    initialValue4: initialValue4
  });
});

// Percorso per il rendering della pagina remote.ejs
app.get('/remote', (req, res) => {
  res.render('remote', {
    initialValue1: initialValue1,
    initialValue2: initialValue2,
    initialValue3: initialValue3,
    initialValue4: initialValue4
  });
});

// Percorso per il rendering della pagina display.ejs
app.get('/display', (req, res) => {
  res.render('display', {
    initialValue1: initialValue1,
    initialValue2: initialValue2,
    initialValue3: initialValue3,
    initialValue4: initialValue4
  });
});

// Gestione delle richieste POST per ogni form su /remote
app.post('/remote', (req, res) => {
  const action = req.body.action;

  // Esegui l'azione richiesta per ciascuna sala
  switch (action) {
    case 'increase':
      initialValue1++;
      break;
    case 'decrease':
      initialValue1--;
      break;
    case 'increase2':
      initialValue2++;
      break;
    case 'decrease2':
      initialValue2--;
      break;
    case 'increase3':
      initialValue3++;
      break;
    case 'decrease3':
      initialValue3--;
      break;
    case 'increase4':
      initialValue4++;
      break;
    case 'decrease4':
      initialValue4--;
      break;
    default:
      // Gestione di azioni non riconosciute (opzionale)
      break;
  }

  // Redirect alla pagina del telecomando dopo l'aggiornamento dei valori
  res.redirect('/remote');
});

// Impostazione del motore di rendering EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Avvio del server sulla porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
