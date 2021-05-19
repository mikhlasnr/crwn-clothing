import React, { Component } from "react";

import { Route } from "react-router";

import CollectionsOverviewContainer from "../../components/collectionOverview/CollectionsOverview.container";
import CollectionPageContainer from "../../components/collectionPage/CollectionPage.container";

import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.action";

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page ">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />

        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
