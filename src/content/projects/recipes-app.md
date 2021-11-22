---
title: 'Recipes App'
slug: 'recipes-app'
date: '2021-08-20'
icon: 'restaurant'
---

Recipes App was the capstone project of the Front-end module, the second module on the full stack web development formation at Trybe. The objective was to build a mobile-only React application in which the user should be able to explore food and drink recipes using search filters, save his/her favorite recipes on localstorage, read the details of a specific recipe and access an ingredients checklist. The recipes should be retrieved from [TheMealDB](https://www.themealdb.com/) and [TheCocktailDB](https://www.thecocktaildb.com/) open APIs.

The project was conducted in a group of 4 students working remotely, and should be delivered within 10 working days. The group adopted concepts of agile project management such as daily scrums and review meetings, and a Kanban board to keep track of the project backlog.

With a lot of cooperation between the group members, we managed to finish the project ahead of time, and wrote unit tests using React Testing Library that covered more than 90% of the lines of code.

After the end of the group project, I took the liberty to fork the repository, make a few improvements to the layout, fix some bugs that persisted and deploy it to Vercel.

### Challenges and Lessons Learned

The main challenge in this project was the organization of the workflow among the team members, which involved a lot of planning, code reviews and solving Git conflicts. In this regard, Github collaboration tools were our main allies, especially Pull Requests.

We also found the state management in this app to be fairly complex, and it was an additional challenge since we opted for using React's Context API and the useState hook, instead of using Redux (which everybody in the group was more familiar with, from previous projects).

Finally, achieving a high coverage ratio on unit tests after the application was finished turned out to be more difficult than expected, and it was clear that if we had adopted a TDD approach from the beginning, we would definitely obtain a more testable and reliable codebase.

**Techs:** JavaScript, React, Bootstrap, React Testing Library, Vercel

**Repository:** https://github.com/msgaspar/recipes-app
