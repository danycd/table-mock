import { useQuery } from "@tanstack/react-query"
import { rulesClient } from "../../lib/modules"
import { MRT_PaginationState, MaterialReactTable } from "material-react-table"
import { columns } from "./config"
import { useState } from "react"

export const  Table = () => {
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, isFetching } = useQuery(
    ["test", pagination],
    () => rulesClient.getRules(pagination.pageIndex+1),
    {
      keepPreviousData: true
    }
    )

  return <MaterialReactTable 
    columns={columns} 
    data={data ?? []}
    onPaginationChange={setPagination}
    state={{pagination, isLoading:isFetching}}
    manualPagination
    rowCount={50}
    />
  
}
