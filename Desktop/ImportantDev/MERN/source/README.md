<div id="top"></div
<!-- PROJECT SHIELDS -->

![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![](https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)
![](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
</br>

![](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)

<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/NatC02/loginRegistrationNode">
    <img src="images/nodeLogo.svg" alt="Logo" width="300" height="100">
    <img src="images/handlebarsLogo.svg" alt="Logo" width="300" height="100">
    <img src="images/mongodbLogo.svg" alt="Logo" width="300" height="100">
    <img src="images/passportLogo.svg" alt="Logo" width="300" height="100">
  </a>

  <h3 align="center">Localhost login and registration</h3>

  <p align="center">
    A localhost Node login project using Express, Passport, Handlebars, and Mongoose
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Registration and Login][project-screenshot]](https://github.com/NatC02/loginRegistrationNode)

I wanted to know how login authentication works with a backend.

- Passport for authentication
- bcrypt for encryption
- MongoDB schema with Mongoose
- API testing with Postman
- Handlebars for views

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

![project-demo-postman](/demo/demoPostman.gif)

![project-demo](/demo/demo.gif)

### Built with

- [Node](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Handlebars](https://handlebarsjs.com/)
- [Bootstrap](https://getbootstrap.com)
- [Passport](http://www.passportjs.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Get a free API Key from MongoDB from [Here](https://www.mongodb.com/cloud/atlas/register)
2. Clone the repo
   ```sh
   git clone https://github.com/NatC02/loginRegistrationNode
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config/keys.js`

   ```js
   dbPassword =
     "mongodb+srv://YOUR_USERNAME_HERE:" +
     encodeURIComponent("YOUR_PASSWORD_HERE") +
     "@CLUSTER_NAME_HERE.mongodb.net/YOUR_DATABASE_NAME_HERE?retryWrites=true";

   module.exports = {
     mongoURI: dbPassword,
   };
   const API_KEY = "ENTER YOUR API";
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Acknowledgments

List of resources I found helpful and want to give credit to. I was looking to learn to further cement my knowledge of backend fundamentals.

- [MongoDB Cheat Sheet](https://www.mongodb.com/developer/quickstart/cheat-sheet/)
- [Brad Traversy](https://www.youtube.com/watch?v=6FOq4cUdH8k&t=3467s)
- [Img Shields](https://shields.io)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[project-screenshot]: /images/screenshot.png
