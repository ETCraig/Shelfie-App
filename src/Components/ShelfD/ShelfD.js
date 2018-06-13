import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ShelfD.css';

export default class ShelfD extends Component {
    render() {
        return(
            <div>
            <div className = "dHeader">
                <h1 className = "dTitle">Shelf D</h1>
            </div>
            <div className = "dBins">
                <Link to = "/ShelfD/bin1" className = "b1"><h2>Bin 1</h2></Link>
                <Link to = "/ShelfD/bin2" className = "b2"><h2>Bin 2</h2></Link>
                <Link to = "/ShelfD/bin3" className = "b3"><h2>Bin 3</h2></Link>
                <Link to = "/ShelfD/bin4" className = "b4"><h2>Bin 4</h2></Link>
                <Link to = "" className = "addIn"><h2>+ Add Inventory</h2></Link>
            </div>
            </div>
        );
    }
}