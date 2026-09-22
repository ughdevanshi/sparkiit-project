-- =====================================================================
-- Spark IIT
-- SUPABASE DATABASE SCHEMA MIGRATION
-- =====================================================================
-- Instructions:
-- 1. Open your Supabase project dashboard (https://supabase.com/dashboard)
-- 2. Navigate to the SQL Editor in the left sidebar
-- 3. Click "New Query", paste this entire script, and click "Run"
-- =====================================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ---------------------------------------------------------------------
-- 1. ADMISSIONS TABLE
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.admissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    application_id TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    course TEXT NOT NULL,
    batch_timing TEXT NOT NULL,
    qualification TEXT NOT NULL,
    address TEXT NOT NULL,
    message TEXT,
    status TEXT NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'CONTACTED', 'VERIFIED', 'ENROLLED', 'CANCELLED')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Index frequently queried columns for performance
CREATE INDEX IF NOT EXISTS idx_admissions_application_id ON public.admissions (application_id);
CREATE INDEX IF NOT EXISTS idx_admissions_email ON public.admissions (email);
CREATE INDEX IF NOT EXISTS idx_admissions_course ON public.admissions (course);
CREATE INDEX IF NOT EXISTS idx_admissions_created_at ON public.admissions (created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.admissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous & authenticated visitors to insert new admission applications
DROP POLICY IF EXISTS "Allow anonymous admissions insert" ON public.admissions;
CREATE POLICY "Allow anonymous admissions insert" 
ON public.admissions 
FOR INSERT 
TO public 
WITH CHECK (true);

-- Allow reading admissions (for administrative dashboard / verification)
DROP POLICY IF EXISTS "Allow read admissions" ON public.admissions;
CREATE POLICY "Allow read admissions" 
ON public.admissions 
FOR SELECT 
TO public 
USING (true);


-- ---------------------------------------------------------------------
-- 2. CONTACT MESSAGES TABLE
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'UNREAD' CHECK (status IN ('UNREAD', 'READ', 'RESOLVED')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Index for contact messages
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON public.contact_messages (email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON public.contact_messages (created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous & authenticated visitors to submit contact messages
DROP POLICY IF EXISTS "Allow anonymous contact messages insert" ON public.contact_messages;
CREATE POLICY "Allow anonymous contact messages insert" 
ON public.contact_messages 
FOR INSERT 
TO public 
WITH CHECK (true);

-- Allow reading contact messages
DROP POLICY IF EXISTS "Allow read contact messages" ON public.contact_messages;
CREATE POLICY "Allow read contact messages" 
ON public.contact_messages 
FOR SELECT 
TO public 
USING (true);


-- ---------------------------------------------------------------------
-- 3. UPDATED_AT TRIGGER (FOR ADMISSIONS)
-- ---------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_admissions_updated_at ON public.admissions;
CREATE TRIGGER set_admissions_updated_at
BEFORE UPDATE ON public.admissions
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Verification query
COMMENT ON TABLE public.admissions IS 'Stores course admission registrations for Spark IIT';
COMMENT ON TABLE public.contact_messages IS 'Stores general inquiries submitted through Spark IIT contact page';
