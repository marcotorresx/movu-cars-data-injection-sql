-- Table: public.automotive_distributors

-- DROP TABLE IF EXISTS public.automotive_distributors;

CREATE TABLE IF NOT EXISTS public.automotive_distributors
(
    id integer NOT NULL DEFAULT nextval('automotive_distributors_id_seq'::regclass),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    approved_at timestamp without time zone,
    status status NOT NULL DEFAULT 'in-progress'::status,
    user_status user_status NOT NULL DEFAULT 'active'::user_status,
    logo_url text COLLATE pg_catalog."default",
    CONSTRAINT automotive_distributors_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.automotive_distributors
    OWNER to "movuAdmin";