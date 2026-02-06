import type { UserConfig } from 'tsdown'
import { mergeConfig } from 'tsdown'

export type { UserConfig }

export const baseConfig = (overrides: UserConfig = {}): UserConfig => {
    return mergeConfig({
        exports: true,
        dts: true,
        inlineOnly: false,
        sourcemap: true,
    }, overrides)
}

export const vue = (overrides: UserConfig = {}): UserConfig => {
    return baseConfig({
        platform: 'neutral',
        fromVite: true,
        dts: {
            vue: true,
        },
        ...overrides,
    })
}

export const cli = (overrides: UserConfig = {}): UserConfig => {
    return baseConfig({
        entry: 'src/cli.ts',
        platform: 'node',
        ...overrides,
    })
}

export const lib = (overrides: UserConfig = {}): UserConfig => {
    return baseConfig({
        entry: 'src/**/*.ts',
        platform: 'neutral',
        ...overrides,
    })
}

export const nodeLib = (overrides: UserConfig = {}): UserConfig => {
    return baseConfig({
        entry: 'src/index.ts',
        platform: 'node',
        ...overrides,
    })
}
