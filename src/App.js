import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';
import Navbar from './components/navbar.js';
import { Router } from '@reach/router';
import Home from './components/home.js';
import Technical from './components/technical.js';
import Portfolio from './components/portfolio.js';
import Blog from './components/blog.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';
import Article from './components/article.js';
import Blogs from './data/blogs.json';
import NotFound from './components/notFound.js';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Navbar />

        <Router>
          <Home path='/' />
          <Technical path='/technical' />
          <Portfolio path='/portfolio' />
          <Article path='/blog/:blogname' article={Blogs.Articles} />
          <Blog path='/blog/' articles={Blogs.Articles} />
          <Contact path='/contact' />
          <NotFound path='/notfound' default />
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
