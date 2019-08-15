import React from 'react'
import {Button} from "antd";
import 'antd/dist/antd.css';
import axios from 'axios';
import {connect} from "react-redux";
import {authSuccessAction} from "../actions/AuthActions";
import jsonp from "jsonp";
import { friendsSuccessAction } from "../actions/FriendsActions";
import FriendsCards from "./FriendsCards";

class Index extends React.Component {

    async getFriendsVK(access_token, user_id) {
        return await jsonp(`https://api.vk.com/method/friends.get?access_token=${access_token}&user_id=${user_id}&order=random&count=5&fields=photo_200,online&v=5.101`, null, (err, data) => {
            if (err) {
                console.error(err.message);
            } else {
                this.props.setFriendsData(data.response.items)
            }
        });
    }

    async componentDidMount() {

        /** Если Cookie не заданы, задаем их и получаем список друзей*/
        const cookieAuth = this.props.cookies.get('authUser');
        if(this.props.cookies.get('authUser') !== undefined) {
            this.props.setAuthData(cookieAuth);
            await this.getFriendsVK(cookieAuth.access_token, cookieAuth.user_id);
            return;
        }

        if (this.props.location.search === "") return;
        const code = this.props.location.search.substring(6, this.props.location.search.length);
        const data = {
            client_id: 7095668,
            client_secret: 'NrRMgsFGoe7LhWyqTYXK',
            redirect_url: 'http://localhost:3000',
            code: code,
        };

        /** Получаем access_token и другую информацию, для выполнения запросов к API VK*/

        if (code !== "") {
            const answer = await axios.post(`http://localhost:4000/token`, data)
                .then((response) => response.data)
                .catch((error) => {
                    console.log(error);
                });
            this.props.history.push("/");

            /** Задаем значения Cookie*/
            this.props.cookies.set('authUser', answer, { path:'/'});
            this.props.setAuthData(answer);

            /** Получаем список друзей из VK*/
            await this.getFriendsVK(answer.access_token, answer.user_id);
        }
    }

    render() {

        const { access_token } = this.props.auth;

        return (
            <div>
                {(access_token === '') ?
                    <a href="https://oauth.vk.com/authorize?client_id=7095668&display=popup&redirect_uri=http://localhost:3000&scope=friends&response_type=code&v=5.101"><Button type="primary">Авторизироваться</Button></a> : <FriendsCards friends={this.props.friends}/> }
            </div>
        )
    }
}

const mapStateToProps = (store, ownProps) => {
    return {
        ...store,
        cookies: ownProps.cookies,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setAuthData: data => dispatch(authSuccessAction(data)),
        setFriendsData: friendsData => dispatch(friendsSuccessAction(friendsData))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Index);