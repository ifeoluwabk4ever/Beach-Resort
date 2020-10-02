import React, { Component } from 'react'
import items from './data'

    let RoomContext = React.createContext();

class RoomProvider extends Component {
    state={
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }

    // getData

    componentDidMount() {
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter( room => room.featured === true );

        let maxPrice = Math.max( ...rooms.map(item => item.price))
        let maxSize = Math.max( ...rooms.map(item => item.size))

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let room = { ...item.fields, images, id }

            return room
        })
        return tempItems
    }

    getRoom = (slug) => {
        let tempRooms = [ ...this.state.rooms]
        let room = tempRooms.find( room => room.slug === slug)
        return room
    }

    handleChange = e => {
        let target = e.target
        let value = target.type === 'checkbox' ? target.checked : target.value
        let name = e.target.name

        this.setState({
            [name]: value
        }, this.filterRooms)
    }

    filterRooms = () => {
        let {rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = this.state

        let tempRooms = [ ...rooms]

        // Room type sorting
        if (type !== 'all') {
            tempRooms = tempRooms.filter( room => room.type === type)
        }

        // Capacity(Guest) sorting
        capacity = parseInt(capacity)

        if (capacity !== 1) {
            tempRooms = tempRooms.filter( room => room.capacity >= capacity)
        }

        // Price sorting
        price = parseInt(price)

        tempRooms = tempRooms.filter( room => room.price <= price)

        // Size sorting
        tempRooms = tempRooms.filter( room => room.size >= minSize && room.size <= maxSize)

        // Breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter( room => room.breakfast === true)
        }

        // Pets
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true)
        }

        // Sorted Implementing
        this.setState({
            sortedRooms: tempRooms
        })
    }

    render() {
        return (
            <RoomContext.Provider value={{ 
                ...this.state, 
                getRoom: this.getRoom,
                handleChange: this.handleChange
            }}>
                { this.props.children }
            </RoomContext.Provider>
        )
    }
}

    let RoomConsumer = RoomContext.Consumer

export let withRoomConsumer = (Component) => {
        let ConsumerWrapper = (props) => {
        return <RoomConsumer>
            {
                value => <Component {...props} context={value} />
            }
        </RoomConsumer>
    }
    return ConsumerWrapper
}

export { RoomProvider, RoomContext, RoomConsumer }