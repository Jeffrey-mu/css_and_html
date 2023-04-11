import { $ } from 'execa'
const branch = await $`node -v`
console.log(branch);
