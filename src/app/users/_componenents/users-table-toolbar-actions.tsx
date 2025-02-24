import { type Table } from "@tanstack/react-table"

// import { CreateUserDialog } from "./create-user-dialog"
// import { DeleteUsersDialog } from "./delete-users-dialog"
import { User } from "@/types/model/user"
import { CreateUserDialog } from "./create-user-dialog"

interface UsersTableToolbarActionsProps {
  table: Table<User>
}

export function UsersTableToolbarActions({
  table,
}: UsersTableToolbarActionsProps) {
  return (
    <div className='flex items-center gap-2'>
      {/* {table.getFilteredSelectedRowModel().rows.length > 0 ? (
        <DeleteUsersDialog
          users={table.getFilteredSelectedRowModel().rows}
          onSuccess={() => table.toggleAllPageRowsSelected(false)}
        />
      ) : null} */}
      <CreateUserDialog />
      {/**
       * Other actions can be added here.
       * For example, export, import, etc.
       */}
    </div>
  )
}
