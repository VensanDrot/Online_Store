import React from 'react'
import './item.css'
import IMG1 from '../img/test.webp'
import IMG2 from '../img/test1.png'
import IMG3 from '../img/test.webp'
import IMG4 from '../img/test1.png'
import IMG5 from '../img/test.webp'



const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Apple MackBook',
        price: "150$",
        demo:'http://vensandrot.me/quizwebapp/index.php' 
    },
    {
        id: 2,
        image: IMG2,
        title: 'Apple MackBook Air',
        price: "150$",
        demo: ''
        
    },
    {
        id: 3,
        image: IMG3,
        title: 'Apple MackBook',
        price: "150$",
        demo:'http://vensandrot.me/' 
    },
    {
        id: 4,
        image: IMG4,
        title: 'Apple MackBook',
        price: "150$",
        demo:'#' 
    },
    {
        id: 5,
        image: IMG5,
        title: 'Apple MackBook',
        price: "150$",
        demo:'https://gleeful-croissant-292f2a.netlify.app/' 
    }
]


const Item_list = () => {
  return (
    <section className='test'>
        <div className="container ">   
        <h1 id="h1">Item's For Sale</h1> 
        <div className='portfolio_container'>
        {
            data.map(({id,image,title,price,demo})=>{
                return(
                    
                    <article className='portfolio_item' key={id}>
                    <div className="portfolio_item_img">
                        <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <h3>{price}</h3>
                    <div className='portfolio_item_cta'>
                    <a href={demo} target='_blank' className='btn'>Buy now</a>
                                  
                    </div>
                </article>
               
                )
            })
        } 
        </div>
    </div>
    </section>
  )
}

export default Item_list