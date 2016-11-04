## Installation de nodeJS.
1. se rendre ici : https://nodejs.org/en/
2. Télécharger la version "LTS"
3. Exécuter l'application.
4. Faire attention qu'il ajoute bien le chemin à votre PATH Windows
5. Après l'installation, lancer un invité de commande et taper ```node -v```, Si tout c'est bien passé, il doit retourner la version du serveur nodeJS

## Installer mongoDB.
1. Se rendre ici : https://www.mongodb.com/download-center#community
2. Télécharger la version pour Windows.
3. Lancer le paquet msi télécharger.
4. Une fois l'installation terminé, créer un dossier ou seront stocké les données.
5. Lancer un invité de commande et lancer le serveur de base de données avec la commande suivante : ```"C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe" --dbpath c:\chemin\vers\le\dossier\cree```
Attention au premier chemin de la commande, elle doit pointer vers votre installation de Mongo.

## Lancer le serveur.
1. Télécharger ou cloner ce repo.
2. Vous rendre dans le dossier téléchargé.
3. Ouvrir un invité de commande
4. lancer la commande ```npm install```
5. Lancer le serveur avec la commande ```node server.js```

Le serveur doit vous repondre :
```
TodoApi listen on port 3000
connected to database !
```
