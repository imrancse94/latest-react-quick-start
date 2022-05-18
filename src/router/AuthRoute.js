import { Navigate } from 'react-router-dom';
import { useStore } from 'react-redux';
const AuthRoute = ({ component: children, ...rest }) => {
  const store = useStore();
  const authStore = store.getState();
  console.log('authStore',authStore);
  const auth = authStore.auth.user ? true : false;
  if (!auth && rest.requireAuth) {
    return <Navigate to="/login" />
  } else if (auth && !rest.requireAuth) {
    return <Navigate to="/" />
  }
  return children;
}
export default AuthRoute;
