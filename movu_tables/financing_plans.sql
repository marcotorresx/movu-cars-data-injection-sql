-- Table: public.financing_plans

-- DROP TABLE IF EXISTS public.financing_plans;

CREATE TABLE IF NOT EXISTS public.financing_plans
(
    id integer NOT NULL DEFAULT nextval('financing_plans_id_seq'::regclass),
    dealership_id integer NOT NULL,
    hitch integer NOT NULL,
    months integer NOT NULL,
    interest real NOT NULL,
    CONSTRAINT financing_plans_pkey PRIMARY KEY (id),
    CONSTRAINT financing_plans_dealership_id_dealerships_id_fk FOREIGN KEY (dealership_id)
        REFERENCES public.dealerships (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.financing_plans
    OWNER to "movuAdmin";