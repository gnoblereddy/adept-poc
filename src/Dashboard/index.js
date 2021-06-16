import React from 'react';
import axios from 'axios';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    // componentDidMount() {
    //     axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then(res => {
    //         console.log('-----------1---------------');
    //         let top10 = res.data;
    //         let data = [];
    //         top10 = top10.splice(0, 10);
    //         top10?.map(id => {
    //             axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(res => {
    //                 console.log('-----------2---------------');
    //                 let commentIds = res?.data?.kids;
    //                 let storyData = res?.data;
    //                 // console.log('storyData----', storyData);
    //                 commentIds = commentIds?.splice(0, 10);
    //                 // console.log('commentIds---', commentIds);
    //                 commentIds?.map((commentId, indx) => {
    //                     axios.get(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`).then(res => {
    //                         console.log('-----------3---------------');
    //                         // console.log('res commentID----', res?.data, storyData);
    //                         let commentData = res?.data;
    //                         data.push({
    //                             id: storyData,
    //                             commentData: []
    //                         });
    //                         console.log('---------', storyData, res.data, storyData.id === res.data.parent, indx)
    //                         if (storyData.id === res.data.parent) {
    //                             data[indx].commentData.push(commentData);
    //                         }

    //                         // console.log('data-----', data);
    //                     })
    //                 })
    //             })
    //         });
    //     });
    // }
    render() {
        return (
            <div>Dashboard</div>
        );
    }

};