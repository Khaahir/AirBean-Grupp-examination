import { useState } from "react";

export default function Cart() {
  const [isopen, setIsOpen] = useState(false);

  return (
    <>
      {isopen && (
        <section className="cart-container">
          <div className="cart"></div>
        </section>
      )}
    </>
  );
}
