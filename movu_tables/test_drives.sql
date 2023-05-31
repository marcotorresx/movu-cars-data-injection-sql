-- Table: public.test_drives

-- DROP TABLE IF EXISTS public.test_drives;

CREATE TABLE IF NOT EXISTS public.test_drives
(
    id integer NOT NULL DEFAULT nextval('test_drives_id_seq'::regclass),
    dealership_id integer NOT NULL,
    model_id integer NOT NULL,
    status test_drive_status NOT NULL DEFAULT 'review'::test_drive_status,
    booking_date date NOT NULL,
    CONSTRAINT test_drives_pkey PRIMARY KEY (id),
    CONSTRAINT test_drives_dealership_id_fkey FOREIGN KEY (dealership_id)
        REFERENCES public.dealerships (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT test_drives_model_id_fkey FOREIGN KEY (model_id)
        REFERENCES public.car_models (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.test_drives
    OWNER to "movuAdmin";