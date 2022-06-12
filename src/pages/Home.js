import React from 'react'
import Carousel from '../comps/Carousel'

const Feed = () => {
  return (
    <div className='feedCon'>
        <div className='anoCon'>
            <div className='anoLeft'>
                Announcements
            </div>
            <div className='anoRight'>
                    <Carousel/>
            </div>
        </div>
        <div className='aboutCon'>
            <div className='aboutLeft'>
                    Lorem ipsum dolor sit amet, latine dolorum qui an. Eam cu consulatu conceptam referrentur. 
                    Usu omittam torquatos ei, an laoreet civibus platonem pro. Vis ei tritani officiis nominati. 
                    Iudico detracto sea ut. Te mei ubique honestatis instructior.
                    Solet albucius gloriatur ne duo, ea pro euismod mnesarchum, cum te ornatus propriae posidonium.
                    Justo legimus an quo, no mel populo invenire pericula.
                    Liber labore epicuri mei an, mei eu pericula interesset 
                    referrentur, reque numquam est in. Congue phaedrum disputationi quo ut.
                    Cu qui causae percipit, vix at dicta doming.
                    Eos no esse vitae. Cu primis gubergren his, dicat nostrum euripidis te has.
            </div>
            <div className='aboutRight'>
                About
            </div>
        </div>
        <div className='coachCon'>
            
        </div>
    </div>
  )
}

export default Feed