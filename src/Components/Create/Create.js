import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Create.css';

export default class Create extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            price: '',
            image: ''
        };
    }
    create() {
        if(window.confirm('Add Product?')) {
            let changes = {
                'name': this.state.name,
                'price': this.state.price,
                'image': this.state.image
            };
            axios.post(`/api/create_bin/${this.props.match.params.id}`, changes)
                .then(res => {
                    console.log(res)
                    this.props.history.push(`/read_bin/${res.data[0].shelf_id + res.data[0].bin_id}`)
                });
        }
        this.setState({name: '', price: '', image: ''});
    }
    render() {
        return(
            <div className = 'createComp'>
            <div id = 'binsHeader'>
            <div id = 'bckGround'>
            <div className = 'icon' id = 'icon'>
                <Link to='/'><img src={require('../logo.png')} alt="shelfie-logo" /></Link>
            </div>
            </div>
            <div className = 'shelfTitle' id = 'shelfTitle'>
                <Link to = {`/bins/${this.props.match.params.id[0]}`}><h1>Shelf {this.props.match.params.id[0]}</h1></Link>
            </div>
            <div id = 'binBckGround'>
            <div className = 'binTitle' id = 'binTitle'>
                <Link to = {`/read_bin/${this.props.match.params.id[0] + this.props.match.params.id[1]}`}><h1> Add to Bin {this.props.match.params.id[1]}</h1></Link>
            </div>
            </div>
            </div>
            <div className = 'edit' id = 'edit'>
                <span>Name</span>
                <br />
                <input onChange = {(e) => this.setState({name: e.target.value})} />
                <br />
                <span>Price</span>
                <br />
                <input onChange = {(e) => this.setState({price: e.target.value})} />
                <br />
                <span>Image URL</span>
                <br />
                <input onChange = {(e) => this.setState({image: e.target.value})} />
                <br />
                <button onClick = {() => this.create()} className = 'save'><Link to = {`/read_bin/${this.props.match.params.id}`} id = 'Add'>+ Add to Inventory</Link></button>
                <button><Link to = {`/bins/${this.props.match.params.id[0]}`} id = 'cancel'>Cancel</Link></button>
            </div>
            </div>
        );
    }
}