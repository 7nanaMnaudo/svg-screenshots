export type CaptureArea = 'captureArea' | 'capturePage'
export type Target = 'download' | 'tab' | 'clipboard'

export const SETTINGS_KEYS: readonly (keyof Settings)[] = ['minifySvg', 'inlineResources', 'prettyPrintSvg', 'target']

/**
 * The user settings stored in `browser.storage.sync`
 */
export interface Settings {
	minifySvg?: boolean
	inlineResources?: boolean
	prettyPrintSvg?: boolean
	target?: Target
}

export const applyDefaults = ({
	inlineResources = true,
	minifySvg = false,
	prettyPrintSvg = true,
	target = 'download',
}: Settings): Required<Settings> => ({
	inlineResources,
	minifySvg,
	prettyPrintSvg,
	target,
})
