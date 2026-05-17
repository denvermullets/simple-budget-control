import * as vektis from "@vektis-io/tracker";

const ANON_USER_KEY = "simpleBudget.anonUserId";
const CUSTOMER_ID = "simple-budget-control";

const getOrCreateAnonUserId = (): string => {
  let id = localStorage.getItem(ANON_USER_KEY);
  if (!id) {
    id = `anon_${crypto.randomUUID()}`;
    localStorage.setItem(ANON_USER_KEY, id);
  }
  return id;
};

let initialized = false;

export const initVektis = (): void => {
  if (initialized) return;
  const apiKey = import.meta.env.VITE_VEKTIS_KEY;
  if (!apiKey) return;
  const endpoint = import.meta.env.VITE_VEKTIS_ENDPOINT;

  vektis.init({ apiKey, ...(endpoint && { endpoint }) });
  vektis.identify({ customer_id: CUSTOMER_ID, user_id: getOrCreateAnonUserId() });
  initialized = true;
};

type Props = Record<string, string | number | boolean>;

export const trackEvent = (
  feature_id: string,
  action: string,
  properties?: Props
): void => {
  if (!initialized) return;
  vektis.track("feature.used", { feature_id, action, properties });
};
