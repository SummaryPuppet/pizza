import { Router } from "express";
import { createTable, getAllTables, getTable } from "./controller";

const router = Router();

/**
 * Get all Tables
 * @route GET /tables
 * @returns Tables[] - List of tables
 */
router.get("/tables", getAllTables);

/**
 * Get a Table from id
 * @route GET /table/:id
 * @param {number} req.params.id
 * @returns Table
 */
router.get("/table/:id", getTable);

/**
 * Create a Table
 * @route POST table/
 * @returns Table
 */
router.post("/table", createTable);

/**
 * Delete a Table
 * @route DELETE table/
 * @param {number} req.params.id
 * @returns Table
 */
router.delete("/table/:id");

export default router;
