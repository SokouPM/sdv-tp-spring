#Guide de lancement du projet
Projet by Pierre Marquet

## Configuration requise

- Java Development Kit (JDK) version 21 ou supérieure
- Node.js et npm (Node Package Manager)
- Un éditeur de code (de préférence IntelliJ IDEA Ultimate edition)
- Un navigateur web moderne

## Étapes pour lancer le backend (Spring Boot)

1. Ouvrez un terminal/command prompt.

2. De la racine du projet (où se trouvent les dossiers tp-teams-handling-api et tp-teams-handling-app), Naviguez vers le répertoire du projet backend.

   ```bash
   cd tp-teams-handling-api

   ```

3. Lancez l'application Spring Boot.

   ```bash
   ./mvnw spring-boot:run
   ```

   ou (sur Windows)

   ```bash
   mvnw.cmd spring-boot:run
   ```

   Cela démarrera le serveur backend à l'adresse [http://localhost:8080](http://localhost:8080) (si le port 8080 est déjà utilisé, vous devrez tuer le processus qui l'utilise)

3. Assurez-vous que l'application backend est opérationnelle en visitant [http://localhost:8080/api/teams](http://localhost:8080/api/teams) dans votre navigateur ou à l'aide d'un outil comme Postman.

## Étapes pour lancer le frontend (React)

1. Vérifiez le port sur lequel le serveur backend est démarré. Si vous avez utilisé la commande ci-dessus, le port par défaut est 8080. Si vous avez utilisé un autre port, vous devrez modifier le fichier `.env` dans le répertoire racine du projet frontend et changer la valeur de la variable `REACT_APP_API_BASE_URL` pour correspondre au port utilisé par le serveur backend.

2. Ouvrez un nouveau terminal/command prompt.

3. A partir de la racine du projet, naviguez vers le répertoire du projet frontend.

   ```bash
   cd tp-teams-handling-app
   ```

4. Installez les dépendances nécessaires.

   ```bash
   npm i
   ```

5. Lancez l'application React.

   ```bash
   npm start
   ```

   Cela démarrera le serveur de développement à l'adresse [http://localhost:3000](http://localhost:3000) (ou sur un autre port si le 3000 est déjà utilisé).

6. Ouvrez votre navigateur et accédez à [http://localhost:3000](http://localhost:3000) pour visualiser l'application frontend.
