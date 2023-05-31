-- Table: public.employees

-- DROP TABLE IF EXISTS public.employees;

CREATE TABLE IF NOT EXISTS public.employees
(
    uid character varying(80) COLLATE pg_catalog."default" NOT NULL,
    first_name character varying(40) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(40) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(20) COLLATE pg_catalog."default",
    role employee_role NOT NULL,
    auto_distributor_id integer NOT NULL,
    dealership_id integer,
    user_status user_status NOT NULL DEFAULT 'active'::user_status,
    photo_url text COLLATE pg_catalog."default",
    CONSTRAINT employees_pkey PRIMARY KEY (uid),
    CONSTRAINT employees_auto_distributor_id_automotive_distributors_id_fk FOREIGN KEY (auto_distributor_id)
        REFERENCES public.automotive_distributors (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT employees_dealership_id_dealerships_id_fk FOREIGN KEY (dealership_id)
        REFERENCES public.dealerships (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.employees
    OWNER to "movuAdmin";