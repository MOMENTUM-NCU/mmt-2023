import getInstance from "./_getInstance";

const setOrderPaid = async (orderId, tag) => {
  const prisma = getInstance();
  if (tag == "user") {
    try {
      let order = await prisma.payment.update({
        where: {
          id: orderId,
        },
        data: {
          status: "PAID",
          t_verify_user: true,
          t_verify_user_at: new Date(),
        },
      });
      return order;
    } catch (err) {
      console.log(err);
      return null;
    }
  } else {
    try {
      let order = await prisma.payment.update({
        where: {
          id: orderId,
        },
        data: {
          status: "PAID",
          t_verify_rpay: true,
        },
      });
      return order;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
};
export { setOrderPaid };
