import { useStore } from "@Store/store";
import { useEffect } from "react";
import { popularCurrencies } from "src/utils/currencyUtil";

export const UserCurrency = () => {
  const { userCurrency, updateUserCurrency } = useStore();

  // hack to close daisyUI dropdown when option is chosen https://medium.com/@malikhamzav/how-to-close-daisyui-dropdown-on-click-ea65c5749410
  const handleClick = () => {
    const elem: any = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  useEffect(() => {
    const userCurrencyFromStorage = localStorage.getItem("userCurrency");

    if (userCurrencyFromStorage) {
      updateUserCurrency(userCurrencyFromStorage);
    }
  }, []);

  return (
    <div className="dropdown dropdown-bottom dropdown-end mr-3">
      <label
        tabIndex={0}
        className="m-1 btn p-2 rounded-md min-h-8 max-h-8 font-normal"
      >
        {userCurrency}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {popularCurrencies.map((currency) => (
          <li key={currency.code}>
            <a
              onClick={() => {
                handleClick();
                updateUserCurrency(currency.code);
                localStorage.setItem("userCurrency", JSON.stringify(currency));
              }}
            >
              {currency.code} - {currency.symbol}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
