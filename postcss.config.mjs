import tailwind from 'tailwindcss';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
export default {
  plugins: [tailwind(require)],
};