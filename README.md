This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Description
This is a clone of a single instagram post.

# Plugins used
- React
- Redux
- Bootstrap
- node-sass

# Specs
The React code follows the specs as given in the instruction. In the app, it is able to add comments,
like / unlike comments, reply to comments, and like / unlike replied comments. The app uses localStorage 
as a mock database for the comment section and the UI persists the comment section as well. The app also
is responsive to different screen sizes. The reply bar however, doesn't work exactly as the original instagram 
app. It adds a reply input below the reply section and has its own reply button. The comment section also scrolls
down instead of going to a new page like the original instagram page (for mobile view). 

Some minor additional features are
also implemented:
(These are UI features only)
- Like the post (no persistent state)
- Double click to like the post  (no persistent state)
- Bookmark post (no persistent state)

# How to Run
Do `yarn install` and then `yarn start` to run it on `localhost:3000`. 

It is recommended to use a guest browser so that it maintains a fresh state of cookies 
the moment the app runs.