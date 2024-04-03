import { useEffect, useState } from "react";
import { FaExchangeAlt, FaSearch } from "react-icons/fa";
import Select from "./components/Select";
import Input from "./components/Input";
import Button from "./components/Button";
import currencyList from "./utils/currencyList.json";
import { getExchange } from "./utils/services";
import "./App.css";
import Loading from "./components/Loading";

const App = () => {
  const [fromCurrency, setFromCurrency] = useState<string>("");
  const [toCurrency, setToCurrency] = useState<string>("");
  const [exchangeValue, setExchangeValue] = useState<string>("");
  const [valueToExchange, setValueToExchange] = useState<string>("1");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueToExchange(e.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    await getExchange(fromCurrency, toCurrency)
      .then((res) => {
        setIsLoading(false);
        setExchangeValue(
          Number(
            res.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
          ).toFixed(2)
        );
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error.message);
        console.error(error.message);
      });
  };

  const handleExchangeCurrency = () => {
    setExchangeValue("");
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  
  useEffect(() => {
    setExchangeValue("")
  }, [valueToExchange])

  return (
    <div className="App bg-green-100 w-full h-full flex justify-center items-center">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="bg-white rounded-3xl w-7/12 h-2/4 flex flex-col items-center justify-center px-8">
          <div className="text-xl font-bold text-center px-8 pb-12">
            Currency Exchange Generator
          </div>
          <form className="flex flex-col items-center">
            <div className="flex gap-4">
              <div className="flex-col content-end w-full">
                <div className="text-left p-2 w-full font-semibold">Value</div>
                <Input
                  id="money-value"
                  extraClass="shadow w-full"
                  type="number"
                  handleChange={(e) => handleInputChange(e)}
                  value={valueToExchange}
                />
              </div>
              <Select
                htmlFor="from-currency"
                placeholder="Select currency"
                options={currencyList}
                name={fromCurrency}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setFromCurrency(e.target.value)
                }
                extraClass="shadow w-full"
                label="From currency"
              />
              <Button
                onChange={handleExchangeCurrency}
                extraClass="flex items-end"
              >
                <FaExchangeAlt />
              </Button>
              <Select
                htmlFor="to-currency"
                placeholder="Select currency"
                options={currencyList}
                name={toCurrency}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setToCurrency(e.target.value)
                }
                extraClass="shadow w-full"
                label="To currency"
              />
              <Button
                onChange={handleSubmit}
                disabled={fromCurrency === toCurrency}
                extraClass="flex items-end"
              >
                <FaSearch
                  className={`${
                    fromCurrency === toCurrency ? "text-zinc-400" : "text-black"
                  }`}
                />
              </Button>
            </div>
            {exchangeValue && (
              <div className="flex justify-center p-8 w-full">
                <div className="bg-sky-950 text-white rounded-xl w-6/12 font-medium p-2">
                  {`${valueToExchange} ${fromCurrency} = $${(
                    Number(exchangeValue) * Number(valueToExchange)
                  ).toFixed(2)} ${toCurrency}`}
                </div>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
