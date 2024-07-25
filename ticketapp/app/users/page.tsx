import UserForm from "@/components/UserForm";
import DataTableSimple from "./Data-table-simple";
import prisma from "@/prisma/db";

const Users = async () => {
  const users = await prisma.user.findMany();

  return (
    <div className="p-4">
      <UserForm />
      <DataTableSimple users={users} />
    </div>
  );
};

export default Users;
