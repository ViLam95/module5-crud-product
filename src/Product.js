import {Component} from "react";
import "./Product.css";




export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index:0,
            name:"",
            action:"ADD PRODUCT",
            search: '',
            products: [
                {
                    name: 'Iphone',
                    price: 700
                },
                {
                    name: 'Sam Sung',
                    price: 650
                },
                {
                    name: 'Nokia',
                    price: 1000
                }
            ],
            filteredProducts: []
        };
    };

    changeName = (e) => {
        this.setState({
            name: e.target.value
        });
    };
    changePrice = (e) => {
        this.setState({
            price: e.target.value
        });
    };

    addProduct = () => {
        if(!this.state.products.find((product) => product.name === this.state.name)){
            this.setState({
                products:[
                    ...this.state.products,
                    {name: this.state.name, price: this.state.price }
                ],
                name: "",
                price: ""
            });
        }
    };

    editProduct = (product,index) => {
        this.setState({
            action: "UPDATE PRODUCT",
            name: product.name,
            price: product.price,
            index: index
        });
    };

    updateProduct = () => {
        const { index, name, price, products } = this.state;
        const updatedProducts = [...products];
        updatedProducts[index] = { name, price: parseInt(price) };
        this.setState({
            products: updatedProducts,
            name: "",
            price: "",
            action: "ADD PRODUCT"
        });
    }

    searchByName = (name) => {
        if (name === "") {
            this.setState({
                filteredProducts: [],
                search: ""
            });
        } else {
            const filteredProducts = this.state.products.filter((product) =>
                product.name.toLowerCase().includes(name.toLowerCase())
            );
            this.setState({
                filteredProducts: filteredProducts,
                search: name
            });
        }
    };
        deleteProduct = (name) => this.setState({
            products:this.state.products.filter(product => product.name !== name)
        });

    render() {
        const { products, filteredProducts, name, price, action, search } = this.state;
        const displayProducts = search === "" ? products : filteredProducts;

        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 style={{color: "#8d177d"}}>{action}</h1>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="" className="form-control" onChange={this.changeName} value={name}
                                />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input type="text" name=""  className="form-control" onChange={this.changePrice} value={price}
                                />
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-primary"
                                        onClick={action === "ADD PRODUCT" ? this.addProduct : this.updateProduct}>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*form table*/}

                <div className={"col-md-8"}>
                        <h1 style={{color: "#8d177d"}}>List Product</h1>
                    <div className={"search-name"}>
                        <input type="text" onChange={(e) => this.searchByName(e.target.value)} id={"searchName"} placeholder={"Search"} />
                    </div>
                        <table className={"product-table"}>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {displayProducts.map((product,index) => (
                                <tr key = {index}>
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button className="btn btn-warning" onClick={() => this.editProduct(product, index)}>
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => this.deleteProduct(product.name)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                </div>
            </>
        )
    }
}
