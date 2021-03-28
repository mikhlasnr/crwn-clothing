//! this file for select data from reducer
//! and called in mapTopProps
import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
