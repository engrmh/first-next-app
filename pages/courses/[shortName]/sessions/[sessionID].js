import { useRouter } from "next/router";
import React from "react";

export default function sessionID() {
  const router = useRouter();

  return (
    <>
      <h1>Course ID: ({router.query.shortName})</h1>
      <h1>session ID: ({router.query.sessionID})</h1>
    </>
  );
}
