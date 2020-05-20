import {
  Response as ServerResponse,
  ServerRequest,
} from "https://deno.land/std@0.50.0/http/server.ts";
import { send } from "../helpers/flash.ts";
import { render } from "../helpers/render.ts";
interface IindexController {
  viewController: Function;
  fetchController: Function;
}
export const indexController: IindexController = {
  viewController: function (req: ServerRequest, res: ServerResponse) {
    render(req, "index");
  },
  fetchController: function (req: ServerRequest, res: ServerResponse) {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res: any) => res.json())
      .then((body: any[]) => {
        send(req, 200, body);
      })
      .catch((err: any) => {
        send(req, 404, { message: "data not found" });
      });
  },
};
