import { getUserOrCreateUser } from "./methods/getUserOrCreateUser";
import { getUserDetail } from "./methods/getUserDetail";
import { setUserDetail } from "./methods/setUserDetail";
import { getOrCreateOrder } from "./methods/getOrCreateOrder";
import { setOrderPaid } from "./methods/setOrderPaid";
import { getUserTickets } from "./methods/getUserTickets";
import { isTicketForEventValid } from "./methods/isTicketForEventValid";
import { getEventTicketOfUser } from "./methods/getEventTicketOfUser";
import { setUserEventTeamName } from "./methods/setUserEventTeamName";
import { getEventRegData } from "./methods/getEventRegData";

const DB = {
  getUserOrCreateUser,
  getUserDetail,
  setUserDetail,
  getOrCreateOrder,
  setOrderPaid,
  getUserTickets,
  isTicketForEventValid,
  getEventTicketOfUser,
  setUserEventTeamName,
  getEventRegData
};

export default DB;
