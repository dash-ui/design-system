import * as React from 'react'
import {Box} from '@dash-ui/react-layout'
import type {BoxProps} from '@dash-ui/react-layout'
import forwardRefAs from 'forward-ref-as'
import clsx from 'clsx'
import {styles, responsiveStyles} from './styles'
import type {ResponsiveProp} from './styles'
import {typography} from './typography'
import {em} from './utils'

/**
 * A component for long form writing where you want the default
 * typography styles to have precendent and you do not want to
 * manage spacing on your own, e.g. Markdown.
 */
export const Prose = forwardRefAs<ProseProps, 'article'>(
  ({variant = 'sm', className, ...props}, ref) => {
    return (
      <Box
        ref={ref}
        className={clsx(className, prose(variant))}
        as='article'
        {...props}
      />
    )
  }
)

export interface ProseProps extends BoxProps {
  /**
   * Select a prose variant
   * @default "sm"
   */
  variant?: ResponsiveProp<keyof typeof prose.styles>
}

/**
 * Responsive styles for adding spacing to prose
 */
const proseSpacing = responsiveStyles({
  default: {
    maxWidth: '80ch',
    table: {
      marginTop: em(32, 16),
      marginBottom: em(32, 16),
    },
  },

  md: {
    p: {
      marginTop: em(20, 16),
      marginBottom: em(20, 16),
    },
    blockquote: {
      marginTop: em(32, 20),
      marginBottom: em(32, 20),
    },
    h1: {
      marginTop: '0',
      marginBottom: em(32, 36),
    },
    h2: {
      marginTop: em(48, 24),
      marginBottom: em(24, 24),
    },
    h3: {
      marginTop: em(32, 20),
      marginBottom: em(12, 20),
    },
    h4: {
      marginTop: em(24, 16),
      marginBottom: em(8, 16),
    },
    img: {
      marginTop: em(32, 16),
      marginBottom: em(32, 16),
    },
    video: {
      marginTop: em(32, 16),
      marginBottom: em(32, 16),
    },
    figure: {
      marginTop: em(32, 16),
      marginBottom: em(32, 16),
    },
    'figure > *': {
      marginTop: '0',
      marginBottom: '0',
    },
    'figure figcaption': {
      marginTop: em(12, 14),
    },
    pre: {
      marginTop: em(24, 14),
      marginBottom: em(24, 14),
    },
    ol: {
      marginTop: em(20, 16),
      marginBottom: em(20, 16),
    },
    ul: {
      marginTop: em(20, 16),
      marginBottom: em(20, 16),
    },
    li: {
      marginTop: em(8, 16),
      marginBottom: em(8, 16),
    },
    '> ul > li p': {
      marginTop: em(12, 16),
      marginBottom: em(12, 16),
    },
    '> ul > li > *:first-child': {
      marginTop: em(20, 16),
    },
    '> ul > li > *:last-child': {
      marginBottom: em(20, 16),
    },
    '> ol > li > *:first-child': {
      marginTop: em(20, 16),
    },
    '> ol > li > *:last-child': {
      marginBottom: em(20, 16),
    },
    'ul ul, ul ol, ol ul, ol ol': {
      marginTop: em(12, 16),
      marginBottom: em(12, 16),
    },
    hr: {
      marginTop: em(48, 16),
      marginBottom: em(48, 16),
    },
    'hr + *': {
      marginTop: '0',
    },
    'h1 + *': {
      marginTop: '0',
    },
    'h2 + *': {
      marginTop: '0',
    },
    'h3 + *': {
      marginTop: '0',
    },
    'h4 + *': {
      marginTop: '0',
    },
    '> :first-child': {
      marginTop: '0',
    },
    '> :last-child': {
      marginBottom: '0',
    },
  },

  sm: {
    p: {
      marginTop: em(16, 14),
      marginBottom: em(16, 14),
    },
    blockquote: {
      marginTop: em(24, 18),
      marginBottom: em(24, 18),
    },
    h1: {
      marginTop: '0',
      marginBottom: em(24, 30),
    },
    h2: {
      marginTop: em(32, 20),
      marginBottom: em(16, 20),
    },
    h3: {
      marginTop: em(28, 18),
      marginBottom: em(8, 18),
    },
    h4: {
      marginTop: em(20, 14),
      marginBottom: em(8, 14),
    },
    img: {
      marginTop: em(24, 14),
      marginBottom: em(24, 14),
    },
    video: {
      marginTop: em(24, 14),
      marginBottom: em(24, 14),
    },
    figure: {
      marginTop: em(24, 14),
      marginBottom: em(24, 14),
    },
    'figure > *': {
      marginTop: '0',
      marginBottom: '0',
    },
    'figure figcaption': {
      marginTop: em(8, 12),
    },
    pre: {
      marginTop: em(20, 12),
      marginBottom: em(20, 12),
    },
    ol: {
      marginTop: em(16, 14),
      marginBottom: em(16, 14),
    },
    ul: {
      marginTop: em(16, 14),
      marginBottom: em(16, 14),
    },
    li: {
      marginTop: em(4, 14),
      marginBottom: em(4, 14),
    },
    '> ul > li p': {
      marginTop: em(8, 14),
      marginBottom: em(8, 14),
    },
    '> ul > li > *:first-child': {
      marginTop: em(16, 14),
    },
    '> ul > li > *:last-child': {
      marginBottom: em(16, 14),
    },
    '> ol > li > *:first-child': {
      marginTop: em(16, 14),
    },
    '> ol > li > *:last-child': {
      marginBottom: em(16, 14),
    },
    'ul ul, ul ol, ol ul, ol ol': {
      marginTop: em(8, 14),
      marginBottom: em(8, 14),
    },
    hr: {
      marginTop: em(40, 14),
      marginBottom: em(40, 14),
    },
    'hr + *': {
      marginTop: '0',
    },
    'h1 + *': {
      marginTop: '0',
    },
    'h2 + *': {
      marginTop: '0',
    },
    'h3 + *': {
      marginTop: '0',
    },
    'h4 + *': {
      marginTop: '0',
    },
    '> :first-child': {
      marginTop: '0',
    },
    '> :last-child': {
      marginBottom: '0',
    },
  },

  lg: {
    p: {
      marginTop: em(24, 18),
      marginBottom: em(24, 18),
    },
    blockquote: {
      marginTop: em(40, 24),
      marginBottom: em(40, 24),
    },
    h1: {
      marginTop: '0',
      marginBottom: em(40, 48),
    },
    h2: {
      marginTop: em(56, 30),
      marginBottom: em(32, 30),
    },
    h3: {
      marginTop: em(40, 24),
      marginBottom: em(16, 24),
    },
    h4: {
      marginTop: em(32, 18),
      marginBottom: em(8, 18),
    },
    img: {
      marginTop: em(32, 18),
      marginBottom: em(32, 18),
    },
    video: {
      marginTop: em(32, 18),
      marginBottom: em(32, 18),
    },
    figure: {
      marginTop: em(32, 18),
      marginBottom: em(32, 18),
    },
    'figure > *': {
      marginTop: '0',
      marginBottom: '0',
    },
    'figure figcaption': {
      marginTop: em(16, 16),
    },
    pre: {
      marginTop: em(32, 16),
      marginBottom: em(32, 16),
    },
    ol: {
      marginTop: em(24, 18),
      marginBottom: em(24, 18),
    },
    ul: {
      marginTop: em(24, 18),
      marginBottom: em(24, 18),
    },
    li: {
      marginTop: em(12, 18),
      marginBottom: em(12, 18),
    },
    hr: {
      marginTop: em(48, 14),
      marginBottom: em(48, 14),
    },
    '> ul > li p': {
      marginTop: em(16, 18),
      marginBottom: em(16, 18),
    },
    '> ul > li > *:first-child': {
      marginTop: em(24, 18),
    },
    '> ul > li > *:last-child': {
      marginBottom: em(24, 18),
    },
    '> ol > li > *:first-child': {
      marginTop: em(24, 18),
    },
    '> ol > li > *:last-child': {
      marginBottom: em(24, 18),
    },
    'ul ul, ul ol, ol ul, ol ol': {
      marginTop: em(16, 18),
      marginBottom: em(16, 18),
    },
    'hr + *': {
      marginTop: '0',
    },
    'h1 + *': {
      marginTop: '0',
    },
    'h2 + *': {
      marginTop: '0',
    },
    'h3 + *': {
      marginTop: '0',
    },
    'h4 + *': {
      marginTop: '0',
    },
    '> :first-child': {
      marginTop: '0',
    },
    '> :last-child': {
      marginBottom: '0',
    },
  },

  xl: {
    p: {
      marginTop: em(24, 20),
      marginBottom: em(24, 20),
    },
    blockquote: {
      marginTop: em(48, 30),
      marginBottom: em(48, 30),
    },
    h1: {
      marginTop: '0',
      marginBottom: em(48, 56),
    },
    h2: {
      marginTop: em(56, 36),
      marginBottom: em(32, 36),
    },
    h3: {
      marginTop: em(48, 30),
      marginBottom: em(20, 30),
    },
    h4: {
      marginTop: em(36, 20),
      marginBottom: em(12, 20),
    },
    img: {
      marginTop: em(40, 20),
      marginBottom: em(40, 20),
    },
    video: {
      marginTop: em(40, 20),
      marginBottom: em(40, 20),
    },
    figure: {
      marginTop: em(40, 20),
      marginBottom: em(40, 20),
    },
    'figure > *': {
      marginTop: '0',
      marginBottom: '0',
    },
    'figure figcaption': {
      marginTop: em(18, 18),
    },
    pre: {
      marginTop: em(36, 18),
      marginBottom: em(36, 18),
    },
    ol: {
      marginTop: em(24, 20),
      marginBottom: em(24, 20),
    },
    ul: {
      marginTop: em(24, 20),
      marginBottom: em(24, 20),
    },
    li: {
      marginTop: em(12, 20),
      marginBottom: em(12, 20),
    },
    '> ul > li p': {
      marginTop: em(16, 20),
      marginBottom: em(16, 20),
    },
    '> ul > li > *:first-child': {
      marginTop: em(24, 20),
    },
    '> ul > li > *:last-child': {
      marginBottom: em(24, 20),
    },
    '> ol > li > *:first-child': {
      marginTop: em(24, 20),
    },
    '> ol > li > *:last-child': {
      marginBottom: em(24, 20),
    },
    'ul ul, ul ol, ol ul, ol ol': {
      marginTop: em(16, 20),
      marginBottom: em(16, 20),
    },
    hr: {
      marginTop: em(56, 20),
      marginBottom: em(56, 20),
    },
    'hr + *': {
      marginTop: '0',
    },
    'h1 + *': {
      marginTop: '0',
    },
    'h2 + *': {
      marginTop: '0',
    },
    'h3 + *': {
      marginTop: '0',
    },
    'h4 + *': {
      marginTop: '0',
    },
    '> :first-child': {
      marginTop: '0',
    },
    '> :last-child': {
      marginBottom: '0',
    },
  },

  '2xl': {
    p: {
      marginTop: em(32, 24),
      marginBottom: em(32, 24),
    },
    blockquote: {
      marginTop: em(64, 36),
      marginBottom: em(64, 36),
    },
    h1: {
      marginTop: '0',
      marginBottom: em(56, 64),
    },
    h2: {
      marginTop: em(72, 48),
      marginBottom: em(40, 48),
    },
    h3: {
      marginTop: em(56, 36),
      marginBottom: em(24, 36),
    },
    h4: {
      marginTop: em(40, 24),
      marginBottom: em(16, 24),
    },
    img: {
      marginTop: em(48, 24),
      marginBottom: em(48, 24),
    },
    video: {
      marginTop: em(48, 24),
      marginBottom: em(48, 24),
    },
    figure: {
      marginTop: em(48, 24),
      marginBottom: em(48, 24),
    },
    'figure > *': {
      marginTop: '0',
      marginBottom: '0',
    },
    'figure figcaption': {
      marginTop: em(20, 20),
    },
    pre: {
      marginTop: em(40, 20),
      marginBottom: em(40, 20),
    },
    ol: {
      marginTop: em(32, 24),
      marginBottom: em(32, 24),
    },
    ul: {
      marginTop: em(32, 24),
      marginBottom: em(32, 24),
    },
    li: {
      marginTop: em(12, 24),
      marginBottom: em(12, 24),
    },
    '> ul > li p': {
      marginTop: em(20, 24),
      marginBottom: em(20, 24),
    },
    '> ul > li > *:first-child': {
      marginTop: em(32, 24),
    },
    '> ul > li > *:last-child': {
      marginBottom: em(32, 24),
    },
    '> ol > li > *:first-child': {
      marginTop: em(32, 24),
    },
    '> ol > li > *:last-child': {
      marginBottom: em(32, 24),
    },
    'ul ul, ul ol, ol ul, ol ol': {
      marginTop: em(16, 24),
      marginBottom: em(16, 24),
    },
    hr: {
      marginTop: em(72, 24),
      marginBottom: em(72, 24),
    },
    'hr + *': {
      marginTop: '0',
    },
    'h1 + *': {
      marginTop: '0',
    },
    'h2 + *': {
      marginTop: '0',
    },
    'h3 + *': {
      marginTop: '0',
    },
    'h4 + *': {
      marginTop: '0',
    },
    '> :first-child': {
      marginTop: '0',
    },
    '> :last-child': {
      marginBottom: '0',
    },
  },
})

function css(...args: Parameters<typeof proseSpacing>) {
  return proseSpacing.css(...args) + typography.css(...args)
}

/**
 * A responsive style instance that creates typography and prose spacing
 * styles for the selected variant.
 */
export const prose = Object.assign(
  function prose(...args: Parameters<typeof proseSpacing>) {
    return styles.cls(css(...args))
  },
  {
    css,
    styles: proseSpacing.styles,
  }
)
