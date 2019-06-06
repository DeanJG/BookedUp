import React, { Component } from 'react'
import TopPart from './Toppart'
import StepBar from './StepBar'
import HostLine from './HostLine';
import MembersLine from './MembersLine';
import DiscussionBoard from './DiscussionBoard';

export default class Clubs extends Component {

    render () {
        return (
            <>
        <TopPart />
        <StepBar />
        <HostLine />
        <MembersLine />
        <DiscussionBoard/>

            <h1>:)</h1>
            </>
        )
    }
}
