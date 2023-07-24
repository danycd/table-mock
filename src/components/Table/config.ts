import { MRT_ColumnDef } from "material-react-table";
import { Rule } from "../../lib/services/types";

export const columns:MRT_ColumnDef<Rule>[] = [
    {
        header: "Código",
        accessorKey: "code",
    },
    {
        header: "Regla",
        accessorKey: "rule",
    },
    {
        header: "Tipo",
        accessorKey: "type",
    },
    {
        header: "Severidad",
        accessorKey: "severity",
    },
    {
        header: "E. Actual",
        accessorKey: "isActiveSonar",
    },
    {
        header: "E. Propuesto",
        accessorKey: "isActive",
    },
    {
        header: "Propuesta",
        accessorKey: "updatedAt",
    },
    {
        header: "Autor",
        accessorKey: "authorEmail",
    },
]