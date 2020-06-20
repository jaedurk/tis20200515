import React, { Component } from 'react'

import CrudListItem from './CrudListItem.js';

export default class CrudList extends Component {
    constructor(props){
        super(props);
    }
    // doDel(id){
    //     //this.props.doDel(id);
    // }
    // doUp(id){
    //     this.props.doUp(id);
    // }
    // doDown(id){
    //     //this.props.doDown(id);
    // }
    // doEdit(id){
    //     //this.props.doEdit(id);
    // }
    render(){

        let rows = this.props.list;
        const trs = rows.map( (man,index)=>{
            return (
                <CrudListItem
                    key={index}
                    man={man}
                    doDel  ={this.props.doDel}
                    doUp   ={this.props.doUp}
                    doDown ={this.props.doDown}
                    doEdit ={this.props.doEdit}
                />
            );
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>POWER</th>
                        <th>CRUD</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        );
    }
}
