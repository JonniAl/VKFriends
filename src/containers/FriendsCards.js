import React from 'react'
import { Spin } from 'antd';
import ProfileCard from "../components/ProfileCard";
import '../styles/ProfileCard.css'
import PropTypes from "prop-types";


class FriendsCards extends React.Component {
    render() {
        const { friends } = this.props;
        return (
            <div className="friends-cards">
                {(friends.isLoaded) ? friends.items.map((cardComponent, index) => {
                        return <ProfileCard key={index} card={cardComponent}/>
                }) :
                    <Spin tip="Loading..."/>
                }
            </div>
        )
    }
}

FriendsCards.propTypes = {
    friends: PropTypes.object.isRequired,
};

export default FriendsCards;