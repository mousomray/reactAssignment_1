import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
    const [myProducts, setProducts] = useState([]);
    const [myCategories, setCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleCards, setVisibleCards] = useState(6);

    const fetchProducts = async () => {

        const response = await axios.get('https://dummyjson.com/products?skip=0&limit=100');
        setProducts(response.data);
        setFilteredProducts(response.data.products);
        setLoading(false);

    };

    const fetchCategories = async () => {

        const response = await axios.get('https://dummyjson.com/products/categories');
        setCategories(response.data);
        setLoading(false);

    };

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    const handleCategoryClick = (category) => {
        const filtered = category === 'All' ? myProducts.products : myProducts.products.filter(product => product.category === category);
        setFilteredProducts(filtered);
    };

    const handleLoadMore = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards + 6);
    };

    if (loading) {
        return (
            <h1 style={{
                fontSize: '100px',
                color: 'green',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                Loading....
            </h1>
        );
    }

    return (
        <>
            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero">
                <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

                    <div class="carousel-inner" role="listbox">

                        {/* <!-- Slide 1 --> */}
                        <div class="carousel-item active" style={{ backgroundImage: 'url(assets/img/slide1.jpeg)' }}>
                            <div class="carousel-container">
                                <div class="carousel-content animate__animated animate__fadeInUp">
                                    <h2>Welcome to <span>My store</span></h2>
                                    <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>

                                </div>
                            </div>
                        </div>

                        {/* <!-- Slide 2 --> */}
                        <div class="carousel-item" style={{ backgroundImage: 'url(assets/img/slide2.jpeg)' }}>
                            <div class="carousel-container">
                                <div class="carousel-content animate__animated animate__fadeInUp">
                                    <h2>Lorem Ipsum Dolor</h2>
                                    <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Slide 3 --> */}
                        <div class="carousel-item" style={{ backgroundImage: 'url(assets/img/slide3.jpeg)' }}>
                            <div class="carousel-container">
                                <div class="carousel-content animate__animated animate__fadeInUp">
                                    <h2>Sequi ea ut et est quaerat</h2>
                                    <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                    <div class="text-center"><a href="" class="btn-get-started">Read More</a></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>

                    <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>

                    <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

                </div>
            </section>
            {/* <!-- End Hero --> */}


            <div className="container" data-aos="fade-up">
                <div className="row">
                    {/* Sidebar categories */}
                    <div className="col-md-3" style={{ marginTop: '150px' }}>
                        <div className="box" style={{ height: 'auto', padding: '20px', border: '2px solid black', borderRadius: '30px' }}>
                            <h3 className="sidebar-title" style={{ marginBottom: '20px' }}>Categories</h3>
                            <ul className="list-unstyled">
                                <li style={{ textDecoration: 'none' }}>
                                    <button className="btn btn-link" onClick={() => handleCategoryClick('All')} style={{ color: 'green', textDecoration: 'none' }}>
                                        All <span>({myProducts.products.length})</span>
                                    </button>
                                </li>
                                {myCategories.map((category, index) => (
                                    <li key={index}>
                                        <button className="btn btn-link mt-2" onClick={() => handleCategoryClick(category)} style={{ color: 'green', textDecoration: 'none' }}>
                                            {category} <span>({myProducts.products.filter(product => product.category === category).length})</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* End sidebar categories */}

                    {/* Pricing Section */}
                    <div className="col-md-9">
                        <section id="pricing" className="pricing">
                            <div className="row mt-5">
                                {filteredProducts.slice(0, visibleCards).map((product, index) => (
                                    <div className="col-md-4 mb-5" key={index}>
                                        <div className="box mb-5" style={{ height: '550px' }}>
                                            <img src={product.thumbnail} className="card-img-top" alt="" style={{ height: '300px' }} />
                                            <p>{product.description}</p>
                                            <div>
                                                <Link to={`/productdetails/${product?.id}`} className="btn btn-buy">Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {visibleCards < filteredProducts.length && (
                                <div className="text-center mt-4">
                                    <button className="btn btn-buy" onClick={handleLoadMore}>Load More</button>
                                </div>
                            )}
                        </section>
                    </div>
                    {/* End Pricing Section */}
                </div>
            </div>
        </>
    );
}

export default Product;
