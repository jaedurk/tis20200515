import React, { Component } from 'react'

export default class CrudInput extends Component {
    state = {
        name:"",
        power:0
    }
    constructor(props){
        super(props);

        this.refUserName = React.createRef();
        this.refUserPower = React.createRef();

        this.insert = this.insert.bind(this);
    }
    insert(e){
        if(this.refUserName.current.value.trim() === ''){
            alert('이름을 입력하세요');
            this.refUserName.current.focus();
            e.preventDefault();
            return false;
        }
        if(this.refUserName.current.value.trim() === ''){
            alert('파워를 입력하세요');
            this.refUserPower.current.focus();
            e.preventDefault();
            return false;
        }
        if( isNaN( Number(this.refUserPower.current.value) ) ){
            alert('파워에 숫자를 입력하세요');
            this.refUserPower.current.value="";
            this.refUserPower.current.focus();
            e.preventDefault();
            return false;
        }
        //input에 입력한 값들을 list에 추가하기 push() 활용

        /* 최대,최소값
        array.reduce(function(prev, next){
            return prev>next? prev:next;  //최대값
            return prev>next? next:prev;  //최대값
        })
        */
        let user = {
            name: this.refUserName.current.value,
            power: this.refUserPower.current.value,
        }
        this.props.insert( user );

        //this.refUserName.current.value="";
        //this.refUserPower.current.value=0;
    }
    render() {

        const {name, power} = this.state;
        return(
            <div>
                {/* <!-- list 데이터를 table형태로 출력하고 power가 300이상인 사람은 글자색을 red로 bold스타일로 출력하세요. --> */ }
                <h1>Creat Read Update Delete</h1>
                <form>
                    <div>
                        <label htmlFor="">Name : </label>
                        <input type="text" name="name" ref={this.refUserName} defaultValue={name} />
                    </div>
                    <div>
                        <label htmlFor="">Power : </label>
                        <input type="text" name="power" ref={this.refUserPower} defaultValue={power} />
                    </div>
                    <input type="reset" onClick={this.insert} value="Add" />
                </form>
            </div>
        )
    }
}
