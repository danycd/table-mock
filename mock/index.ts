import { Model, createServer } from "miragejs"
import { apiBaseURL } from '../src/config';
import { rulesHandler } from './Handlers/index';
import { rulesFactory } from './Factory/rulesFactory';

export const server = createServer({
    urlPrefix: apiBaseURL,
    routes() {
        this.get("/rules", rulesHandler )
    },

    models: {
        rule: Model
    },

    factories: {
        rule: rulesFactory
      },

    seeds(server) {
        server.createList("rule", 50);
    }
})