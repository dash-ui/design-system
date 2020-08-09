export function babel(config) {
  return {
    ...config,
    plugins: [
      ...config.plugins,
      [
        'dash',
        {
          instances: {
            styles: {'./src/styles': 'styles'},
            mq: {'./src/mq': 'mq'},
            responsive: {'./src/styles': 'responsiveStyles'},
          },
        },
      ],
    ],
  }
}

export const rollup = (config) => {
  if (config.output[0].format === 'umd') {
    config.external = ['react', 'react-dom']
    config.output[0].globals = {
      react: 'React',
      'react-dom': 'ReactDOM',
    }
  }

  return config
}
