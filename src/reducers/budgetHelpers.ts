import { CreditCard, Loan, LocalStorage, MonthlyRecurring } from "../models/localStorage.model";
import dayjs from "dayjs";

// TODO: maybe refactor these? i realize there's duplicated code but to get around it would
// require some type assertions and/or type checks that end up adding more code than just duplicating it
// so, idk, we'll see.

export const setLocalStorage = (data: LocalStorage) => {
  localStorage.setItem("simpleBudget", JSON.stringify(data));
};

export const editLoan = (state: LocalStorage, newData: Partial<Loan>) => {
  const loanIndex = state.loans.findIndex((loan) => loan.id === newData.id);

  if (loanIndex === -1) {
    return state.loans;
  }

  const newLoans = [...state.loans];
  newLoans[loanIndex] = { ...newLoans[loanIndex], ...newData };

  return newLoans;
};

export const editRecurring = (state: LocalStorage, newData: Partial<MonthlyRecurring>) => {
  const recurringIndex = state.monthlyRecurring.findIndex(
    (recurring) => recurring.id === newData.id
  );

  if (recurringIndex === -1) {
    return state.monthlyRecurring;
  }

  const newRecurring = [...state.monthlyRecurring];
  newRecurring[recurringIndex] = { ...newRecurring[recurringIndex], ...newData };

  return newRecurring;
};

export const editCreditCards = (state: LocalStorage, newData: Partial<CreditCard>) => {
  const creditIndex = state.creditCards.findIndex((credit) => credit.id === newData.id);

  if (creditIndex === -1) {
    return state.creditCards;
  }

  const newCredit = [...state.creditCards];
  newCredit[creditIndex] = { ...newCredit[creditIndex], ...newData };

  return newCredit;
};

export const formatCurrency = (amount: string) =>
  parseFloat(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

export const convertCurrency = new Intl.NumberFormat("en-US", {
  currency: "USD",
});

export const parseMoney = (val: string) => val.replace(/^\$/, "");

export const updateLocalStorage = (startDate: Date, endDate: Date, data: LocalStorage) => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  const numberOfDays = end.diff(start, "day") + 1;

  const dates = Array.from({ length: numberOfDays }, (_, index) => start.add(index, "day").date());

  const updatedMonthly = data.monthlyRecurring.map((recurring) => ({
    ...recurring,
    pending: dates.includes(recurring.dueDate),
  }));
  const updatedCreditCards = data.creditCards.map((credit) => ({
    ...credit,
    pending: dates.includes(credit.dueDate),
  }));
  const updatedLoans = data.loans.map((loan) => ({
    ...loan,
    pending: dates.includes(loan.dueDate),
  }));

  const updatedLocalStorage: LocalStorage = {
    ...data,
    accountInfo: { ...data.accountInfo, payPeriodStart: startDate, payPeriodEnd: endDate },
    monthlyRecurring: updatedMonthly,
    creditCards: updatedCreditCards,
    loans: updatedLoans,
  };

  return updatedLocalStorage;
};
