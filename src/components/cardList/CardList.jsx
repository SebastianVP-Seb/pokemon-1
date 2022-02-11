import './cardList.scss';
import Card from '../card/Card';
import { BrowserRouter, Route } from 'react-router-dom';

function CardList({data}) {
    console.log(data)
    
    return (
        <BrowserRouter>
        <div className='cardlist' >
            {
                data.datos.results.map((item,index)=>{
                    return (

                            <Card key={index} item={item}/>
                            // <Route element={<Card />} path='/pokemon/:id' />
                        )
                    })
                }
        </div>
        </BrowserRouter>
    );
};

export default CardList;
