import React from 'react';
import {
  useNavigate,
  useParams,
} from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ params }}
          />
      );
  }
  return ComponentWithRouterProp;
}
export default withRouter;