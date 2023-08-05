import { useRouter } from "next/router";
import React from "react";

function ArticleDetails() {
  const router = useRouter()
  // console.log(router.query);
  return (
    <>
      <h1>Article Details: ({router.query.shortName})</h1>
    </>
  );
}

export default ArticleDetails;
