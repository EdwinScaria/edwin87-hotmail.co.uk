import React from "react";

export default function MainBackground({ children, main }) {
  return <header className={main}>{children}</header>;
}

MainBackground.defaultProps = { main: "defaultMain" };
