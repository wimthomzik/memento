# Memory Game

This is a memory matching game built using React, with Firebase for hosting, and it also offers PWA support. Users can download the game as a Progressive Web App (PWA) for offline play. The game keeps track of the player's wins and features a badge system to indicate game progress. Try it our [here](memento-c9d29.web.app).

Credits: This project is based on a Firebase course and is not my intellectual property. It is intended for educational purposes only.

## Features

- **Memory Matching Game:** Users can match cards based on identical images. The game is won when all cards are matched.
- **Shuffle Mechanism:** Cards are randomly shuffled at the start of the game and after every win.
- **Win Tracking:** The number of wins is displayed in the game header and updated dynamically.
- **Badge System:** A badge system is implemented using the App Badge API (or Client Badge for unsupported browsers).
- **Progressive Web App (PWA):** The app can be installed and used offline.
- **Firebase Hosting:** The game is hosted with Firebase for easy access and quick load times.

## Technologies Used

- **React:** For building the user interface and managing the game state.
- **Firebase:** For hosting the web app.
- **App Badge API:** Used to display badges for game progress on supported devices.
- **Progressive Web App (PWA):** Allows users to download the game and play offline.
- **CSS:** Custom styling for card components and game layout.

## How to Play

1. Start the game by clicking on a card to reveal its face.
2. Try to find and click the matching card.
3. Once all cards are matched, the game shuffles and starts a new round.
4. The number of wins is tracked in the game header.
5. You can restart the game at any time by clicking the **New Game** button.

## Firebase Hosting and PWA 
The project is hosted on Firebase, and users can install it as a PWA. 
To download the game as a PWA: 
  1. Open the game in your browser.
  2. Look for the "Install" button or option in your browser (usually in the address bar or menu).
  3. Once installed, you can play the game offline. Firebase handles hosting, ensuring fast load times and reliable access.


## Future Improvements 
- **Multiplayer Mode:** Implement a multiplayer option so players can compete against each other. 
- **Scoreboard:** Add a scoreboard to track and display the highest scores.
