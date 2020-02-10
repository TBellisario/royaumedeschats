# royaumedeschats

Projet de rattrapage de Technologie Web : Le royaume des chats 

Consignes : 

- Un header avec le nom de sa boutique et un logo

- Une description de quelques lignes de sa boutique située à Paris au 37 quai de grenelle

- Une grille de tarifs de ses services avec une description sommaire (trois services proposés : la taille des ongles, le brushing et le massage)

- Une galerie d'une dizaine de photos

- Un formulaire de contact élégamment intégré 

- Un petit article (5-6 lignes) avec une illustration qui vante les mérites du massage et de la relaxation chez les chats et qui invite les utilisateurs du site à venir à la boutique ou à consulter le tarif du massage dans la grille tarifaire.

Détails techniques

- Pour la galerie de photos, tu devras appeler une api pour récupérer les urls des images et les afficher (! pas d'url d'image codée en dur ! à chaque refresh de page de nouvelles images apparaissent). Voici le lien https://thecatapi.com/ où tu trouveras toute la documentation (tu devras t'inscrire pour demander une clé d'api).

- Tu dois créer au moins 3 composants react que tu utiliseras dans ta page

- La page devra être responsive

- Tu ne dois pas faire fonctionner le formulaire de contact juste l'intégrer dans la page

- Tu dois utiliser git à la perfection, nous voulons des messages de commit propres et qui ont du sens.Tu commiteras régulièrement (pas de repo avec un seul commit "J'ai fini"). Nous voulons également un fichier readme irréprochable qui explique le contenu du repo et comment exécuter ton code

- Lorsque tu as fini, tu mettras en ligne ton site sur Heroku.



________


Pour run le projet : 
- npm i
- npm install react-bootstrap, react-mdl
- npm start


J'ai décomposé le sujet en deux parties : Frontend et Backend 

Dans Frontend : 
- 5 Components : Article, Content, Formulaire, Header, Tab + leurs CSS

- Article + Content : Component jumbotron de la bibliothèque react-bootstrap qui me permettent d'écrire des renseignements sur la boutique
- Header : Navbar de la bibliothèque react-bootstrap afin de placer le titre de la boutique et le logo (responsive)
- Tab : Un tableau responsive également de la bibliothèque react permettant de faire ma grille tarifaire 
- Formulaire : Formulaire de la bibliothèque react 



Backend : 
- Clé API : 7bec0170-9c87-49e1-8219-34f70d7c9d01

