import { createStructuredSelector } from "reselect";

import { compose } from "redux";
import { connect } from "react-redux";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

import WithSpinner from "../wtihSpinner/withSpinner";

import CollectionsOverview from "./CollectionsOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

// compose is for carrying HOC so if we have alot HOC it will bee easy to read
// compose read from right to left and it same code like this code:
// connect(mapStateToProps)(WithSpinner(CollectionsOverviewContainer));
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
