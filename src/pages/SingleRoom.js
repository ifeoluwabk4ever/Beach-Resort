import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import { RoomContext } from '../Context'
import defaultBcg from '../images/room-1.jpeg'
import {StyledHero} from '../components/StyledHero'

export default class SingleRoom extends Component {

    constructor(props) {
        super(props)

        this.state = {
            slug: this.props.match.params.room,
            defaultBcg
        }
    }

    static contextType = RoomContext

    render() {

        let { getRoom } = this.context
        let room = getRoom(this.state.slug)
        if (!room) {
            return ( 
                <Hero hero="roomsHero">
                    <Banner title="oops!!!" subtitle="no such room could be found...">
                    <Link to="/rooms" className="btn-primary">back to rooms</Link>
                    </Banner>
                </Hero>
            )
        }

        let { name, description, capacity, size, price, extras, breakfast, pets, images } = room
        let [mainImg, ...defaultImg] = images

        return (
            <>
                <StyledHero img={mainImg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">Back to rooms</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {
                            defaultImg.map((item,index) => {
                                return ( 
                                    <img key={index} alt={name} src={item} />
                                )
                            })
                        }
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}.</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>price : ${price}.</h6>
                            <h6>size : {size} SQFT.</h6>
                            <h6>max capacity : {
                                capacity > 1 ? `${capacity} people.` : `${capacity} person.`
                            }</h6>
                            <h6>{
                                pets ? `pets allowed.` : `no pets allowed.`
                            }</h6>
                            <h6>{
                                breakfast && `free breakfast included.`
                            }</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                            <h6>extras</h6>
                            <ul className="extras">
                                {
                                    extras.map( (item, index) => {
                                        return <li key={index}> - {item}</li>
                                    })
                                }
                            </ul>
                </section>
            </>
        )
    }
}
