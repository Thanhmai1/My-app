import React from "react";

function User({ image, name, price, rating }) {
  return (
    <div className="col-lg-4 col-md-12 mb-4">
        <div className="item-container">
      <img className="user-profile-pic" src={image} alt={name} /><br/>
      <h3>{name}</h3>
      <h5>Price: ${price}</h5>
      <h5>Rating: {rating}⭐</h5>
      </div>
    </div>
  );
}

const ItemList = () => {
  const items = [
    {
      id: 1,
      image:
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00c34460f4a01a31059eb82efbabaf731e84b526_full.jpg",
      name: "Item 1",
      price: 25.99,
      rating: 4.5,
    },
    {
      id: 2,
      image:
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/40/407a2e0a81c5ce5cb4f1233375a91e29e0b39b44_full.jpg",
      name: "Item 2",
      price: 34.99,
      rating: 3.8,
    },
    {
      id: 3,
      image:
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/54/543cc407c2a86bbda9884004d60ace92f72606dc_full.jpg",
      name: "Item 3",
      price: 34.67,
      rating: 4.7,
    },
    {
      id: 4,
      image:
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/001f6fe3b93351d5be5af382a3c875a3fea3e590_full.jpg",
      name: "Item 4",
      price: 49.89,
      rating: 4.8,
    },
    {
        id: 5,
        image:
          "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00764716bfffa8e7c8847779ebad98a291c34d23_full.jpg",
        name: "Item 5",
        price: 59.81,
        rating: 2.8,
      },
      {
        id: 6,
        image:
          "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/90/90a769b06573563b9cdd77a8826718eb6ca7c3f4_full.jpg",
        name: "Item 6",
        price: 70.9,
        rating: 4.3,
      },
      {
        id: 7,
        image:
          "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/5c/5c03c62e587ffe069f208e5728e24db550458ec1_full.jpg",
        name: "Item 7",
        price: 81.79,
        rating: 5.0,
      },
      {
        id: 8,
        image:
          "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/f1/f1dea92131d753dd405ea10df8d15dd76fc2567e_full.jpg",
        name: "Item 8",
        price: 79.39,
        rating: 2.0,
      },
  ];

  return (
    <div className="App">
      <div className="row ">
        {items.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-6 mb-4  ">
            <User
              name={item.name}
              image={item.image}
              rating={item.rating}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default ItemList;