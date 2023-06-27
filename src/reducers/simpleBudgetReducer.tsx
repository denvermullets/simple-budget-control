import { CreditCard, Loan, LocalStorage, MonthlyRecurring } from "../models/localStorage.model";
import { editCreditCards, editLoan, editRecurring, setLocalStorage } from "./budgetHelpers";

type AddCredit = { type: "ADD_CREDIT_CARD"; payload: CreditCard };
type ModifyCredit = { type: "EDIT_CREDIT_CARD"; payload: Partial<CreditCard> };
type AddLoan = { type: "ADD_LOAN"; payload: Loan };
type ModifyLoan = { type: "EDIT_LOAN"; payload: Partial<Loan> };
type AddRecurring = { type: "ADD_RECURRING"; payload: MonthlyRecurring };
type ModifyRecurring = { type: "EDIT_RECURRING"; payload: Partial<MonthlyRecurring> };
type DeleteCreditCard = { type: "DELETE_CREDIT_CARD"; payload: CreditCard };
type DeleteLoan = { type: "DELETE_LOAN"; payload: Loan };
type DeleteRecurring = { type: "DELETE_RECURRING"; payload: MonthlyRecurring };
type UpdateBugetData = { type: "UPDATE_BUDGET_DATA"; payload: LocalStorage };

export type Actions =
  | AddCredit
  | ModifyCredit
  | DeleteCreditCard
  | AddLoan
  | ModifyLoan
  | DeleteLoan
  | AddRecurring
  | ModifyRecurring
  | DeleteRecurring
  | UpdateBugetData;

export const simpleBudgetReducer = (state: LocalStorage, action: Actions) => {
  switch (action.type) {
    case "ADD_LOAN":
      setLocalStorage({ ...state, loans: [...state.loans, action.payload] });
      return {
        ...state,
        loans: [...state.loans, action.payload],
      };
    case "EDIT_LOAN":
      setLocalStorage({ ...state, loans: editLoan(state, action.payload) });
      return {
        ...state,
        loans: editLoan(state, action.payload),
      };
    case "DELETE_LOAN":
      setLocalStorage({
        ...state,
        loans: state.loans.filter((loan) => loan.source !== action.payload.source),
      });
      return {
        ...state,
        loans: state.loans.filter((loan) => loan.source !== action.payload.source),
      };
    case "ADD_RECURRING":
      setLocalStorage({ ...state, monthlyRecurring: [...state.monthlyRecurring, action.payload] });
      return {
        ...state,
        monthlyRecurring: [...state.monthlyRecurring, action.payload],
      };
    case "EDIT_RECURRING":
      setLocalStorage({ ...state, monthlyRecurring: editRecurring(state, action.payload) });
      return {
        ...state,
        monthlyRecurring: editRecurring(state, action.payload),
      };
    case "DELETE_RECURRING":
      setLocalStorage({
        ...state,
        monthlyRecurring: state.monthlyRecurring.filter(
          (recurring) => recurring.source !== action.payload.source
        ),
      });
      return {
        ...state,
        monthlyRecurring: state.monthlyRecurring.filter(
          (recurring) => recurring.source !== action.payload.source
        ),
      };
    case "ADD_CREDIT_CARD":
      setLocalStorage({ ...state, creditCards: [...state.creditCards, action.payload] });
      return {
        ...state,
        creditCards: [...state.creditCards, action.payload],
      };
    case "EDIT_CREDIT_CARD":
      setLocalStorage({ ...state, creditCards: editCreditCards(state, action.payload) });
      return {
        ...state,
        creditCards: editCreditCards(state, action.payload),
      };
    case "UPDATE_BUDGET_DATA":
      return state;
    default:
      return state;
  }
};
