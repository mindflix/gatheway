# Gatheway

### Logo

![icon](https://github.com/mindflix/gatheway/blob/main/public/favicon.ico?raw=true)

### Frontend répertoire

https://github.com/mindflix/gatheway

### Demo

https://gatheway.herokuapp.com/

## Introduction

Le projet Gatheway a pour objectifs de devenir une plateforme de distribution pour les produits à grande valeur ajoutée.
Ce site contiendra plusieurs fonctionnalités propre à Gatheway :

- Une interface dynamique des produits disponible à la vente.
- Un système de commandes automatisé et une interface utilisateur.

# Fonctionnement du projet

## Fonctionnement général

Ce projet est découpé en 2 modules :

- Un module API backend en PHP avec Symfony, afin de communiquer avec la base de donnée.
- Un module interface frontend en Javascript avec ReactJs, qui utilise l'API pour populer nos interfaces avec des données.

## Spécifications techniques

La partie frontend utilise 2 principales technologies :

- React, un framework de templating en Javacript
- Sass, un outil d'assistance au CSS

En ce qui concerne la partie backend :

- PHP, un langage impératif orienté objet
- Symfony, un ensemble de composants PHP ainsi qu'un framework MVC. Il fournit des fonctionnalités modulables et adaptables qui permettent de faciliter et d’accélérer le développement du site web.

## Module API (backend)

### Overview structurelle de la bdd

![Screen1](https://github.com/mindflix/gathewayBack/blob/main/src/images/review/UML_Gatheway.png?raw=true)

### Trajets des requests

![Screen2](https://github.com/mindflix/gathewayBack/blob/main/src/images/review/fonction.png?raw=true)

## Module ReactJS (frontend)

Un projet NodeJS standard, fonctionnant via ReactJs. React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page HTML à chaque changement d'état.

# Initialisation du projet

## Étape 1 : Prérequis

### NodeJS

Afin de pouvoir faire fonctionner le projet localement, vous aurez besoin d'avoir NodeJS.
Voici comment vérifier la version actuelle de node sur son ordinateur, cette commande fonctionne pour tous les systèmes
d'exploitation :

```console
user@pc:~ $ node -v
v14.5.0
```

Si vous n'avez pas NodeJS, ou la bonne version, voici [un lien de téléchargement](https://nodejs.org/en/download/) pour télécharger Node avec la bonne version.

### Yarn

Contrairement à NodeJS, Yarn n'est pas nécessaire au fonctionnement du projet, néanmoins,
nous vous recommandions fortement de l'utiliser, cet outil est beaucoup plus rapide que son
équivalent installé par défaut, NPM.

Vous trouverez un guide pour installer Yarn [ici](https://classic.yarnpkg.com/en/docs/install).

### Git

Comme Yarn, Git n'est pas nécessaire, mais fortement recommandé pour pouvoir facilement mettre le projet à jour
ou envoyer le code que vous avez produit dans le dépot.

Voici un guide pour l'installer [ici](https://github.com/git-guides/install-git).

## Étape 2 : Installer le projet localement

### Télécharger le projet via Git :

```console
user@pc:~/Dev/MesProjets $ git clone https://github.com/mindflix/gatheway.git
```

### Installer les dépendances

#### Avec Yarn

```console
user@pc:~/Dev/MesProjets $ cd esmeWeb
user@pc:~/Dev/MesProjets/esmeWeb $ yarn install
```

#### Avec NPM

```console
user@pc:~/Dev/MesProjets $ cd esmeWeb
user@pc:~/Dev/MesProjets/esmeWeb $ npm install
```

En cas d'erreur, réferez vous à cette [documentation](https://github.com/mindflix/gatheway/wiki/Troubleshooting), si votre erreur n'y figure pas,
rédigez une issue [ici](https://github.com/mindflix/gatheway/issues/new).

## Étape 3 : Lancer le serveur de développement

#### Avec Yarn

```console
user@pc:~/Dev/MesProjets/esmeWeb $ yarn start
```

#### Avec NPM

```console
user@pc:~/Dev/MesProjets/esmeWeb $ npm run start
```

En cas d'erreur, réferez vous à cette [documentation](https://github.com/mindflix/gatheway/wiki/Troubleshooting), si votre erreur n'y figure pas,
rédigez une issue [ici](https://github.com/mindflix/gatheway/issues/new).

Le serveur sera généralement accessible sur votre navigateur a cette adresse :

```
http://localhost:3000
```

## Pour developper plus rapidement l'interface

Nous utilisons Webpack en tant que bundler pour notre projet, ce qui nous donne accès au hot-reloading, cela veux dire que
lorsque vous sauvegarderez un fichier du projet pendant que le serveur est en route, votre page web sur votre
navigateur sera automatiquement rafraichie.

Cela ne fait gagner que quelques secondes, mais sur une journée où cette étape est répétée plusieurs centaines de fois, le gain de temps
est remarquable.

## Mise en production

La mise en production consiste à mettre le build de production sur le serveur de production.
Le build de production est généré de manière à augmenter les performances du site au coût du temps de génération.

#### Avec Yarn

```console
user@pc:~/Dev/MesProjets/esmeWeb $ yarn build
```

#### Avec NPM

```console
user@pc:~/Dev/MesProjets/esmeWeb $ npm run build
```

En cas d'erreur, réferez vous à cette [documentation](https://github.com/mindflix/gatheway/wiki/Troubleshooting), si votre erreur n'y figure pas,
rédigez une issue [ici](https://github.com/mindflix/gatheway/issues/new).

## Quelques aperçus du projet

### Page d'accueil

![Screen3](https://github.com/mindflix/gatheway/blob/main/src/images/review/review1.png?raw=true)
![Screen4](https://github.com/mindflix/gatheway/blob/main/src/images/review/review2.png?raw=true)
![Screen5](https://github.com/mindflix/gatheway/blob/main/src/images/review/review4.png?raw=true)
![Screen6](https://github.com/mindflix/gatheway/blob/main/src/images/review/review5.png?raw=true)

### Page d'authentification

![Screen7](https://github.com/mindflix/gatheway/blob/main/src/images/review/review3.png?raw=true)
![Screen8](https://github.com/mindflix/gatheway/blob/main/src/images/review/review6.png?raw=true)
