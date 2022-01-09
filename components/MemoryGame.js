import FlipingCard from "./FlipingCard";
import { useState } from "react";
import cardsData from "../data";

const MemoryGame = props=>{
    const [cards,setCards]= useState(cardsData)
    const [selection,setSelection] = useState([]);
    const [score,setScore] = useState(0);
    const selectCard = (id)=>{
          const index = cards.findIndex(el=>el.id === id);
          const newCards = [...cards];
          newCards[index] = {...newCards[index],closed:!newCards[index].closed}
          let newSelection = [...selection]
          if(newSelection.length === 0){
              newSelection.push({url:newCards[index].url,index,id})
          }
          else if(newSelection.length === 1){
            newSelection.push({url:newCards[index].url,index,id})
            if(id === newSelection[0].id) {
                 newCards[index].closed = true;
                 newSelection = [];
                 setSelection(newSelection);
                 setCards(newCards)

                return;
            }
            if(newSelection[0].url != newSelection[1].url){

                newCards[newSelection[0].index].closed = true;
                newCards[newSelection[1].index].closed = true;
            }else{
                   
               
                    newCards[newSelection[0].index].eliminated = true;
                    newCards[newSelection[1].index].eliminated = true;
                    newSelection = [];
                    setScore(score + 1)

              
              
                
            }
            newSelection = [];
        }
       

      
          setSelection(newSelection)
          setCards(newCards)
       

    }
    return(
        <>
        
        <div className="relative w-[70%] p-4 rounded-[3px]  bg-indigo-300 grid grid-cols-3 place-items-center gap-4">
            <div className="absolute top-0 text-white text-3xl bg-indigo-700  px-2 translate-y-[-100%] ">Score: {score}</div>
            {
                cards.map(({url,id,closed,eliminated})=>{
                    return(
                       <FlipingCard 
                            key={id} 
                            id={id} 
                            url = {url} 
                            closed = {closed}  
                            selectCard={selectCard}
                            className={`${eliminated?'scale-0':'scale-100 duration-[1500] ease-in'}`}
                            
                        />
                        
                    )
                })
            }
             

        </div>
        </>
    )
}

export default MemoryGame;