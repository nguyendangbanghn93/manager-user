import React, { Component } from 'react';
import Row from './Row/Row';

class Table extends Component {
    render() {
        const data = this.props.dataUser;
        const updateData = this.props.updateData;
        const deleteData = this.props.deleteData;
        console.log(data);
        return (
            <table className="w1 mt25 tableV1 tac">
                <thead>
                    <tr className="fwb">
                        <td>STT</td>
                        <td>Tên</td>
                        <td>Điện thoại</td>
                        <td>Quyền</td>
                        <td>Tao tác</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map(function (d, i) {
                        return (<Row key={i} stt={i + 1} fullname={d.fullname} phoneNumber={d.phoneNumber} role={d.role} id={d.id} updateData={updateData} deleteData={deleteData}/>)
                    })}
                </tbody>
            </table>
        );
    }
}

export default Table;
