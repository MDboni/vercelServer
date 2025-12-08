live deme : https://vercel-server-rust.vercel.app/

varcel.json code is
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"
    }
  ]
}


<img width="382" height="337" alt="image" src="https://github.com/user-attachments/assets/31697e3a-129c-4788-a3bc-99656f8ba8b0" />
