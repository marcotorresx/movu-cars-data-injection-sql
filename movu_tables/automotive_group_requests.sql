-- Table: public.automotive_group_requests

-- DROP TABLE IF EXISTS public.automotive_group_requests;

CREATE TABLE IF NOT EXISTS public.automotive_group_requests
(
    id integer NOT NULL DEFAULT nextval('automotive_group_requests_id_seq'::regclass),
    automotive_distributor_id integer NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    updated_at timestamp without time zone,
    status request_status NOT NULL DEFAULT 'action-required'::request_status,
    document_ine jsonb,
    document_proof_of_address jsonb,
    document_proof_of_income jsonb,
    comments text COLLATE pg_catalog."default",
    CONSTRAINT automotive_group_requests_pkey PRIMARY KEY (id),
    CONSTRAINT automotive_group_requests_automotive_distributor_id_automotive_ FOREIGN KEY (automotive_distributor_id)
        REFERENCES public.automotive_distributors (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.automotive_group_requests
    OWNER to "movuAdmin";