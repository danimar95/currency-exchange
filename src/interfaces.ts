import { HTMLInputTypeAttribute, MouseEventHandler } from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onChange: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  extraClass?: string;
  isSubmit?: boolean;
}

export interface CurrencyProps {
  currencyCode: string | number;
  currencyName: string;
}

export interface ExchangeProps {
  fromCurrency: string;
  toCurrency: string;
}

export interface SelectProps {
  htmlFor: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  placeholder: string;
  options: CurrencyProps[];
  disabled?: boolean;
  required?: boolean;
  label?: string;
  extraClass?: string;
}

export interface InputProps {
  id: string;
  value: string;
  type: HTMLInputTypeAttribute;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  extraClass?: string;
}

export interface RealtimeCurrencyExchangeRate {
  "5. Exchange Rate": string;
};

export interface ExchangeResponse {
  "Realtime Currency Exchange Rate": RealtimeCurrencyExchangeRate
};
