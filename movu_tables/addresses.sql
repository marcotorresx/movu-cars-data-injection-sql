-- Table: public.addresses

-- DROP TABLE IF EXISTS public.addresses;

CREATE TABLE IF NOT EXISTS public.addresses
(
    id integer NOT NULL DEFAULT nextval('addresses_id_seq'::regclass),
    country character varying(40) COLLATE pg_catalog."default" NOT NULL,
    state character varying(40) COLLATE pg_catalog."default" NOT NULL,
    zip_code integer NOT NULL,
    address_line1 character varying(100) COLLATE pg_catalog."default" NOT NULL,
    address_line2 character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT addresses_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.addresses
    OWNER to "movuAdmin";