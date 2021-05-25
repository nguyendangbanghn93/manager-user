import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opned: false,
      feild: {}
    }
  }
  changeValue = (e) => {
    let feild = this.state.feild;
    feild[e.target.name] = e.target.value;
    this.setState({
      feild: feild
    })
  }
  renderBtn = () => {
    if (this.state.opned) {
      return (<>
        <div onClick={() => { this.setState({ opned: false }) }} className="btn bn w1 ptb7 bgc6 tac cf">Đóng</div>
        <div className="tac pa10 bb1 bss bce">Thêm mới user vào hệ thống</div>
        <div className="ptb10 plr15">
          <form>
          <input onChange={(e) => { this.changeValue(e) }} type="text" className="w1 pa5 mtb10" placeholder="Tên user" name="fullname" />
          <input onChange={(e) => { this.changeValue(e) }} type="text" className="w1 pa5 mtb10" placeholder="Điện thoại" name="phoneNumber" />
          <select defaultValue="3" onChange={(e) => { this.changeValue(e) }} name="role" className="w1 pa5 mtb10">
            <option value="1">Admin</option>
            <option value="2">User</option>
            <option value="3">Khách</option>
          </select>
          <input onClick={(e) => { this.props.addData(this.state.feild) }} type="reset" className="btn bn cf bgcbd pa7 w1 mtb10 tac bra5" value="Tạo mới"/>
          </form>
        </div>
      </>)
    } else {
      return (
        <div onClick={() => { this.setState({ opned: true }) }} className="btn bn w1 ptb7 bgcgd tac cf">Thêm mới</div>
      )
    }
  }
  render() {
    return (
      <div className="bra5 bw1 bss bce oh">
        {this.renderBtn()}
      </div>
    );
  }
}

export default Form;
