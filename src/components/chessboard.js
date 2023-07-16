import React,{useEffect, useState} from 'react'
import '../style/Board.css';

export default function Chessboard() {
//initializing board names.
  const horizontalpos=['a','b','c','d','e','f','g','h']
  const verticalpos=[1,2,3,4,5,6,7,8]


//intitializing pieces

let [pieces,changepiece]=useState([])

for (let i = 0; i < 8; i++) {
  pieces.push({ id: `wpawn${i}`, loc: `${horizontalpos[i]}2` });
  pieces.push({ id: `bpawn${i}`, loc: `${horizontalpos[i]}7` });
}

  pieces.push({id:`brook${0}`,loc:'a8'})
  pieces.push({id:`brook${1}`,loc:'h8'})
  pieces.push({id:`wrook${0}`,loc:'a1'})
  pieces.push({id:`wrook${1}`,loc:'h1'})
  pieces.push({id:`bknight${0}`,loc:'b8'})
  pieces.push({id:`bknight${1}`,loc:'g8'})
  pieces.push({id:`wknight${0}`,loc:'b1'})
  pieces.push({id:`wknight${1}`,loc:'g1'})
  pieces.push({id:`bbishop${0}`,loc:'c8'})
  pieces.push({id:`bbishop${1}`,loc:'f8'})
  pieces.push({id:`wbishop${0}`,loc:'c1'})
  pieces.push({id:`wbishop${1}`,loc:'f1'})
  pieces.push({id:`bqueen0`,loc:'d8'})
  pieces.push({id:`bking0`,loc:'e8'})
  pieces.push({id:`wqueen0`,loc:'d1'})
  pieces.push({id:`wking0`,loc:'e1'})




//initializing Board

let Board=[]
let flag;
    
    for(let i=0;i<verticalpos.length;i++){
      
        for(let j=0;j<horizontalpos.length;j++){
          if(j%2===0&&i%2===0){
            flag=0;
          }
          else if(j%2===0&&i%2!==0){
            flag=1;
          }
          else if(j%2!==0&&i%2===0){
            flag=1;
          }
          else if(j%2!==0&&i%2!==0){
            flag=0;
          }
            Board.push(<span key={`${horizontalpos[j]}${verticalpos[7-i]}`} id={`${horizontalpos[j]}${verticalpos[7-i]}`} className={`tile${flag}`}></span>)
        }
    }

//putting pieces on board at every update.
   useEffect(()=>{
    const horizontalpos=['a','b','c','d','e','f','g','h']
    const verticalpos=[1,2,3,4,5,6,7,8]
    //updated pieces has been showing ....
    console.log(pieces)
    for(let i=0;i<verticalpos.length;i++){
      
      for(let j=0;j<horizontalpos.length;j++){

        pieces.map((p) => {
            
          if (p.loc === `${horizontalpos[j]}${verticalpos[7-i]}`) {
            let cTile=document.getElementById(`${horizontalpos[j]}${verticalpos[7-i]}`);
        
            cTile.innerHTML=`<img key=${p.id} id=${p.id} loc=${p.loc} class="piece"  src="./cpieces/${p.id.slice(0, -1)}.png" alt=""/></img>`
             
          }
          
        })
      }
  }
},[])

//trial function to update chess pieces.
const handleIncrement = () => {
  let np = pieces.map((p) => {
    if (p.id === 'wpawn7') {
      // console.log(p.loc);
      return {
        id: 'brook0',
        loc: 'a5',
      };
    } else {
      return p;
    }
  });
//new array  is being created 
//updation is working ...
  changepiece(np)

};



  return (
    <div className='board'>
        {Board}
        <button onClick={handleIncrement}>click me</button>
    </div>
  )
}
