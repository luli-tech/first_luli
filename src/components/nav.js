import { useState, useEffect } from "react";

function Nav({ initial }) {
  const [prev, setPrev] = useState("");

  useEffect(() => {
    // Clear the previous data by setting it to an empty string
    setPrev("");

    // After clearing, set the state to the first item's `name` from the new `initial` array
    if (initial.length > 0) {
      setPrev(initial[0].name);
    }
  }, [initial]);

  return (
    <nav>
      <p>welcome {prev}</p>
    </nav>
  );
}

export default Nav;
