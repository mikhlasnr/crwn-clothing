import React, { Component } from "react";

import { Route } from "react-router";

import CollectionPage from "../../components/collectionPage/CollectionPage";
import CollectionOverview from "../../components/collectionOverview/CollectionOverview";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.util";

import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.action";
import WithSpinner from "../../components/wtihSpinner/withSpinner";

// created new component that have validation loading and build with High Order Component
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    laoding: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection("collections");

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ laoding: false });
    });
  }

  render() {
    const { match } = this.props;
    const { laoding } = this.state;
    return (
      <div className="shop-page ">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={laoding} {...props} />
          )}
        />

        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={laoding} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
