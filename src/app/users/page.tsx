import { Shell } from "@/components/layout/shell"
import { searchParamsSchema } from "../schema/user_address"
import { getUserAddress } from "./_lib/queries"
import React from "react"
import { DataTableSkeleton } from "@/components/ui/data-table/data-table-skeleton"
import { UsersTable } from "./_componenents/user-table"

interface UserPageProps {
  searchParams: Record<string, string | string[] | undefined>
}

const UserPage = async ({ searchParams }: UserPageProps) => {
  const resolvedSearchParams = await searchParams

  const search = searchParamsSchema.parse(resolvedSearchParams)

  const usersPromise = getUserAddress(search)

  return (
    <Shell variant='sidebar' className='px-4'>
      <React.Suspense
        fallback={
          <DataTableSkeleton
            columnCount={5}
            searchableColumnCount={1}
            filterableColumnCount={0}
            cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
            shrinkZero
          ></DataTableSkeleton>
        }
      >
        <UsersTable usersPromise={usersPromise} />
      </React.Suspense>
    </Shell>
  )
}

export default UserPage
