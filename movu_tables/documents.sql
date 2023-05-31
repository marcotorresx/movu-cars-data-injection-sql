-- Table: public.documents

-- DROP TABLE IF EXISTS public.documents;

CREATE TABLE IF NOT EXISTS public.documents
(
    id integer NOT NULL DEFAULT nextval('documents_id_seq'::regclass),
    name character varying(40) COLLATE pg_catalog."default" NOT NULL,
    document_url character varying(100) COLLATE pg_catalog."default" NOT NULL,
    status status NOT NULL DEFAULT 'in-progress'::status,
    customer_id character varying(40) COLLATE pg_catalog."default",
    dealership_id integer,
    automotive_distributor_id integer,
    CONSTRAINT documents_pkey PRIMARY KEY (id),
    CONSTRAINT documents_automotive_distributor_id_fkey FOREIGN KEY (automotive_distributor_id)
        REFERENCES public.automotive_distributors (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT documents_dealership_id_fkey FOREIGN KEY (dealership_id)
        REFERENCES public.dealerships (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.documents
    OWNER to "movuAdmin";