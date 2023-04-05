import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Card}from './App';

ReactDOM.render([<h1 className="heading">List of top movies on NetFlix</h1>,
<Card 
val="Chhichhore"
imgsrc="https://images.news18.com/ibnlive/uploads/2019/08/Chhichhore.jpg"
link="https://www.hotstar.com/in/movies/chhichhore/1260012713/watch"

/>,

<Card
    val="Bajrangi Bhaijaan"
    imgsrc="https://media5.bollywoodhungama.in/wp-content/uploads/2016/05/429188525.jpg"
    link="https://www.hotstar.com/in/movies/bajrangi-bhaijaan/1000071777"
/>,

<Card
    val="Neerja"
    imgsrc="http://timesofindia.indiatimes.com/photo/61284465.cms"
    link="https://www.hotstar.com/in/movies/neerja/1000090704/watch"
/>],document.getElementById("root"));

