# Creating this project

# Tools/Tech used:
    -sveltekit
    -svelte
    -tailwind
    -daisyui
    -javascript
    -typescript
    -css
    -html
    -supabase

# Dependencies:
    -daisyui > npm i daisyui
    -Tailwindcss > npx svelte-add@latest tailwindcss
    -Supabase > npm i @supabase/supabase-js

# Config Changes:
    -Daisyui
        > Added "require('daisyui')," -> on tailwind.config.cjs > plugins
        > Added theme on app.html > data-theme="business"
    (FOR TS but did not add on this project)
    -Paths on $root
        > Added on tsconfig.json
            "paths": {
                "@root/*" : ["src/*"] 
            }



