import React, { Component } from "react";

import { Route } from "react-router";

import CollectionPage from "../../components/collectionPage/CollectionPage";
import CollectionsOverviewContainer from "../../components/collectionOverview/CollectionsOverview.container";

import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.action";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/wtihSpinner/withSpinner";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, selectIsCollectionsLoaded } = this.props;

    return (
      <div className="shop-page ">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />

        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!selectIsCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  selectIsCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
