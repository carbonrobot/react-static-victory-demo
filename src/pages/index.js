import React from "react";

import { VictoryPie } from "victory";

const app = () => (
  <div style={{ textAlign: "center" }}>
    <h1>Welcome to React-Static</h1>
    <VictoryPie
      data={[
        { x: "Cats", y: 35 },
        { x: "Dogs", y: 40 },
        { x: "Birds", y: 55 },
      ]}
    />
  </div>
);

export default app;
