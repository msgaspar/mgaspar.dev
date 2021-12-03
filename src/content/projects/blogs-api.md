---
title: 'Project Blogs API'
slug: 'blogs-api'
date: '2021-12-03'
icon: 'project'
---

This project consists of a RESTful API that can be used to manage blog posts for different users, with categories for classification of the posts, and the ability to perform a text-based search.

The Blogs API was a project for the back-end module of the Trybe full stack web development course. Students were requested to build this software and fulfill a set of requirements:

1. It should be possible to create a new user.
2. The user should be able to login and receive an authentication token.
3. It should be possible to obtain a list of all users.
4. It should be possible to obtain information of a specific user.
5. The user should be able to create a new category.
6. The user should be able to obtain a list of all registered categories.
7. The user should be able to create a new post.
8. It should be able to obtain a list of all posts, including information about their categories and authors.
9. It should be possible to obtain information about a specific post.
10. The author should be able to edit the title or content of a specific post.
11. The author should be able to delete a specific post.
12. The user should be able to delete it's own account.
13. It should be possible to do a text-based search on the blog posts.

The app was built using Node.js, Express, Sequelize ORM and MySQL database.

### Challenges and Lessons Learned

The main challenge in this project was to learn how to configure and use the Sequelize ORM, and establish relations between the entities User, BlogPost and Category. However, once I learned how to use this tool, all the advantages of using an ORM were very clear, and the development experience was greatly improved, in relation to past projects where raw SQL was used.

In addition, in this project I organized the code using a layered architecture with Controllers and Services, and I was very happy with this structure, as it got really easier to add new features during the development of the project.

**Techs:** JavaScript, Node.js, Express, Sequelize, MySQL

**Repository:** https://github.com/msgaspar/blogs-api
