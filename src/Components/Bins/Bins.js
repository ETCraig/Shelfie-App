import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Bins.css';

export default class Bins extends Component {
    constructor() {
        super()

        this.state = {
            bins: []
        };
    }
    componentDidMount() {
        axios.get(`/api/read_bins/${this.props.match.params.id}`, console.log('sent', this.props.match.params.id)).then(res => {
            console.log('res', res);
            this.setState({bins: res.data});
        });
    }
    render() {
        this.state.bins.sort((a, b) => a.bin_id > b.bin_id);
        let binButtons = this.state.bins.map((e, i) => {
            if (e.name) {
                return (
                    <Link to={`/read_bin/${e.shelf_id}${e.bin_id}`} key={i}>
                        <div className='container'>
                            <span> Bin {e.bin_id} </span>
                        </div>
                    </Link>
                );
            } else {
                return (
                    <Link to={`/create_bin/${e.shelf_id}${e.bin_id}`} key={i}>
                        <div className='container' id='addingButton'>
                            <span> + Add Inventory to bin </span>
                        </div>
                    </Link>
                );
            }
        });
        return(
            <div className = 'binsComp'>
                <div className = 'binsHeader'>
                <div className = 'bckGround'>
                <div className = 'icon'>
                    <Link to='/'><img src={require('../logo.png')} alt="shelfie-logo" /></Link>
                </div>
                </div>
                <div className = 'binsTitle'>
                    <Link to = {`/bins/${this.props.match.params.id}`}><h1>Shelf {this.props.match.params.id}</h1></Link>
                </div>
                </div>
            <div className = 'binsButtons'>
                <h2>{binButtons}</h2>
            </div>
            </div>
        );
    }
}