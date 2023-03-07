import compose from "compose-function";
import { withContext } from "./with-context";
import { withRouter } from "./with-router";
export const withProviders = compose(withContext, withRouter);
