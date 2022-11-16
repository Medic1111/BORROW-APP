-- ********************************************************************************
-- This script creates the database users and grants them the necessary permissions
-- ********************************************************************************

CREATE USER payback_appuser
WITH PASSWORD 'password';

GRANT ALL
ON ALL TABLES IN SCHEMA public
TO payback_appuser;

GRANT SELECT, INSERT, UPDATE, DELETE
ON ALL TABLES IN SCHEMA public
TO payback_appuser;