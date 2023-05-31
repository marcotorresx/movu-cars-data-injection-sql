-- Table: public.orders

-- DROP TABLE IF EXISTS public.orders;

CREATE TABLE IF NOT EXISTS public.orders
(
    id integer NOT NULL DEFAULT nextval('orders_id_seq'::regclass),
    listing_id integer NOT NULL,
    customer_id character varying(50) COLLATE pg_catalog."default",
    seller_id character varying(50) COLLATE pg_catalog."default" NOT NULL,
    subtotal real NOT NULL,
    configuration json,
    financing_plan_id integer NOT NULL,
    due real NOT NULL,
    status order_status NOT NULL DEFAULT 'created'::order_status,
    arrival_date date,
    created_at date NOT NULL DEFAULT '2023-05-28'::date,
    address_id integer,
    CONSTRAINT orders_pkey PRIMARY KEY (id),
    CONSTRAINT orders_address_id_fkey FOREIGN KEY (address_id)
        REFERENCES public.addresses (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT orders_customer_id_customers_uid_fk FOREIGN KEY (customer_id)
        REFERENCES public.customers (uid) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT orders_financing_plan_id_financing_plans_id_fk FOREIGN KEY (financing_plan_id)
        REFERENCES public.financing_plans (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT orders_listing_id_listings_id_fk FOREIGN KEY (listing_id)
        REFERENCES public.listings (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT orders_seller_id_employees_uid_fk FOREIGN KEY (seller_id)
        REFERENCES public.employees (uid) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.orders
    OWNER to "movuAdmin";