import React from 'react'
import { Card, Badge } from 'antd';
import '../styles/ProfileCard.css'



class ProfileCard extends React.Component {
    render() {
        const { Meta } = Card;
        const { card } = this.props;
        const name = `${card.first_name} ${card.last_name}`;
        const vkPage = `https://vk.com/id${card.id}`;
        let photo;
        (card.photo_200 === undefined) ? photo = 'https://vk.com/images/camera_200.png?ava=1' : photo = `${card.photo_200}`;

        return (
            <div className="profile-card">
                <a target="_blank"  href={vkPage}>
                    <Card
                        hoverable
                        style={{width: 220}}
                        cover={<img alt={card.id} src={photo} />}
                    >
                        {(card.online === 1) ? <Badge style={{marginBottom: 15}} status="success" text="Online" /> : <Badge style={{marginBottom: 15}} status="default" text="Offline" />}
                        <Meta title={name} description={vkPage} />
                    </Card>,
                </a>
            </div>
        )
    }
}

export default ProfileCard;