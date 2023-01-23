declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SUPABASE_KEY: string;
      NODE_ENV: 'local' | 'production';
	  NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
	  NEXT_PUBLIC_SUPABASE_URL: string;
	  EMAIL_PUBLIC_KEY: string;
	  EMAIL_SERVICE_ID: string;
	  EMAIL_TEMPLATE_ID: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}