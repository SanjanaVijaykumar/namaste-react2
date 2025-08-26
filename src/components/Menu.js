import React, { use } from 'react';
import { biryani } from '../Utils/Constants';
import { useNavigate } from 'react-router-dom';
import MenuDisplay from './MenuDisplay';

const MenuCard = (props) => {
    const { resData, paramId } = props;
    const navigate = useNavigate();

    return (
        <div className="menu-card" onClick={()=>{navigate(`/home/${resData.info.id}`)}} style={{ cursor: 'pointer' }}>
            <div>
                <img src={biryani} alt="food image" className="menu-image" />
            </div>
            <div className="menu-items">
                <h3>{resData.info.name}</h3>
                <p>{resData.info.cuisines.join(", ")}</p>
                <p>{resData.info.externalRatings.aggregatedRating.rating}</p>
                <p>{resData.info.sla.slaString}</p>
            </div>
            <div>
                <label>Choose 1 of them</label>
                <select>
                    {resData.info.cuisines.map((res,index)=>{
                       return <option key={index} value={res}>{res}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default MenuCard;