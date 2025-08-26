import React, { useEffect, useState } from 'react';
import MenuCard from './Menu';
import resObj from '../Utils/MockData'; 
import Shimmer from './Shimmer';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const BodyComponent = () => {
    const [data,setData] = useState(resObj);
    const {id} = useParams();

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
    // try {
        const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        if (!response.ok) throw new Error("Network response was not ok");

        const json = await response.json();

        setData(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // } catch (error) {
    //     console.error("Failed to fetch:", error);
    // }
    };


    if(data.length === 0) return <Shimmer/>

    if(id) return <Outlet/>
    return (
        <div className="body">
            <div className="search-bar">
                <h3>Search</h3>
                <button onClick={()=>{
                    const newList = resObj.filter((res)=>{
                    return res.info.avgRating > 4.2;
                    });
                    setData(newList);
                }}>Top Rated</button>
                <button onClick={()=>{
                    setData(resObj)
                }}>Clear</button>
            </div>
            <div className="outer-menu">
                {data.map(res => <MenuCard resData={res} key={res.info.id} paramId={id}/>
                )}      
            </div>
        </div>
    )
}

export default BodyComponent;