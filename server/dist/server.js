"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/users", (req, res) => {
    return res.send("Hello world!");
});
app.listen(3333, () => {
    console.log("Backend is running on 3333 port!");
});
//SQLite