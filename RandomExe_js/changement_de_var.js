const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Entrez un nombre d\'entier de secondes : ', (inputSeconds) => {
  const totalSeconds = parseInt(inputSeconds);

  const hours = Math.floor(totalSeconds / 3600);
  const remainingSeconds = totalSeconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  console.log('Nombre d\'heures : ' + hours);
  console.log('Nombre de minutes : ' + minutes);
  console.log('Nombre de secondes : ' + seconds);

  rl.close();
});
