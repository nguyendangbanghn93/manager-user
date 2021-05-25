import React, { Component } from 'react';

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            feild: {}
        }
    }
    
    roleToString = function (r) {
        switch (parseInt(r)) {
            case 1:
                return "Adimin";
            case 2:
                return "User";
            default:
                return "Khách";
        }
    }
    removeRow = () => {
        if (this.state.edit) {
            this.setState({ edit: !this.state.edit });
        } else {
            this.props.deleteData(this.props.id);
        }
    }
    editRow = () => {
        if (this.state.edit) {
            let data = this.state.feild;
            data.id = this.props.id;
            this.props.updateData(data);
        }
        this.setState({edit:!this.state.edit})    
    }
    changeValue = (e) => {
        let feild = this.state.feild;
        feild[e.target.name] = e.target.value;
        this.setState({ feild: feild });
    }
    render() {
        if (this.state.remove) {
            return <></>;
        }
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.state.edit?<input onChange={(e) => { this.changeValue(e) }}name="fullname" type="text" className="w1 pa5 bgcf" defaultValue={this.props.fullname}/>:this.props.fullname}</td>
                <td>{this.state.edit?<input onChange={(e) => { this.changeValue(e) }} type="text" className="w1 pa5 bgcf" defaultValue={this.props.phoneNumber}/>:this.props.phoneNumber}</td>
                <td>{this.state.edit ? <select onChange={(e) => { this.changeValue(e) }} className="w1 pa5 bgcf" defaultValue={this.props.role}>
                    <option value="1">Admin</option>
                    <option value="2">User</option>
                    <option value="3">Khách</option>
                </select>:this.roleToString(this.props.role)}</td>
                <td className="grid tac">
                    <div className="grid tac bra5 oh">
                        <div onClick={this.editRow} className="btn bn bgcgd pa7 plr15 cf">{ this.state.edit ?"Lưu":"Sửa"}</div>
                        <div onClick={this.removeRow} className="btn bn bgcod pa7 plr15 cf">{ this.state.edit ?"Đóng":"Xóa"}</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Row;
