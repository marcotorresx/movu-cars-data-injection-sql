-- Table: public.dealerships

-- DROP TABLE IF EXISTS public.dealerships;

CREATE TABLE IF NOT EXISTS public.dealerships
(
    id integer NOT NULL DEFAULT nextval('dealerships_id_seq'::regclass),
    dealership_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    automotive_distributor_id integer NOT NULL,
    website_url character varying(100) COLLATE pg_catalog."default",
    logo_url character varying(100) COLLATE pg_catalog."default",
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    status status NOT NULL DEFAULT 'in-progress'::status,
    address_id integer,
    user_status user_status NOT NULL DEFAULT 'active'::user_status,
    stripe_account_id character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT dealerships_pkey PRIMARY KEY (id),
    CONSTRAINT dealerships_address_id_addresses_id_fk FOREIGN KEY (address_id)
        REFERENCES public.addresses (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT dealerships_automotive_distributor_id_automotive_distributors_i FOREIGN KEY (automotive_distributor_id)
        REFERENCES public.automotive_distributors (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.dealerships
    OWNER to "movuAdmin";