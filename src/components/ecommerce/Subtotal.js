import React from "react";
import "../../css/Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal({length, total}) {
    return (
        <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
            <>
                <p>
                Subtotal ({length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
                </small>
            </>
            )}
            decimalScale={2}
            value={total} 
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />

        <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;