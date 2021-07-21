import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {navigate} from '@reach/router'

const EditProduct = (props) => {

    const [productInfo, setProductInfo]= useState({
        title:"",
        price:"",
        description:""
    })

    const [formErrors, setFormErrors] = useState({})


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res=>{
                console.log("response below........")
                console.log(res)
               
                setProductInfo(res.data.Product)

            })
            .catch(err=> console.log(err))
    },[])

    const changehandler = (e)=>{
        console.log("changing element info")
        console.log(e.target.value)
        setProductInfo({
            ...productInfo,
            [e.target.name]:e.target.value
        })

    }


    const submithandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${props.id}`, productInfo )
            .then(res=> {
                console.log("Updating.........")
                //if there are errors, stay on page and set the erros
                if(res.data.error){
                    console.log("Please fill out the form correctly!")
                    setFormErrors(res.data.error.errors) 

                //if there arent any errosc go to home page
                }else{
                   
                    navigate("/")
                }

            })
            .catch(err=> console.log(err))
    }

    const deleteproduct =(e)=>{
        console.log("inside delete function in edit component")
        axios.delete(`http://localhost:8000/api/products/${props.id}`)
            .then(res=>{
                console.log(res)     
                //navigate back to home after deleting
                navigate("/")
            })
            .catch(err=> console.log("error", err))
    }

    return (
        <div className="container">
           <h1>Editing product number: {props.id} </h1> 
           <form onSubmit={submithandler}>
              <div className="form-group">
                  <label>Title:</label>
                  <input onChange= {changehandler} type="text" name="title" id="" className="form-control" value={productInfo.title} />
                 {formErrors.title? <p className="text-danger">{formErrors.title.message}</p>:""} 
              </div>
              <div className="form-group">
                  <label>Price</label>
                  <input onChange= {changehandler} type="text" name="price" id="" className="form-control" value={productInfo.price}/>
                   {formErrors.price? <p className="text-danger">{formErrors.price.message}</p>: ""} 
              </div>
              <div className="form-group">
                  <label>Description</label>
                  <input onChange= {changehandler} type="text" name="description" id="" className="form-control" value={productInfo.description} />
                  {formErrors.description? <p className="text-danger">{formErrors.description.message}</p>: ""}
              </div>
              <input type="submit" value="Update product" />
              <button onClick= {deleteproduct} className="btn btn-danger btn-sm m-3">Delete</button>
          </form>
        </div>
    );
};

export default EditProduct;