import React, { Component } from 'react'
import ProdutDetails from './produt-deatils'
import ProdutForms from './produt-form'
class ProdutList extends Component {
    constructor() {
        super();
        this.state = {
            "Produts": [
                {
                    produtId: 1,
                    productName: 'clothes',
                    produtCost: 1000,
                },
                {
                    produtId: 2,
                    productName: 'Shoes',
                    produtCost: 600,
                },
                {
                    produtId: 3,
                    productName: 'Electrinc produt',
                    produtCost: 20000,
                }
            ],
            selectedProductDeatails: null,
            latestId: 4
        }
    }

    selectedDeatils = (selectedProduct) => {
        console.log('Selcted Produt is', selectedProduct)
        this.setState({
            selectedProductDeatails: selectedProduct
        })

    }

    getProduct = (newproduct) => {
        console.log('getting from child component produt deatails', newproduct)
        let newProdut = Object.assign({}, newproduct, { produtId: this.state.latestId })
        let newProdutList = [...this.state.Produts, newProdut]
        this.setState({
            Produts: newProdutList,
            latestId: this.state.latestId + 1
        })

    }
    render() {
        return (
            <div className="ui grid">
                <h3 className="App">Produts List here </h3>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Produt Id</th>
                            <th>Produt Name</th>
                            <th>Produt Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Produts.map(data =>
                            <tr key={data.produtId} >
                                <td>{data.produtId}</td>
                                <td>{data.productName}</td>
                                <td>{data.produtCost} </td>
                                <td>
                                    <button className="ui primary button"
                                        onClick={() => this.selectedDeatils(data)}
                                    >Save</button>
                                </td>
                            </tr>
                        )}


                    </tbody>
                </table>

                <div className="row">
                    <div className="two wide column">
                        {this.state.selectedProductDeatails && <ProdutDetails produtdeatils={this.state.selectedProductDeatails} />}
                    </div>
                    <div className="two wide column">
                        <ProdutForms addProdut={this.getProduct} />
                    </div>
                </div>

            </div>
        )
    }
}
export default ProdutList;