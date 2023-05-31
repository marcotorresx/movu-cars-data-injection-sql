-- Table: public.customers

-- DROP TABLE IF EXISTS public.customers;

CREATE TABLE IF NOT EXISTS public.customers
(
    uid character varying(80) COLLATE pg_catalog."default" NOT NULL,
    first_name character varying(40) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(40) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(20) COLLATE pg_catalog."default",
    stripe_customer_id character varying(50) COLLATE pg_catalog."default",
    address_id integer,
    user_status user_status NOT NULL DEFAULT 'active'::user_status,
    photo_url text COLLATE pg_catalog."default",
    CONSTRAINT customers_pkey PRIMARY KEY (uid),
    CONSTRAINT customers_address_id_addresses_id_fk FOREIGN KEY (address_id)
        REFERENCES public.addresses (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.customers
    OWNER to "movuAdmin";