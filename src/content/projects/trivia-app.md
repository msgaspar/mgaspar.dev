---
title: 'Trivia Game App'
slug: 'trivia-app'
date: '2021-07-20'
icon: 'quiz'
---

The Trivia app was a project from the front-end module of Trybe full stack web development course. Students were requested to build a Trivia game in React, in groups, using Redux to manage the state of the application.

The game starts asking for the player's name and email, and if the email is registered on [Gravatar](https://en.gravatar.com/), the user avatar is displayed during the game. Then, the user receives 5 questions from the database of the [OpenTriviaDB](https://opentdb.com/api_config.php), having 30 seconds to answer each one. A score is calculated and a history of highest scores is stored on localstorage. The player can also access the game settings to decide the type, difficulty and category of the questions.

Due to personal reasons, 2 members had to leave the group before starting the project, so I ended up working in pair with my colleague Ana Clara. Even though the workload was higher for us both, we worked together seamlessly and finished the project in advance.

### Challenges and Lessons Learned

For me, the main challenge in this project was to develop the logic that is involved in a trivia game. The API provided a set of questions and answers, but it was up to us to turn that information into a real game, showing one question at a time, shuffling the possible answers, counting 30 seconds before going to the next one, marking the right answer in green and the wrong ones in red, and calculating the score were some of the steps needed to achieve that. It turned out to be a lot of fun to develop this application! All of that was highly related to state management in the application, and Redux was an amazing tool to solve that problem.

**Techs:** JavaScript, React, Redux, Vercel

**Repository:** https://github.com/msgaspar/trivia-game
