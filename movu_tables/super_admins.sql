-- Table: public.super_admins

-- DROP TABLE IF EXISTS public.super_admins;

CREATE TABLE IF NOT EXISTS public.super_admins
(
    uid character varying(50) COLLATE pg_catalog."default" NOT NULL,
    first_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    email character varying(50) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(50) COLLATE pg_catalog."default" NOT NULL,
    user_status user_status NOT NULL DEFAULT 'active'::user_status,
    CONSTRAINT super_admins_pkey PRIMARY KEY (uid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.super_admins
    OWNER to "movuAdmin";