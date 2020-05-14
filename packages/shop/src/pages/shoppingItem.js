import React from "react";
import { Button } from "@lerna-monorepo/shared-ui";
import Link from "gatsby-link";

export default ({ pathContext: { data } }) => {
  if (!data) {
    return null;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      <Button>Purchase</Button>
      <Link href={process.env.SHOP_URL}>Back to Shop</Link>
    </div>
  );
};
