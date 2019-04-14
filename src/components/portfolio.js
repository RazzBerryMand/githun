import React from 'react';
import foodGuesser from '../images/food-guesser-app.png';
import taskList from '../images/mands-tasklist.png';
import emojiSearcher from '../images/emoji-searcher.png';
import globalWeather from '../images/global-weather-app.png';
import dinnerSearcher from '../images/dinner-searcher.png';
import cashinCalc from '../images/cashin-calc.png';
import '../styling/textArea.css';

class Portfolio extends React.Component {
  render() {
    return (
      <div className='Portfolio'>
        <div className='SubHeader'>
          <h2>"A collection of my apps, depoloyed with Heroku."</h2>
        </div>

        <div className='TextContainer'>
          <h3>
            I wrote my first ever line of code in September 2018. The below apps
            are in chronological order to show the trajectory of my learning.
          </h3>
          <div className='PortfolioWrapper'>
            <div className='AppContainer'>
              <a
                href={'https://food-guesser-app.herokuapp.com/'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={foodGuesser} alt='Food Guesser App' />
                <h2>Food Guesser App</h2>
              </a>
              <p>
                This app was built by pair-programming. We created a RESTful API
                that uses IBM Watson to take data from an outside source (in
                this case, an image URL) and then manipulated this data to
                display the name of the food in the image. The FE for this app
                is very basic as the focus of this sprint was intended to be
                purely BE.
              </p>
            </div>

            <div className='AppContainer'>
              <a
                href={'https://mands-tasklist.herokuapp.com/'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={taskList} alt="Mand's Tasklist" />
                <h2>Mand's Tasklist</h2>
              </a>
              <p>
                My very first attempt at creating an application with React! A
                simple ToDo list with the functionality of inputting new tasks
                and deleting completed ones. I used React Flip Move as a "plug
                and play" solution to add animation to the list items.
              </p>
            </div>

            <div className='AppContainer'>
              <a
                href={'https://emoji-searcher.herokuapp.com/'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={emojiSearcher} alt='Emoji Searcher' />
                <h2>Emoji Searcher</h2>
              </a>
              <p>
                To build my confidence in using React, I created an Emoji Search
                app that renders a list of emojis and allows you to search and
                filter by name and keywords. This app uses a JSON file as its
                source of data. The key to the filter functionality lies in the
                onChange event handler for the input element.
              </p>
            </div>

            <div className='AppContainer'>
              <a
                href={'https://global-weather-app.herokuapp.com/'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={globalWeather} alt='Global Weather App' />
                <h2>Global Weather App</h2>
              </a>
              <p>
                For this app I looked at using data from a third party API to
                create a React-based interface and presenting this data in an
                interactive and engaging way. The API I chose to use was "Open
                Weather Map" which returns the current and forecast weather
                across the globe.
              </p>
            </div>

            <div className='AppContainer'>
              <a
                href={'https://dinner-searcher.herokuapp.com/'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={dinnerSearcher} alt='Dinner Searcher' />
                <h2>Dinner Searcher</h2>
              </a>
              <p>
              This app allows you to search by ingredient to find online recipes using the third party API, "food2fork". This API only allows 50 API calls per day which unfortunately limits the apps usage. I also had to use the "cors-anywhere" Heroku app to enable cross-origin requests to anywhere.
              </p>
            </div>


            <div className='AppContainer'>
              <a
                href={'https://cashin-calc.herokuapp.com/'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={cashinCalc} alt='Cashin Calc' />
                <h2>Cashin Calc</h2>
              </a>
              <p>
                To further improve my React and CSS skills I wanted to design an
                app that would replicate the functionality and look of a retro
                calculator. I used http://mathjs.org/ library in this project to
                keep things simple, and I used flexbox within my CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
