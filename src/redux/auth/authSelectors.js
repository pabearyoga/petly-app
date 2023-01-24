export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsPending = state => state.auth.isPending;

export const selectError = state => state.auth.error;
