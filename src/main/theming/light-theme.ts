import { createTheme } from './theme-utils'
import { Theme } from './types'

// === exports =======================================================

export { lightTheme }

// === default theme =================================================

function patch(theme: Theme): Theme {
  return createTheme(
    {
      'color-black': '#000000',
      'color-white': '#ffffff'
    },
    theme
  )
}

const lightTheme = patch({
  'color-black': '#000',
  'color-white': '#fff',
  'color-gray-50': '#f9fafb',
  'color-gray-100': '#f3f4f6',
  'color-gray-200': '#e5e7eb',
  'color-gray-300': '#d1d5db',
  'color-gray-400': '#9ca3af',
  'color-gray-500': '#6b7280',
  'color-gray-600': '#4b5563',
  'color-gray-700': '#374151',
  'color-gray-800': '#1f2937',
  'color-gray-900': '#111827',
  'color-gray-950': '#0d131e',
  'color-primary-50': '#f0f9ff',
  'color-primary-100': '#e0f2fe',
  'color-primary-200': '#bae6fd',
  'color-primary-300': '#7dd3fc',
  'color-primary-400': '#38bdf8',
  'color-primary-500': '#0ea5e9',
  'color-primary-600': '#0284c7',
  'color-primary-700': '#0369a1',
  'color-primary-800': '#075985',
  'color-primary-900': '#0c4a6e',
  'color-primary-950': '#082e45',
  'color-primary-text': 'var(--sl-color-white)',
  'color-success-50': '#f0fdf4',
  'color-success-100': '#dcfce7',
  'color-success-200': '#bbf7d0',
  'color-success-300': '#86efac',
  'color-success-400': '#4ade80',
  'color-success-500': '#22c55e',
  'color-success-600': '#16a34a',
  'color-success-700': '#15803d',
  'color-success-800': '#166534',
  'color-success-900': '#14532d',
  'color-success-950': '#0d381e',
  'color-success-text': 'var(--sl-color-white)',
  'color-info-50': '#f9fafb',
  'color-info-100': '#f3f4f6',
  'color-info-200': '#e5e7eb',
  'color-info-300': '#d1d5db',
  'color-info-400': '#9ca3af',
  'color-info-500': '#6b7280',
  'color-info-600': '#4b5563',
  'color-info-700': '#374151',
  'color-info-800': '#1f2937',
  'color-info-900': '#111827',
  'color-info-950': '#0d131e',
  'color-info-text': 'var(--sl-color-white)',
  'color-warning-50': '#fffbeb',
  'color-warning-100': '#fef3c7',
  'color-warning-200': '#fde68a',
  'color-warning-300': '#fcd34d',
  'color-warning-400': '#fbbf24',
  'color-warning-500': '#f59e0b',
  'color-warning-600': '#d97706',
  'color-warning-700': '#b45309',
  'color-warning-800': '#92400e',
  'color-warning-900': '#78350f',
  'color-warning-950': '#4d220a',
  'color-warning-text': 'var(--sl-color-white)',
  'color-danger-50': '#fef2f2',
  'color-danger-100': '#fee2e2',
  'color-danger-200': '#fecaca',
  'color-danger-300': '#fca5a5',
  'color-danger-400': '#f87171',
  'color-danger-500': '#ef4444',
  'color-danger-600': '#dc2626',
  'color-danger-700': '#b91c1c',
  'color-danger-800': '#991b1b',
  'color-danger-900': '#7f1d1d',
  'color-danger-950': '#481111',
  'color-danger-text': 'var(--sl-color-white)',
  'border-radius-small': '0.125rem',
  'border-radius-medium': '0.25rem',
  'border-radius-large': '0.5rem',
  'border-radius-x-large': '1rem',
  'border-radius-circle': '50%',
  'border-radius-pill': '9999px',
  'shadow-x-small': '0 1px 0 #0d131e0d',
  'shadow-small': '0 1px 2px #0d131e1a',
  'shadow-medium': '0 2px 4px #0d131e1a',
  'shadow-large': '0 2px 8px #0d131e1a',
  'shadow-x-large': '0 4px 16px #0d131e1a',
  'spacing-xxx-small': '0.125rem',
  'spacing-xx-small': '0.25rem',
  'spacing-x-small': '0.5rem',
  'spacing-small': '0.75rem',
  'spacing-medium': '1rem',
  'spacing-large': '1.25rem',
  'spacing-x-large': '1.75rem',
  'spacing-xx-large': '2.25rem',
  'spacing-xxx-large': '3rem',
  'spacing-xxxx-large': '4.5rem',
  'transition-x-slow': '1000ms',
  'transition-slow': '500ms',
  'transition-medium': '250ms',
  'transition-fast': '150ms',
  'transition-x-fast': '50ms',
  'font-mono': "SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
  'font-sans':
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  'font-serif': "Georgia, 'Times New Roman', serif",
  'font-size-xx-small': '0.625rem',
  'font-size-x-small': '0.75rem',
  'font-size-small': '0.875rem',
  'font-size-medium': '1rem',
  'font-size-large': '1.25rem',
  'font-size-x-large': '1.5rem',
  'font-size-xx-large': '2.25rem',
  'font-size-xxx-large': '3rem',
  'font-size-xxxx-large': '4.5rem',
  'font-weight-light': '300',
  'font-weight-normal': '400',
  'font-weight-semibold': '500',
  'font-weight-bold': '700',
  'letter-spacing-dense': '-0.015em',
  'letter-spacing-normal': 'normal',
  'letter-spacing-loose': '0.075em',
  'line-height-dense': '1.4',
  'line-height-normal': '1.8',
  'line-height-loose': '2.2',
  'focus-ring-color-primary': '#0ea5e954',
  'focus-ring-color-success': '#22c55e54',
  'focus-ring-color-info': '#6b728054',
  'focus-ring-color-warning': '#f59e0b54',
  'focus-ring-color-danger': '#ef444454',
  'focus-ring-width': '3px',
  'button-font-size-small': 'var(--sl-font-size-x-small)',
  'button-font-size-medium': 'var(--sl-font-size-small)',
  'button-font-size-large': 'var(--sl-font-size-medium)',
  'input-height-small': '1.875rem',
  'input-height-medium': '2.5rem',
  'input-height-large': '3.125rem',
  'input-background-color': 'var(--sl-color-white)',
  'input-background-color-hover': 'var(--sl-color-white)',
  'input-background-color-focus': 'var(--sl-color-white)',
  'input-background-color-disabled': 'var(--sl-color-gray-100)',
  'input-border-color': 'var(--sl-color-gray-300)',
  'input-border-color-hover': 'var(--sl-color-gray-400)',
  'input-border-color-focus': 'var(--sl-color-primary-500)',
  'input-border-color-disabled': 'var(--sl-color-gray-300)',
  'input-border-width': '1px',
  'input-border-radius-small': 'var(--sl-border-radius-medium)',
  'input-border-radius-medium': 'var(--sl-border-radius-medium)',
  'input-border-radius-large': 'var(--sl-border-radius-medium)',
  'input-font-family': 'var(--sl-font-sans)',
  'input-font-weight': 'var(--sl-font-weight-normal)',
  'input-font-size-small': 'var(--sl-font-size-small)',
  'input-font-size-medium': 'var(--sl-font-size-medium)',
  'input-font-size-large': 'var(--sl-font-size-large)',
  'input-letter-spacing': 'var(--sl-letter-spacing-normal)',
  'input-color': 'var(--sl-color-gray-700)',
  'input-color-hover': 'var(--sl-color-gray-700)',
  'input-color-focus': 'var(--sl-color-gray-700)',
  'input-color-disabled': 'var(--sl-color-gray-900)',
  'input-icon-color': 'var(--sl-color-gray-400)',
  'input-icon-color-hover': 'var(--sl-color-gray-600)',
  'input-icon-color-focus': 'var(--sl-color-gray-600)',
  'input-placeholder-color': 'var(--sl-color-gray-400)',
  'input-placeholder-color-disabled': 'var(--sl-color-gray-600)',
  'input-spacing-small': 'var(--sl-spacing-small)',
  'input-spacing-medium': 'var(--sl-spacing-medium)',
  'input-spacing-large': 'var(--sl-spacing-large)',
  'input-label-font-size-small': 'var(--sl-font-size-small)',
  'input-label-font-size-medium': 'var(--sl-font-size-medium)',
  'input-label-font-size-large': 'var(--sl-font-size-large)',
  'input-label-color': 'inherit',
  'input-help-text-font-size-small': 'var(--sl-font-size-x-small)',
  'input-help-text-font-size-medium': 'var(--sl-font-size-small)',
  'input-help-text-font-size-large': 'var(--sl-font-size-medium)',
  'input-help-text-color': 'var(--sl-color-gray-400)',
  'toggle-size': '1rem',
  'overlay-background-color': '#37415180',
  'panel-background-color': 'var(--sl-color-white)',
  'panel-border-color': 'var(--sl-color-gray-200)',
  'tooltip-border-radius': 'var(--sl-border-radius-medium)',
  'tooltip-background-color': 'var(--sl-color-gray-900)',
  'tooltip-color': 'var(--sl-color-white)',
  'tooltip-font-family': 'var(--sl-font-sans)',
  'tooltip-font-weight': 'var(--sl-font-weight-normal)',
  'tooltip-font-size': 'var(--sl-font-size-small)',
  'tooltip-line-height': 'var(--sl-line-height-dense)',
  'tooltip-padding': 'var(--sl-spacing-xx-small) var(--sl-spacing-x-small)',
  'tooltip-arrow-size': '5px',
  'tooltip-arrow-start-end-offset': '8px',
  'z-index-drawer': '700',
  'z-index-dialog': '800',
  'z-index-dropdown': '900',
  'z-index-toast': '950',
  'z-index-tooltip': '1000'
})