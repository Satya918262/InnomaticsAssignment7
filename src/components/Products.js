import React from 'react';

const Products = () => {
    const productCategories = [
        {
            category: 'Smartphones',
            products: [
                { name: 'Iphone', img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708674453/Croma%20Assets/Communication/Mobiles/Images/300792_0_luu1mj.png' },
                { name: 'Samsung', img: 'https://m.media-amazon.com/images/I/71IfBk7ET0L.jpg' },
                { name: 'Oppo', img: 'https://www.oppo.com/content/dam/oppo-campaign-site/in/events/oppo-product/image-link/march-2023/K12x_5G_Breeze_Blue_1200X200.png' },
                
            ],
        },
        {
            category: 'Tablets',
            products: [
                { name: 'Redmi Tablet', img: 'https://media.croma.com/image/upload/v1722519400/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/308839_0_qnpspw.png' },
                { name: 'Lenovo Tablet', img: 'https://p2-ofp.static.pub//fes/cms/2024/10/09/464mftkstd2tnm4d93hsfe4z493xvb407416.jpg' },
                { name: 'Apple Ipad', img: 'https://www.poojaratele.com/media/catalog/product/cache/28b568fbf82d79c53c9eab7361be58d0/a/p/apple-ipad-pro-10p5inch-wifi-rgold-thum2.jpg' },
           
            ],
        },
    ];

    return (
        <div className="container mt-5">
            {productCategories.map((category, index) => (
                <div key={index}>
                    <h2 className="text-center mb-4">{category.category}</h2>
                    <div className="row mb-5">
                        {category.products.map((product, productIndex) => (
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-4" key={productIndex}>
                                <div className="card">
                                    <img src={product.img} className="card-img-top" alt={product.name} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{product.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
