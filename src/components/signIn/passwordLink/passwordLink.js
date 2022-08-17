import { Card } from "antd";
import React from "react";

const PasswordLink = () => (
  <div className="site-card-border-less-wrapper">
    <Card
      bordered={false}
      style={{
        textAlign: "center",
      }}
    >
      <p>We have sent the updated password link to your email, please check!</p>
    </Card>
  </div>
);

export default PasswordLink;
