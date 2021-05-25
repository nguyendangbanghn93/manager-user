import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { key: "" };
    }
    changeValue = (e) => {
        if (e.target.value.length > 0) {
            this.setState({ key: e.target.value})    
        } else {
            this.setState({ key: e.target.value})    
            this.props.search()
        }
        
    }
    render() {
        return (
            <div className="df">
                <input onChange={(e) => { this.changeValue(e) }}type="text" placeholder="Nhập từ khóa" className="pa7 fl1" />
                <div onClick={()=>{this.props.search(this.state.key)}} className=" ml15 btn bn bgcod bra5 cf pa7 plr15">Tìm</div>
            </div>
        );
    }
}

export default Search;
