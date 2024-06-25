// handler.ts
import { rest } from "msw";
import { API_URL } from "../app/constants";
import { quoteCharacter, quoteRandom } from "./quotes";



export const handlers = [
    rest.get(API_URL, (req, res, ctx) => {
        const response = req.url.searchParams.get("character")
            ? quoteCharacter
            : quoteRandom;
            return res(
                ctx.status(200),
                ctx.json(response)
            );
    }),
];
