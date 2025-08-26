// import { useParams } from "react-router-dom";
// const MenuDisplay = (props) => {
//     const { resData } = props;
//     const {id} = useParams();
//     console.log(resData,'sanjana')
//     return (
//         <div>
//             sanjana {id}
//         </div>
//     )
// }

// export default MenuDisplay;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';

const MenuDisplay = () => {
    const { id } = useParams(); // Get the restaurant ID from URL
    const [menuData, setMenuData] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [id]);

    const fetchMenu = async () => {
        try {
            const response = await fetch(
                `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.08950&lng=80.27390&restaurantId=${id}`
            );
            const json = await response.json();
            setMenuData(json.data.cards[2]?.card?.card?.info);
        } catch (error) {
            console.error("Failed to fetch menu:", error);
        }
    };

    if (!menuData) return <Shimmer />;

    console.log(menuData,'sanjana')

    return (
        <div>
            <h2>{menuData.name}</h2>
            <p>Restaurant ID: {id}</p>
            <p>{menuData.cuisines.join(", ")}</p>
              <p>{menuData.sla.slaString}</p>
                 <p>{menuData.totalRatingsString}</p>
        </div>
    );
};

export default MenuDisplay;
