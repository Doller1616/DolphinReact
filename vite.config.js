import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'

export default defineConfig({
  server: {
    fs: { allow: ['./'] }
  },
  plugins: [
  reactRefresh(),
  alias({
      entries: [
        { find: '@Pages', replacement: resolve(__dirname + '/src/Pages') },
        { find: '@Elements', replacement: resolve(__dirname + '/src/Common/Elements') },
        { find: '@Widgets', replacement: resolve(__dirname + '/src/Common/Widgets') },
        { find: '@Redux', replacement: resolve(__dirname + '/src/Redux') },
        { find: '@Reducers', replacement: resolve(__dirname + '/src/Redux/Reducers') },
        { find: '@Actions', replacement: resolve(__dirname + '/src/Common/Actions') },
      ]
    })
  ]
})
