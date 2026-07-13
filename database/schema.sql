-- Database schema for Berlin Car Wash Patrol

-- Orders table to store booking details securely
CREATE TABLE IF NOT EXISTS orders (
  id bigint generated always as identity primary key,
  customer_name text NOT NULL,
  phone text NOT NULL,
  car_details text NOT NULL,
  package_name text NOT NULL,
  add_ons text[] DEFAULT '{}',
  total_price integer NOT NULL,
  preferred_date date NOT NULL,
  location text NOT NULL,
  token_pack_selected boolean DEFAULT false,
  status text DEFAULT 'pending',
  created_at timestamptz default now()
);

-- Subscriptions table for the upcoming mobile app launch
CREATE TABLE IF NOT EXISTS subscriptions (
  id bigint generated always as identity primary key,
  email text UNIQUE NOT NULL,
  car_brand text,
  created_at timestamptz default now()
);

-- Seed some initial demo data for visualization
INSERT INTO subscriptions (email, car_brand) VALUES 
('al-thani.luxury@qatar.qa', 'Porsche 911 GT3 RS'),
('mohammed.al@westbay.qa', 'Mercedes G63 AMG'),
('johann.schmidt@detailing.de', 'Audi RS e-tron GT')
ON CONFLICT (email) DO NOTHING;
