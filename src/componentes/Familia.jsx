import React from "react";
import { filhos } from "../utils/utils";

export default props => (
  <div>
    {filhos(props)}
    {/* {React.Children.map(props.children, child => {
        return React.cloneElement(child, { ...props });
      })}
    </h1> */}
    {/* <h1>{React.cloneElement(props.children, { ...props })}</h1> */}
  </div>
);
