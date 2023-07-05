import { Checkbox } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CurrentUserContext, UserContext } from "../../providers/UserContext";

type CheckboxPendingProps = {
  initialValue: boolean;
  id: number;
  actionType: "EDIT_RECURRING" | "EDIT_CREDIT_CARD" | "EDIT_LOAN";
};

const CheckboxPending: React.FC<CheckboxPendingProps> = ({ initialValue, id, actionType }) => {
  const timeout = useRef<null | ReturnType<typeof setTimeout>>();
  const { dispatch } = useContext<CurrentUserContext>(UserContext);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(initialValue);

  useEffect(() => {
    if (!dataLoaded) {
      setDataLoaded(true);
      return;
    }

    if (initialValue === isChecked) return;

    if (timeout.current !== null) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(async () => {
      console.log("timeout checkbox", actionType);
      dispatch({
        type: actionType,
        payload: {
          id,
          pending: isChecked,
        },
      });
    }, 500);
  }, [dispatch, id, dataLoaded, initialValue, actionType, isChecked]);

  return (
    <Checkbox onChange={(event) => setIsChecked(event.target.checked)} isChecked={isChecked} />
  );
};

export default CheckboxPending;
