import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:3000'
        //proxy is added here to use this url as a proxy to the backend whenever /api is called
        //also it confirms that the request comes from this url only

        //if the app was made using create-react-app then we would have to use a different method
        //i.e we would have added proxy in package.json file
      }
    }
  }
})
