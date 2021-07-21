import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const ViewProduct = (props) => {

    const [productInfo, setProductInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res=> {
               
                console.log("response below......")
                console.log(res)
                console.log("....res.............")

                console.log(res.data.Product)
               
                setProductInfo(res.data.Product)

            })
            .catch(err=> console.log("error", err))
    },[])


    const deleteproduct =(e)=>{
        console.log("inside delete function")
        axios.delete(`http://localhost:8000/api/products/${props.id}`)
            .then(res=>{
                console.log(res)     
                //navigate back to home after deleting
                navigate("/")
            })
            .catch(err=> console.log("error", err))
    }
    
    return (
        <div>
            <h3>{productInfo.title}</h3>
            <p>Price: {productInfo.price} </p>
            <p>Description: {productInfo.description}</p>
            <button onClick= {deleteproduct} className="btn btn-danger btn-sm">Delete</button>
        </div>
        
    );
};


export default ViewProduct;