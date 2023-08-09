import { useRouter } from "next/router";
import React from "react";

function ArticleDetails() {
  // for slugs : get more than 1 pram in url (catch all routes) => [...slug].js
  // for get slug data (data is object) => routes.query.slug

  const routes = useRouter();

  // const {slug = []} = routes.query
  //or use ||
  const slug = routes.query.slug || [];

  console.log(routes.query.slug);

  if (slug.length > 2) {
    return (
      <h1>
        You Now See {slug[0]} Article That Published in {slug[1]}/{slug[2]}/
        {slug[3]} | {slug[4]}
      </h1>
    );
  }

  return (
    <>
      <h1>Article Details: Single Article</h1>
    </>
  );
}

export default ArticleDetails;
