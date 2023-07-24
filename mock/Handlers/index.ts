import { RouteHandler } from "miragejs/server"
import { AnyRegistry } from "miragejs/-types"

export const rulesHandler:RouteHandler<AnyRegistry> = ( schema, request ) => {
    const { page } = request.queryParams
    const pageNumber = Number(page)
    return schema.all('rule').models.slice(10*(pageNumber-1), 10*pageNumber)
}
