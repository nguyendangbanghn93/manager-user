import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="pb51 bgrn bgpc bgsc pr" style={{ backgroundImage: "url('" + this.props.img + "')" }}>
                <div className="pa t0 l0 r0 b0" style={{ background: "rgb(0 0 0 / 54%)" }}></div>
                <div className="pa t50 l50 tt fs3 fwb ts cf ttu">{this.props.title}</div>
            </div>
        );
    }
}

export default Header;
