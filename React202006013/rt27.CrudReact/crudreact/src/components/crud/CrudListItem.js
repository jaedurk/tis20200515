import React, { Component } from 'react'

export default class CrudListItem extends Component {
    state = {
        isEditMode : false
    }
    constructor(props){
        super(props);
        this.doUp = this.doUp.bind(this);
        this.doDown = this.doDown.bind(this);
        this.doEdit = this.doEdit.bind(this);
        this.doDel = this.doDel.bind(this);
        this.doSave = this.doSave.bind(this);

        // ref 설정
        this.refEditId    = React.createRef();
        this.refEditName  = React.createRef();
        this.refEditPower = React.createRef();
    }
    doUp(){
        const { id } = this.props.man;
        this.props.doUp(id);
    }
    doDown(){
        const { id } = this.props.man;
        this.props.doDown(id);
    }
    doEdit(){
        this.setState((prevState, prop)=>{
            return {
                isEditMode : !prevState.isEditMode
            };
        });
    }
    doDel(){
        const { id } = this.props.man;
        this.props.doDel(id);
    }
    doSave(){
        const { id } = this.props.man;
        this.setState((prevState, prop)=>{
            return {
                isEditMode : !prevState.isEditMode
            };
        });
        const newMan ={
            id   :id,
            name :this.refEditName.current.value,
            power: Number(this.refEditPower.current.value),
        }
        this.props.doEdit(newMan);
    }
    render(props){

        console.log(this.props.man);
        const { id, name, power } = this.props.man;

        const  formEdit = (
            <tr key={id} className={"strong"}>
                <td>{id}</td>
                <td><input type="text" name="name"  ref={this.refEditName} defaultValue={name}  /></td>
                <td><input type="text" name="power" ref={this.refEditPower} defaultValue={power} /></td>
                <td>
                    <button onClick={this.doUp}>Power Up</button>
                    <button onClick={this.doDown}>Power Down</button>
                    <button onClick={this.doSave}>Save</button>
                    <button>Del</button>
                </td>
            </tr>
        )

        const formView = (
            <tr key={id} className={"strong"}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{power}</td>
                <td>
                    <button onClick={this.doUp}>Power Up</button>
                    <button onClick={this.doDown}>Power Down</button>
                    <button onClick={this.doEdit}>Edit</button>
                    <button onClick={this.doDel}>Del</button>
                </td>
            </tr>
        )

        return ( this.state.isEditMode === true? formEdit : formView );
    }
}
