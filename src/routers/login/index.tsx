import React, { ReactElement } from "react";
import { Button } from "antd";

interface Props {}

export default function Login({}: Props): ReactElement {
  return (
    <div>
      Login
      <Button type="primary">hello</Button>
    </div>
  );
}
