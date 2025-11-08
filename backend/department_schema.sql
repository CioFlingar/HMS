BEGIN;
--
-- Alter field name on department
--
CREATE TABLE "new__hms_departments_department" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" varchar(100) NOT NULL UNIQUE, "description" text NOT NULL, "status" varchar(10) NOT NULL);
INSERT INTO "new__hms_departments_department" ("id", "description", "status", "name") SELECT "id", "description", "status", "name" FROM "hms_departments_department";
DROP TABLE "hms_departments_department";
ALTER TABLE "new__hms_departments_department" RENAME TO "hms_departments_department";
COMMIT;
