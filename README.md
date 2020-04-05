This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Set up:

1. NPM and a Command Line tool is needed.
2. git clone this repo and cd into the project folder
3. run npm install
4. run npm start to view on localhost:3000 on browser
5. You can view the live app here: https://akeber89.github.io/Table-Tennis-Tournament/

Technologies and skills used:

React, JSX, JavaScript, HTML, CSS, Git, Wireframing

### Project summary:

This was a 1 week long project built solely by me as the final technical challenge at DevelopMe\_ bootcamp. Project goals included using technologies learned up until this point, familiarizing myself with documentation for new features, planning and creating a new webpage/app from scratch. It was a great learning experience. In my future projects I will be spending more time on planning out the functionality and the page/app structure. I have also learnt to keep SEO requirements within sight during the planning process, not just as an afterthought.

## The brief:

The core of the challenge is to create a tool which randomly creates pairings for a table tennis tournament bracket from a list of names collected from the user.

It's up to you how you implement this, with JavaScript, React, or PHP, as a web page, or as an app.

Some optional advanced features might include:

ability to record scores for each player, or mark which player won from each pairing, to create the next round of the tournament playoffs

continued rounds created until the final (last 2 players who have won all matches to date play each other, one marked as the winner)

## My process:

I have set out to use React to make sure my page will be able to accept future extensions and additional components for new functionality. I started this process by using the create-react-app boilerplate, then adding react-router-dom. I used this boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. The 'Table Tennis Tournament' game accepts player names entered by the user then splits them into 2 teams. There are 2 score counter panels to keep track of results.

I have used git to version manage my project.

## Planning:

- **Programming perspective:**

  MVP: Need to take user input -> store in an array -> divide into two arrays (push items in random order)

  Advanced: Need to store as an object with key of player name and position into an array. Limit the number of players on each position when user pick. Each team need to has one of each position player.

- **UX perspective:** provide a cclear and intuitive visual guidance and easy to use UI.
- **UI perspective:** Responsive design

## Suggested changes and stretch goals:

Continued rounds created until the final (last 2 players who have won all matches to date play each other, one marked as the winner)

To optimise state management I could have used Redux. Due to time constraints I did not have enough time to re-write my code so I decided to store state in the components rather than in the Redux store. This update is something I'm planning to carry out in the future.

Interactivity: I'd like to integrate the score-keeping into the team lists and display the result of the match-up.

Due to time constraints I have not been able to make my page entirely responsive (only the layout) to alternative screen sizes, it works best on wide screen.

I need to add validation to the form where the user inputs names to avoid entering blank list items.

In the next iteration I plan on handrolling a webpack.config.js file to better understand the build process.

# Table-Tennis-Tournament
