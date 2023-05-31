-- Table: public.listings

-- DROP TABLE IF EXISTS public.listings;

CREATE TABLE IF NOT EXISTS public.listings
(
    id integer NOT NULL DEFAULT nextval('listings_id_seq'::regclass),
    dealership_id integer NOT NULL,
    car_model_id integer NOT NULL,
    car_variant_id integer NOT NULL,
    base_price real NOT NULL,
    test_drive boolean NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    metadata jsonb,
    CONSTRAINT listings_pkey PRIMARY KEY (id),
    CONSTRAINT listings_car_model_id_car_models_id_fk FOREIGN KEY (car_model_id)
        REFERENCES public.car_models (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT listings_car_variant_id_car_variant_id_fk FOREIGN KEY (car_variant_id)
        REFERENCES public.car_variant (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT listings_dealership_id_dealerships_id_fk FOREIGN KEY (dealership_id)
        REFERENCES public.dealerships (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.listings
    OWNER to "movuAdmin";