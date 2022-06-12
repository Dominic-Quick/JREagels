import React, {useState} from 'react'
let t1 = " Lorem ipsum dolor sit amet, latine dolorum qui an. Eam cu consulatu conceptam referrentur. Usu omittam torquatos ei, an laoreet civibus platonem pro.";
let t2 = 'Te mei ubique honestatis instructior. Solet albucius gloriatur ne duo, ea pro euismod mnesarchum, cum te ornatus propriae posidonium. Justo legimus an quo, no mel populo invenire pericula. Liber labore epicuri mei an, mei eu pericula interesset referrentur, reque numquam est in.';
let t3 = 'Lorem ipsum dolor sit amet, latine dolorum qui an. Eam cu consulatu conceptam referrentur. Usu omittam torquatos ei, an laoreet civibus platonem pro. Vis ei tritani officiis nominati. Iudico detracto sea ut. Te mei ubique honestatis instructior. Solet albucius gloriatur ne duo, ea pro euismod mnesarchum, cum te ornatus propriae posidonium. Justo legimus an quo, no mel populo invenire pericula. Liber labore epicuri mei an, mei eu pericula interesset referrentur, reque numquam est in. Congue phaedrum disputationi quo ut. Cu qui causae percipit, vix at dicta doming. Eos no esse vitae. Cu primis gubergren his, dicat nostrum euripidis te has.';
let t4 = 'Cu qui causae percipit, vix at dicta doming.';
let t5 = 'Solet albucius gloriatur ne duo, ea pro euismod mnesarchum, cum te ornatus propriae posidonium. Justo legimus an quo, no mel populo invenire pericula. Liber labore epicuri mei an, mei eu pericula interesset referrentur, reque numquam est in. Congue phaedrum disputationi quo ut.';
let tArray = [t1,t2,t3,t4,t5];
let curInfo = 0

const Carousel = () => {
    let [info, setInfo] = useState(() => tArray[0])
    function rotateInfoUp(){
        if(curInfo + 1 > tArray.length - 1){
            curInfo = 0
            setInfo(info = tArray[curInfo])
        }else{
            setInfo(info = tArray[curInfo += 1]) 
        }
    }
    function rotateInfoDown(){
        if( curInfo == 0){
            curInfo = tArray.length - 1;
            setInfo(info = tArray[curInfo])
        }else{
            setInfo(info = tArray[curInfo -= 1])
        }
    }
  return (
    <div className='infoCon'>
        <button onClick={rotateInfoDown} className='btn'>Last</button>
        <p className='info'>{info}</p>
        <button onClick={rotateInfoUp} className='btn'>Next</button>
    </div>
  )
}

export default Carousel