import React from 'react';
import {friends} from "../utils/constants";
import Friend from "./Friend";


const Friends = () => {
    return (
        <section className="right float-end w-50 m-2 row border border-light no-gutters">
            <h3 className="col-12 text-center">Friends</h3>
            {
                friends.map((item, index) => <Friend friend={item} key={index}/>)
            }
        </section>
    );
};

export default Friends;