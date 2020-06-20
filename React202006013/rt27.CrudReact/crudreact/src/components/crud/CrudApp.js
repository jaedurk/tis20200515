import React, { Component } from 'react'
import CrudInput from './CrudInput.js';
import CrudList from './CrudList.js';

export default class CrudApp extends Component {
    state = {
        user:{
            id:0,
            name:'',
            power:0,
        },
        list:[
            {id:1, name:'슈퍼맨', power:100, },
            {id:2, name:'아쿠아맨', power:300, },
            {id:3, name:'스파이더맨', power:500, },
            {id:4, name:'배트맨', power:30, },
        ]
    }
    constructor(props){
        super(props);

        this.doUp = this.doUp.bind(this);
        this.doDown = this.doDown.bind(this);
        this.doEdit = this.doEdit.bind(this);
        this.doDel = this.doDel.bind(this);
        this.insert = this.insert.bind(this);
    }

    insert(user){

        // user를 list에 추가하기 push() 나 스프레드 연산자 활용해서

        /* 최대,최소값
        array.reduce(function(prev, next){
            return prev>next? prev:next;  //최대값
            return prev>next? next:prev;  //최대값
        })
        */

        var max = this.state.list.reduce(function(a,b){
            return a.id>b.id? a.id: b.id;
        })
        const newUser={id:max+1, name:user.name, power:user.power};
        let listCopy = [...this.state.list, newUser];

        this.setState( {
            list: listCopy,
            user: { id:0, name:'', power:0 }
        });
    }
    doUp(id){
        //100씩 증가
        let listCopy = this.state.list.map((man)=>{
            if( man.id === id) {
                man.power = Number(man.power) + 100;
            }
            return man;
        });
        this.setState( {list: listCopy});
    }
    doDown(id){
        //50씩 감소
        let listCopy = this.state.list.map((man)=>{
            if( man.id=== id) {
                man.power = Number(man.power) - 50;
            }
            return man;
        });
        this.setState( {list: listCopy});
    }
    doEdit(user){
        //선택한 사람 정보를 input에 보여주기
        let listCopy = this.state.list.map( function(man){
            if( man.id === this.id )
                return this;
            else
                return man;
        }, user);

        this.setState({ list: listCopy });
    }
    doDel(id){
        //배열에서 삭제
        let r = window.confirm("정말로 삭제 하시겠습니까?");
        if( r ) {
            let listCopy = this.state.list.filter((man)=>{
                return man.id!==id;
            });
            this.setState( {list: listCopy});
        }
    }
    render(props){
        return (
        <div>
            <CrudInput {...this.state} insert={this.insert} ></CrudInput>
            <hr/>
            <CrudList {...this.state} doUp={this.doUp} doDown={this.doDown} doEdit={this.doEdit} doDel={this.doDel}></CrudList>
        </div>
        )
    }
}
