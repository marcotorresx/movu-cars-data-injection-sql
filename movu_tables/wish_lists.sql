-- Table: public.wish_lists

-- DROP TABLE IF EXISTS public.wish_lists;

CREATE TABLE IF NOT EXISTS public.wish_lists
(
    id integer NOT NULL DEFAULT nextval('wish_lists_id_seq'::regclass),
    listing_id integer NOT NULL,
    customer_id character varying(80) COLLATE pg_catalog."default",
    CONSTRAINT wish_lists_pkey PRIMARY KEY (id),
    CONSTRAINT wish_lists_customer_id_fkey FOREIGN KEY (customer_id)
        REFERENCES public.customers (uid) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.wish_lists
    OWNER to "movuAdmin";