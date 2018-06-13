import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Bin.css';

export default class Bin extends Component {
    constructor() {
        super();
        this.state = {
            bin: [],
            bool: false,
            name: "",
            price: 0,
            image: ""
        };
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.fields = this.fields.bind(this);
    }
    componentDidMount() {
        axios.get(`/api/read_bin/${this.props.match.params.id}`).then(res => {
            this.setState({bin: res.data});
        });
    }
    componentWillReceiveProps() {
        axios.get(`/api/read_bin/${this.props.match.params.id}`).then(res => {
            this.setState({bin: res.data});
        });
    }
    update() {
        if (window.confirm('Change Item?')) {
            let newProduct = {
                "name": this.state.name ? this.state.name : this.state.bin.name,
                "price": this.state.price ? this.state.price : this.state.bin.price,
                "image": this.state.image ? this.state.image : this.state.bin.image
            };
            console.log(newProduct);
            axios.put(`/api/update_bin/${this.props.match.params.id}`, newProduct).then(res => {
                this.setState({bin: res.data});
            });
        }
        axios.get(`/api/read_bin/${this.props.match.params.id}`, console.log(this.props.match.params.id)).then(res => {
            this.setState({bin: res.data});
        });
        this.setState({
            bool: false,
            name: "",
            price: 0,
            image: ""
        });
    }
    remove() {
        if (window.confirm('Delete Item!?')) {
            axios.delete(`/api/delete_bin/${this.props.match.params.id}`).then(res => {
                this.setState({bin: res.data});
            });
        }
        axios.get(`/api/read_bin/${this.props.match.params.id}`, console.log(this.props.match.params.id)).then(res => {
            this.setState({bin: res.data});
        });
        this.setState({
            bool: false,
            name: "",
            price: 0,
            image: ""
        });
    }
    fields() {
        if (this.state.bin.length > 0 && this.state.bool === false) {
            return (
                <div className='edit'>
                    <img src={this.state.bin[0].image} alt={this.state.bin[0].name}/>
                    <span> Name </span>
                    <br/>
                    <input type="text" value={this.state.bin[0].name} readOnly placeholder="Item Name"/>
                    <br/>
                    <span> Price </span>
                    <br/>
                    <input type="text" value={this.state.bin[0].price} readOnly placeholder="Item Price"/>
                    <br/>
                    <span> Image URL </span>
                    <br/>
                    <input type="text" value={this.state.bin[0].image} readOnly placeholder="Image URL"/>
                    <br/>
                    <button onClick={() => this.setState({bool: true})}>EDIT</button>
                    <button onClick={() => this.remove()}>DELETE</button>
                </div>
            );
        }
        else if (this.state.bin.length > 0 && this.state.bool === true) {
            return (
                <div className='edit'>
                    <img src={this.state.bin[0].image} alt={this.state.bin[0].name}/>
                    <span> Name </span>
                    <br/>
                    <input onChange={(e) => this.setState({name: e.target.value})}/>
                    <br/>
                    <span> Price </span>
                    <br/>
                    <input onChange={(e) => this.setState({price: e.target.value})}/>
                    <br/>
                    <span> Image URL </span>
                    <br/>
                    <input onChange={(e) => this.setState({image: e.target.value})}/>
                    <br/>
                    <button onClick={() =>  this.setState({bool: false, name: "", price: 0, image: ""})}>CANCEL</button>
                    <button onClick={() => this.update()} className='save'>SAVE</button>
                </div>
            );
        }
    }
    render() {
        return(
            <div className = 'BinComp'>
            <div className = 'binsHeader'>
            <div className = 'bckGround'>
            <div className = 'icon'>
                <Link to='/'><img src={require('../logo.png')} alt="shelfie-logo" /></Link>
            </div>
            </div>
            <div className = 'shelfTitle'>
                <Link to={`/bins/${this.props.match.params.id[0]}`}><h1> Shelf {this.props.match.params.id[0]} </h1></Link>
            </div>
            <div className = 'binBckGround'>
            <div className = 'binTitle'>
                <Link to = {`/read_bin/${this.props.match.params.id[0] + this.props.match.params.id[1]}`}><h1>Bin {this.props.match.params.id[1]}</h1></Link>
            </div>
            </div>
            </div>
                {this.fields()}
            </div>
        );
    }
}