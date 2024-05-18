import { useStore } from "@Store/store";
import { useEffect } from "react";
import { popularCurrencies } from "src/utils/currencies";

export const UserCurrency = () => {
  const { userCurrency, updateUserCurrency } = useStore();

  useEffect(() => {
    const userCurrencyFromStorage = JSON.parse(
      localStorage.getItem("userCurrency") || "{}"
    );

    if (Object.keys(userCurrencyFromStorage).length !== 0) {
      updateUserCurrency(userCurrencyFromStorage);
    }
  }, []);

  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1 p-2 rounded-sm min-h-8 max-h-8 font-normal">
        {userCurrency.code}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {popularCurrencies.map((currency) => (
          <li key={currency.code}>
            <a
              onClick={() => {
                updateUserCurrency(currency);
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
