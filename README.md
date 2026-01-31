# tsdown-preset

> An opinionated preset for tsdown.

A configuration preset library for [tsdown](https://github.com/rolldown/tsdown), designed to simplify TypeScript project
build configuration.

[![NPM version](https://img.shields.io/npm/v/tsdown-preset)](https://www.npmjs.com/package/tsdown-preset)

## Features

- 📦 Ready-to-use TypeScript build configuration
- 🚀 Preset solutions optimized for different scenarios
- 🔧 Flexible and overridable configuration
- 🎯 Support for multiple build targets (Vue, CLI, general libraries, etc.)

## Installation

```bash
pnpm add tsdown-preset -D
```

## Usage

Create a `tsdown.config.ts` file in your project root directory:

### General Library Configuration

```typescript
import { lib } from 'tsdown-preset'

export default lib()
```

Default configuration:

- Entry: `src/**/*.ts`
- Platform: `neutral`
- Inherits all configurations from `baseConfig`

### Vue Component Library Configuration

```typescript
import { vue } from 'tsdown-preset'

export default vue()
```

Default configuration:

- Platform: `neutral`
- fromVite: true
- Enable Vue type declaration generation
- Inherits all configurations from `baseConfig`

### CLI Tool Configuration

```typescript
import { cli } from 'tsdown-preset'

export default cli()
```

Default configuration:

- Entry: `src/cli.ts`
- Platform: `node`
- Inherits all configurations from `baseConfig`

### Custom Configuration

All presets support configuration overrides:

```typescript
import { lib } from 'tsdown-preset'

export default lib({
    entry: 'src/index.ts',
    platform: 'node',
    // Other tsdown configuration options...
})
```

## Preset Documentation

### `baseConfig`

Base configuration preset, providing common build configurations:

- `exports: true` - Generate ES module exports
- `dts: true` - Generate type declaration files
- `sourcemap: true` - Generate Source Maps

## License

[MIT](LICENSE) © 2025 [lonewolfyx](https://github.com/lonewolfyx)
