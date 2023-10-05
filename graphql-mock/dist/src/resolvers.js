import { books } from "mockBooks.js";
export const resolvers = {
    Query: {
        books: () => books,
    }
};
