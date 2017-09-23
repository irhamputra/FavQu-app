# Favorite Quotes App

Learning build a mobile app with Ionic 3 and Angular 4.

include this app:
1. Favorite Page (Showing Favorite Quote)
2. Library Page (Quote collection with dummy data)
3. Setting Page (Change alternative background)

What I've learned:
1. Create Component.
2. Creating multiple stack pages by creating tabs from scratch
3. Implementing interfaces for Quote collection 
4. Theming Sass variable by overriding and creating own variables
5. State management for Favorite/Unfavorite state and Setting to change state for alternative background
6. Testing in native app simulator.

#### Getting Started
before get started, you have to install Ionic CLI


```
$ git clone https://github.com/irhamputra/Favorite-Quotes.git
$ cd Favorites-Quotes
$ npm install
$ ionic serve
```

Testing in native 
```
$ ionic cordova platform add ios
$ ionic cordova run ios --target=iPhone-7 --livereload
```

if there's a building failed, try this:
```
$ ionic cordova build ios
$ ionic cordova run ios --target=iPhone-7 --livereload
```

this will open for you a browser in localhost:8100, or if you want to simulate in your browser, go to localhost:8100/ionic-lab
