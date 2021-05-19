import { connect } from "react-redux";
import { compose } from "redux";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

import { createStructuredSelector } from "reselect";

import WithSpinner from "../wtihSpinner/withSpinner";

import CollectionPage from "./CollectionPage";

// isLoading it's must initialed True so we must put "!"
// because "selectIsCollectionsLoaded" will return false
const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
