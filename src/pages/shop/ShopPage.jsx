import React, { Component } from "react";
import shopData from "../../assets/data/shop.data";
import CollectionPreview from "../../components/collectionPreview/CollectionPreview";
class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: shopData,
    };
  }

  render() {
    return (
      <div className="shop-page ">
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
