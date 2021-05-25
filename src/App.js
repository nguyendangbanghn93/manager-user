import './App.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Table from './components/Table/Table';
import Form from './components/Form/Form';
import data from './data/data';
import { v4 as uuidv4 } from 'uuid';
export default class App extends Component {
  constructor(props) {
    super(props);
    let local;
    try {
      local = JSON.parse(localStorage.getItem("userData"));
    } catch (error) {

    }
    this.state = { data: local?local:data ,search: false}
  }
  updateLocalStorage = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    this.setState({data:data});
  }
  addData = (d) => {
    let data = this.state.data;
    d.id =uuidv4();
    data.push(d);
    this.updateLocalStorage(data);
  }
  updateData = (d) => {
    let data = this.state.data;
    console.log(d)
    data.map(function (v,i) {
      if (v.id === d.id) {
        Object.assign(data[i], d);
      }
      return true;
    })
    this.updateLocalStorage(data);
  }
  deleteData = (i) => {
    let data = this.state.data;
    data.map(function (d, j) {
      if (i === d.id) {
        console.log(j);
        data.splice(j, 1);
      }
      return true;
    })
    this.updateLocalStorage(data);
  }
  searchData = (str) => {
    let data = [];
    if (typeof str === 'string' && str.length > 2) {
      this.state.data.map(function (d, i) {
        if (typeof d.fullname === 'string' && d.fullname.indexOf(str) !== -1) {
          data.push(d);
        }
        return true;
      })
      this.setState({ search: data });
    } else {
      this.setState({ search: false })
    }
  }
  render() {
    const data = this.state.search ? this.state.search : this.state.data;
    console.log()
    return (
      <div>
        <Header img="https://t3.ftcdn.net/jpg/02/68/48/86/360_F_268488616_wcoB2JnGbOD2u3bpn2GPmu0KJQ4Ah66T.jpg" title="Phần mềm quản lý tài khoản" />
        <div className="container">
          <div className="plr10 ptb25 grid bb1 bss bcd">
            <div className="w50">
              <Search search={this.searchData}/>
            </div>
          </div>
          <div className="df jcsc fww">
            <div className="col-xs-12 col-md-9 pa10">
              <Table dataUser={data} updateData={this.updateData} deleteData={this.deleteData} />
            </div>
            <div className="col-xs-12 col-md-3 pa10">
              <Form addData={this.addData} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}