import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Productdetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({ images: [] });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    setData(response.data);
    console.log(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1 style={{fontSize:'100px',color:'green',display:'flex',justifyContent:'center',alignItems: 'center', height: '100vh'}}>Loading....</h1>;
  }

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col text-center"><h1 style={{fontSize:'50px',color:'red'}}>{data.title}</h1></div>
        </div>

        {/*Slider part*/}

        <div class="row mt-5">

          <div class="col-md-6 align-self-center">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                {data?.images?.map((index) => (
                  <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                ))}
              </ol>
              <div className="carousel-inner" >
                {data?.images?.map((image, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img src={image} className="d-block w-100" style={{ height: '500px' }} alt='' />
                  </div>
                ))}
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

          <div class="col-md-6 align-self-center p-5">
            <h3 className="card-text"><b>Price:</b> {data.price}</h3>
            <h3 className="card-text"><b>Discount:</b> {data.discountPercentage}</h3>
            <h3 className="card-text"><b>Rating:</b> {data.rating}</h3>
            <h3 className="card-text"><b>Stock:</b> {data.stock}</h3>
            <h3 className="card-text"><b>Brand:</b> {data.brand}</h3>
            <h3 className="card-text"><b>Category:</b> {data.category}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productdetails;
