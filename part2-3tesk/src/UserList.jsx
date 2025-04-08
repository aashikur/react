import { Suspense } from "react";

export default function UserList() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="wrapper">
          <h2>This is user list:</h2>
        </div>
      </Suspense>
    </>
  );
}

function Loader() {
  return (
    <div className="wrapper">
      <h1>Loading...</h1>
    </div>
  );
}
