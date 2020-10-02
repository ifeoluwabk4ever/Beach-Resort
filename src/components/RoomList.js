import React from 'react'
import Room from './Room'
import Banner from '../components/Banner'
import {StyledRoom} from '../components/StyledHero'


export default function RoomsList({rooms}) {
    if ( rooms.length === 0) {
        return ( 
            <StyledRoom>
                <Banner title="oops!!!" subtitle="unfortunately, no room matched your search parameter...">
                </Banner>
                
            </StyledRoom>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map( item => {
                        return(
                            <Room key={item.id} room={item} />
                        )
                    })
                }
            </div>
        </section>
    )
}
