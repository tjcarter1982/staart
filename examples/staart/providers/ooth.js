import { OothClient } from "ooth-client";
import withOothNext from "ooth-client-react-next";
import settings from "../public-settings";

const oothClient = new OothClient({
  url: `${settings.url}/auth`
});

export default withOothNext(oothClient);
