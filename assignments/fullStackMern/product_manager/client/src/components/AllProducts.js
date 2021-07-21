import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "@reach/router"

const AllProducts = () => {
    const [Products, setProducts] = useState([])
    const [deleteclicked, setDeleteClicked] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/")
        .then(res => {

            console.log("response below........")
            console.log(res.data)
            setProducts(res.data.Products)
        
        })
        .catch(err=> console.log("error with axios call", err))
    }, [deleteclicked])

    const deleteProduct=(e, productid )=>{

        console.log(productid)
        axios.delete(`http://localhost:8000/api/products/${productid}`)
            .then(res=>{
            
                console.log(res)
                
                setDeleteClicked(!deleteclicked)

            })
            .catch(err=> console.log(err))

    }
    

    return (
        <div>
            <h2>All products</h2>
            {Products.map((p, idx)=>{
                return <div key={idx} >
                    <div >
                        
                        <Link to={`/${p._id}`} >{p.title}</Link>
                        <Link to={`/${p._id}/edit`} className="btn btn-primary btn-sm m-3">Edit</Link>
                        <button onClick={(e)=>deleteProduct(e, p._id)} className="btn btn-danger btn-sm">Delete</button>
                    </div>
            </div>
            })}
            
        </div>
    );
};

export default AllProducts;