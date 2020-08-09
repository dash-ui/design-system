import {useGlobal} from '@dash-ui/react'
import {responsiveStyles} from './styles'
import {mq} from './mq'
import {rem, em, round} from './utils'

/**
 * This creates the default typography styles for your application.
 */
export const typography = responsiveStyles({
  default: mq({
    default: ({elevation, radius, font, color}) => ({
      fontFamily: font.family.sans,
      color: color.gray700,
      'h1,h2,h3': {
        textRendering: 'optimizeLegibility',
        letterSpacing: font.tracking.tight,
      },
      a: {
        color: color.teal700,
        textDecoration: 'underline',
        textDecorationSkipInk: 'all',
        'strong,b': {
          fontWeight: 'inherit',
          color: color.teal900,
        },
      },
      b: {
        fontWeight: '600',
      },
      strong: {
        fontWeight: '600',
      },
      ol: {
        counterReset: 'list-counter',
      },
      'ol > li': {
        position: 'relative',
        counterIncrement: 'list-counter',
      },
      'ol > li::before': {
        content: 'counter(list-counter) "."',
        position: 'absolute',
        fontWeight: '400',
        color: color.gray600,
      },
      'ul > li': {
        position: 'relative',
      },
      'ul > li::before': {
        content: '""',
        position: 'absolute',
        backgroundColor: color.gray400,
        top: `calc(50% - 0.125em)`,
        borderRadius: '50%',
      },
      hr: {
        height: 2,
        backgroundColor: color.gray300,
        borderWidth: '0',
        borderRadius: radius.full,
      },
      blockquote: {
        fontWeight: '500',
        fontStyle: 'italic',
        color: color.gray800,
        borderWidth: '0 0 0 0.25rem',
        borderLeftColor: color.gray300,
        borderStyle: 'solid',
        quotes: '"\\201C""\\201D""\\2018""\\2019"',
      },
      'blockquote p:first-of-type::before': {
        content: 'open-quote',
      },
      'blockquote p:last-of-type::after': {
        content: 'close-quote',
      },
      h1: {
        color: color.gray800,
        fontWeight: '600',
        border: 0,
      },
      h2: {
        color: color.gray800,
        fontWeight: '500',
      },
      h3: {
        color: color.gray800,
        fontWeight: '500',
      },
      h4: {
        color: color.gray800,
        fontWeight: '600',
      },
      'figure figcaption': {
        color: color.gray600,
      },
      code: {
        fontFamily: font.family.mono,
        color: color.indigo700,
        backgroundColor: color.blue100,
        borderRadius: radius.primary,
        padding: '0.125em 0.25em',
        fontWeight: '400',
      },
      pre: {
        fontFamily: font.family.mono,
        color: color.blue900,
        backgroundColor: color.gray200,
        boxShadow: elevation.inner,
        overflowX: 'auto',
      },
      'pre code': {
        backgroundColor: 'transparent',
        borderWidth: '0',
        borderRadius: '0',
        padding: '0',
        fontWeight: '400',
        color: 'inherit',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        lineHeight: 'inherit',
      },
      'pre code::before': {
        content: '""',
      },
      table: {
        width: '100%',
        tableLayout: 'auto',
        textAlign: 'left',
        borderCollapse: 'collapse',
      },
      thead: {
        color: color.gray800,
        fontWeight: '700',
      },
      'thead th': {
        textTransform: 'uppercase',
        fontSize: '0.85em',
        letterSpacing: font.tracking.wide,
        verticalAlign: 'bottom',
      },
      'thead th, tbody tr td': {
        borderTop: `1px solid ${color.gray300}`,
        borderBottom: `1px solid ${color.gray300}`,
      },
      'tbody td': {
        verticalAlign: 'top',
      },
      'ol > li:before': {
        left: '0',
      },
      'thead th:first-child': {
        paddingLeft: '0',
      },
      'thead th:last-child': {
        paddingRight: '0',
      },
      'tbody td:first-child': {
        paddingLeft: '0',
      },
      'tbody td:last-child': {
        paddingRight: '0',
      },
    }),
    retina: {
      'h1,h2,h3,h4,h5,h6': {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
    },
  }),
  md: {
    fontSize: rem(16),
    lineHeight: round(28 / 16),
    blockquote: {
      paddingLeft: em(20, 20),
    },
    h1: {
      fontSize: em(36, 16),
      lineHeight: round(40 / 36),
    },
    h2: {
      fontSize: em(24, 16),
      lineHeight: round(32 / 24),
    },
    h3: {
      fontSize: em(20, 16),
      lineHeight: round(32 / 20),
    },
    h4: {
      lineHeight: round(24 / 16),
    },
    'figure figcaption': {
      fontSize: em(14, 16),
      lineHeight: round(20 / 14),
    },
    code: {
      fontSize: em(14, 16),
    },
    'h2 code': {
      fontSize: em(21, 24),
    },
    'h3 code': {
      fontSize: em(18, 20),
    },
    pre: {
      fontSize: em(14, 16),
      lineHeight: round(24 / 14),
      borderRadius: rem(6),
      paddingTop: em(12, 14),
      paddingRight: em(16, 14),
      paddingBottom: em(12, 14),
      paddingLeft: em(16, 14),
    },
    'ol > li': {
      paddingLeft: em(28, 16),
    },
    'ol > li:before': {
      left: '0',
    },
    'ul > li': {
      paddingLeft: em(28, 16),
    },
    'ul > li::before': {
      width: em(6, 16),
      height: em(6, 16),
      left: em(4, 16),
    },
    table: {
      fontSize: em(14, 16),
      lineHeight: round(24 / 14),
    },
    'thead th': {
      padding: em(8, 14),
    },
    'thead th:first-child': {
      paddingLeft: '0',
    },
    'thead th:last-child': {
      paddingRight: '0',
    },
    'tbody td': {
      paddingTop: em(8, 14),
      paddingRight: em(8, 14),
      paddingBottom: em(8, 14),
      paddingLeft: em(8, 14),
    },
  },

  sm: {
    fontSize: rem(14),
    lineHeight: round(24 / 14),
    blockquote: {
      paddingLeft: em(20, 18),
    },
    h1: {
      fontSize: em(34, 14),
      lineHeight: round(40 / 30),
    },
    h2: {
      fontSize: em(24, 14),
      lineHeight: round(32 / 20),
    },
    h3: {
      fontSize: em(18, 14),
      lineHeight: round(28 / 18),
    },
    h4: {
      lineHeight: round(20 / 14),
    },
    'figure figcaption': {
      fontSize: em(12, 14),
      lineHeight: round(16 / 12),
    },
    code: {
      fontSize: em(12, 14),
    },
    'h2 code': {
      fontSize: em(18, 20),
    },
    'h3 code': {
      fontSize: em(16, 18),
    },
    pre: {
      fontSize: em(14, 16),
      lineHeight: round(20 / 12),
      borderRadius: rem(4),
      paddingTop: em(8, 12),
      paddingRight: em(12, 12),
      paddingBottom: em(8, 12),
      paddingLeft: em(12, 12),
    },
    'ol > li': {
      paddingLeft: em(22, 14),
    },
    'ol > li:before': {
      left: '0',
    },
    'ul > li': {
      paddingLeft: em(22, 14),
    },
    'ul > li::before': {
      height: em(5, 14),
      width: em(5, 14),
      left: em(3, 14),
    },
    table: {
      fontSize: em(12, 14),
      lineHeight: round(18 / 12),
    },
    'thead th': {
      padding: em(12, 12),
    },
    'tbody td': {
      paddingTop: em(8, 12),
      paddingRight: em(12, 12),
      paddingBottom: em(8, 12),
      paddingLeft: em(12, 12),
    },
  },

  lg: {
    fontSize: rem(18),
    lineHeight: round(32 / 18),
    blockquote: {
      paddingLeft: em(24, 24),
    },
    h1: {
      fontSize: em(48, 18),
      lineHeight: round(48 / 48),
    },
    h2: {
      fontSize: em(30, 18),
      lineHeight: round(40 / 30),
    },
    h3: {
      fontSize: em(24, 18),
      lineHeight: round(36 / 24),
    },
    h4: {
      lineHeight: round(28 / 18),
    },
    'figure figcaption': {
      fontSize: em(16, 18),
      lineHeight: round(24 / 16),
    },
    code: {
      fontSize: em(16, 18),
    },
    'h2 code': {
      fontSize: em(26, 30),
    },
    'h3 code': {
      fontSize: em(21, 24),
    },
    pre: {
      fontSize: em(16, 18),
      lineHeight: round(28 / 16),
      borderRadius: rem(6),
      paddingTop: em(16, 16),
      paddingRight: em(24, 16),
      paddingBottom: em(16, 16),
      paddingLeft: em(24, 16),
    },
    'ol > li': {
      paddingLeft: em(30, 18),
    },
    'ol > li:before': {
      left: '0',
    },
    'ul > li': {
      paddingLeft: em(30, 18),
    },
    'ul > li::before': {
      width: em(6, 18),
      height: em(6, 18),
      left: em(4, 18),
    },
    table: {
      fontSize: em(16, 18),
      lineHeight: round(24 / 16),
    },
    'thead th': {
      padding: em(12, 16),
    },
    'tbody td': {
      paddingTop: em(12, 16),
      paddingRight: em(12, 16),
      paddingBottom: em(12, 16),
      paddingLeft: em(12, 16),
    },
  },

  xl: {
    fontSize: rem(20),
    lineHeight: round(36 / 20),
    blockquote: {
      paddingLeft: em(32, 30),
    },
    h1: {
      fontSize: em(56, 20),
      lineHeight: round(56 / 56),
    },
    h2: {
      fontSize: em(36, 20),
      lineHeight: round(40 / 36),
    },
    h3: {
      fontSize: em(30, 20),
      lineHeight: round(40 / 30),
    },
    h4: {
      lineHeight: round(32 / 20),
    },
    'figure figcaption': {
      fontSize: em(18, 20),
      lineHeight: round(28 / 18),
    },
    code: {
      fontSize: em(18, 20),
    },
    'h2 code': {
      fontSize: em(31, 36),
    },
    'h3 code': {
      fontSize: em(27, 30),
    },
    pre: {
      fontSize: em(18, 20),
      lineHeight: round(32 / 18),
      borderRadius: rem(8),
      paddingTop: em(20, 18),
      paddingRight: em(24, 18),
      paddingBottom: em(20, 18),
      paddingLeft: em(24, 18),
    },
    'ol > li': {
      paddingLeft: em(36, 20),
    },
    'ol > li:before': {
      left: '0',
    },
    'ul > li': {
      paddingLeft: em(36, 20),
    },
    'ul > li::before': {
      width: em(7, 20),
      height: em(7, 20),
      left: em(5, 20),
    },
    table: {
      fontSize: em(18, 20),
      lineHeight: round(28 / 18),
    },
    'thead th': {
      paddingRight: em(12, 18),
      paddingBottom: em(16, 18),
      paddingLeft: em(12, 18),
    },
    'tbody td': {
      paddingTop: em(16, 18),
      paddingRight: em(12, 18),
      paddingBottom: em(16, 18),
      paddingLeft: em(12, 18),
    },
  },

  '2xl': {
    fontSize: rem(24),
    lineHeight: round(40 / 24),
    blockquote: {
      paddingLeft: em(40, 36),
    },
    h1: {
      fontSize: em(64, 24),
      lineHeight: round(64 / 64),
    },
    h2: {
      fontSize: em(48, 24),
      lineHeight: round(52 / 48),
    },
    h3: {
      fontSize: em(36, 24),
      lineHeight: round(44 / 36),
    },
    h4: {
      lineHeight: round(36 / 24),
    },
    code: {
      fontSize: em(20, 24),
    },
    'h2 code': {
      fontSize: em(42, 48),
    },
    'h3 code': {
      fontSize: em(32, 36),
    },
    pre: {
      fontSize: em(20, 24),
      lineHeight: round(36 / 20),
      borderRadius: rem(8),
      paddingTop: em(24, 20),
      paddingRight: em(32, 20),
      paddingBottom: em(24, 20),
      paddingLeft: em(32, 20),
    },
    'ol > li': {
      paddingLeft: em(40, 24),
    },
    'ol > li:before': {
      left: '0',
    },
    'ul > li': {
      paddingLeft: em(40, 24),
    },
    'ul > li::before': {
      width: em(8, 24),
      height: em(8, 24),
      left: em(6, 24),
    },
    table: {
      fontSize: em(20, 24),
      lineHeight: round(28 / 20),
    },
    'thead th': {
      paddingRight: em(12, 20),
      paddingBottom: em(16, 20),
      paddingLeft: em(12, 20),
    },
    'tbody td': {
      paddingTop: em(16, 20),
      paddingRight: em(12, 20),
      paddingBottom: em(16, 20),
      paddingLeft: em(12, 20),
    },
  },
})

/**
 * This hook adds the typography styles to the `body` of the document.
 *
 * @param variant The typography variant you want to add to the `body`.
 *  The previous variant will be flushed from the DOM any time a new
 *  variant is selected.
 */
export function useTypographyGlobal(
  variant: keyof typeof typography.styles = 'sm'
) {
  useGlobal(
    `
      body {
        ${typography.css(variant)}
      }
    `,
    [variant]
  )
}
