import React from 'react'
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import Loading from './Loading'
import { withRoomConsumer } from '../Context'

function RoomContainer({context}) {
    let { loading, sortedRooms, rooms } = context

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomContainer)




// import React from 'react'
// import RoomList from './RoomList'
// import RoomFilter from './RoomFilter'
// import Loading from './Loading'
// import { RoomConsumer } from '../Context'

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 value => {

//                     let { loading, sortedRooms, rooms } = value

//                     if(loading) {
//                         return <Loading />
//                     }

//                     return (
//                         <div>
//                             Hello Room Container
//                             <RoomFilter rooms={rooms} />
//                             <RoomList rooms={sortedRooms} />
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//     )
// }
