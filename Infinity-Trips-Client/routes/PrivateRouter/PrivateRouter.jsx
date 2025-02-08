import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Loader from "../../Loader/Loader";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center my-40">
        <Loader></Loader>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to='/login'></Navigate>;
};

PrivateRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRouter;
