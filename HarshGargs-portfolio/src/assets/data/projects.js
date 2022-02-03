import { v4 as uuidv4 } from 'uuid';

import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Food Surfer(HackMIT 2021)',
    desc:
      'It is made for food lovers across globe to host a feist at their home and share their culture wth other people. ',
    img: UTrackerImg,
    link: 'https://github.com/harshgargtiet/FoodSurfers',
  },
  {
    id: uuidv4(),
    name: 'Ecommerce Website',
    desc:
      ' It is ecommerce website using mern stack. I have used React for frontend & redux for state management, Node JS & Express for backend with MongoDB as database.',
    img: GreenCtgImg,
    link: 'https://github.com/harshgargtiet/MernStackEcommerce',
  },
  {
    id: uuidv4(),
    name: 'Hangout',
    desc:
      ' It is a chating website where group of friends can hangout developed using basic mern stack technology',
    img: CoinTrackerImg,
    link: 'https://github.com/harshgargtiet/Hangout',
  },
  {
    id: uuidv4(),
    name: 'Mi store clone',
    desc: 'It is a basic Mi Store clone using reactJs',
    img: CavinImg,
    link: 'https://github.com/harshgargtiet/Mi_Store_Clone',
  },
];

export default projects;
