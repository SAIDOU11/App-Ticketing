import prisma from "@/prisma/db";
import DataTable from "./DataTable";

const Tickets = async () => {
  const tickets = await prisma.ticket.findMany();
  console.log(tickets);

  return (
    <div className="p-4">
      <DataTable tickets={tickets} />
    </div>
  );
};

export default Tickets;
