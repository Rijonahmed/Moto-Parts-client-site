import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();


  const onSubmit = async data => {

    // console.log(data)

    const addParts = {
      name: data.name,
      price: data.paice,
      quantity: data.quantity,
      minimumOrderQuantity: data.minimumOrderQuantity,
      images: data.imagesUrl,
      description: data.description

    }


    fetch('https://moto-parts-server-api.onrender.com/parts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addParts)

    })
      .then(res => res.json())
      .then(data => {
        toast.success('product inserted success');

        reset();

      })


  };




  return (
    <div className='w-6/12 m-auto'>
      <h1 className='text-2xl '>Add a Product</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>

          </label>
          <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs"
            {...register("name")}
            required
          />

        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">paice</span>

          </label>
          <input type="number" placeholder="paice"
            className="input input-bordered w-full max-w-xs"
            {...register("paice")}
            required
          />

        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">quantity</span>

          </label>
          <input type="number" placeholder="Enter available quantity" className="input input-bordered w-full max-w-xs"
            {...register("quantity")}
            required
          />

        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">minimum Order Quantity</span>

          </label>
          <input type="number" placeholder="Enter minimum Quantity" className="input input-bordered w-full max-w-xs"
            {...register("minimumOrderQuantity")}
            required
          />

        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Images Url link</span>

          </label>
          <input type="text" placeholder="images Url link" className="input input-bordered w-full max-w-xs"
            {...register("imagesUrl")}
            required
          />

        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>

          </label>
          <textarea name='description' className="textarea textarea-bordered h-8" placeholder="Description"  {...register("description")} required></textarea>
        </div>




        <input className='btn w-full max-w-xs my-5' type="submit" value='Add Product' />
      </form>

    </div>
  );
};

export default AddProduct;