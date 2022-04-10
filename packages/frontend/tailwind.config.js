module.exports = {
  content: [
    "./src/Components/Seasons.js",
    "./src/Pages/DisplayProducts.js",
    "./src/Pages/Login_Signin/Login.js",
    "./src/index.js",
    "./src/App.js",
    "./src/Components/Navbar.js",
    "./src/Components/Newsletter.js",
    "./src/Components/Footer.js",
    // "./src/Comps/Carousel.js",
  ],
  theme: {
    fontFamily: {
      body: ['Poppins']
    },
    extend: {
      translate: {
        'back': '-100%',
      },
      height: {
        'overScreen': '135vh',
      },

    },
  },
  plugins: [],
}
