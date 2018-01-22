export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library', // the action creator
    payload: libraryId
  };
};
