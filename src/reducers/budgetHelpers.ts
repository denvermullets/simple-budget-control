import { CreditCard, Loan, LocalStorage, MonthlyRecurring } from "../models/localStorage.model";

// TODO: maybe refactor these? i realize there's duplicated code but to get around it would
// require some type assertions and/or type checks that end up adding more code than just duplicating it
// so, idk, we'll see.

export const setLocalStorage = (data: LocalStorage) => {
  localStorage.setItem("simpleBudget", JSON.stringify(data));
};

export const editLoan = (state: LocalStorage, newData: Loan) => {
  const loanIndex = state.loans.findIndex((loan) => loan.source === newData.source);

  if (loanIndex === -1) {
    return state.loans;
  }

  const newLoans = [...state.loans];
  newLoans[loanIndex] = newData;

  return newLoans;
};

export const editRecurring = (state: LocalStorage, newData: MonthlyRecurring) => {
  const recurringIndex = state.monthlyRecurring.findIndex(
    (recurring) => recurring.id === newData.id
  );

  if (recurringIndex === -1) {
    return state.monthlyRecurring;
  }

  const newRecurring = [...state.monthlyRecurring];
  newRecurring[recurringIndex] = newData;

  return newRecurring;
};

export const editCreditCards = (state: LocalStorage, newData: CreditCard) => {
  const creditIndex = state.creditCards.findIndex((credit) => credit.source === newData.source);

  if (creditIndex === -1) {
    return state.creditCards;
  }

  const newcredit = [...state.creditCards];
  newcredit[creditIndex] = newData;

  return newcredit;
};
