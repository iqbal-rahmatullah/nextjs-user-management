"use client"

import React from "react"

import { useDataTable } from "@/hooks/use-data-table"
import { DataTable } from "@/components/ui/data-table/data-table"
import { DataTableToolbar } from "@/components/ui/data-table/data-table-toolbar"

import { User } from "@/types/model/user"
import { DataTableFilterField } from "@/types/data-table"
import { getUserAddress } from "../_lib/queries"
import { getColumns } from "./user-table-columns"
import { UsersTableToolbarActions } from "./users-table-toolbar-actions"

interface UserTableProps {
  usersPromise: ReturnType<typeof getUserAddress>
}

export function UsersTable({ usersPromise }: UserTableProps) {
  const data = React.use(usersPromise)

  const columns = React.useMemo(() => getColumns(), [])

  const filterFields: DataTableFilterField<User>[] = [
    {
      label: "Name",
      value: "firstName",
      placeholder: "Filter names...",
    },
  ]

  const { table } = useDataTable({
    data: data?.data as User[],
    columns,
    pageCount: data?.pageCount || -1,
    filterFields,
    enableAdvancedFilter: false,
    defaultPerPage: 10,
    defaultSort: "createdAt.desc",
  })

  return (
    <div className='w-full space-y-2.5 overflow-auto'>
      <DataTableToolbar table={table} filterFields={filterFields}>
        <UsersTableToolbarActions table={table} />
      </DataTableToolbar>
      <DataTable
        table={table}
        title='All User'
        description='You can manage all user from this menu.'
      />
    </div>
  )
}
