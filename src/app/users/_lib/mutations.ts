import { type Row } from "@tanstack/react-table"
import { toast } from "sonner"

import { getErrorMessage } from "@/lib/handle-error"
import { deleteUser } from "./actions"
import { User } from "@/drizzle/schema"

export function deleteUsers({
  rows,
  onSuccess,
}: {
  rows: Row<User>[]
  onSuccess?: () => void
}) {
  toast.promise(
    Promise.all(
      rows.map(async (row) =>
        deleteUser({
          id: row.original.id,
        })
      )
    ),
    {
      loading: "Deleting...",
      success: () => {
        onSuccess?.()
        return "User deleted"
      },
      error: (err) => getErrorMessage(err),
    }
  )
}
