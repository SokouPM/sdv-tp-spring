# Guide de lancement du projet

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

   Cela démarrera le serveur backend à l'adresse [http://localhost:8080](http://localhost:8080) (ou sur un autre port si le 8080 est déjà utilisé).

4. Assurez-vous que l'application backend est opérationnelle en visitant [http://localhost:8080/api/teams](http://localhost:8080/api/teams) dans votre navigateur ou à l'aide d'un outil comme Postman.

## Étapes pour lancer le frontend (React)

1. Ouvrez un nouveau terminal/command prompt.

2. A partir de la racine du projet, naviguez vers le répertoire du projet frontend.

   ```bash
   cd tp-teams-handling-app
   ```

3. Installez les dépendances nécessaires.

   ```bash
   npm i
   ```

4. Lancez l'application React.

   ```bash
   npm start
   ```

   Cela démarrera le serveur de développement à l'adresse [http://localhost:3000](http://localhost:3000) (ou sur un autre port si le 3000 est déjà utilisé).

5. Ouvrez votre navigateur et accédez à [http://localhost:3000](http://localhost:3000) pour visualiser l'application frontend.
