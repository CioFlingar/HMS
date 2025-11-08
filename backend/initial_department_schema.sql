BEGIN;
--
-- Create model Department
--
CREATE TABLE "hms_departments_department" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" varchar(100) NOT NULL, "description" text NOT NULL, "status" varchar(10) NOT NULL);
COMMIT;
