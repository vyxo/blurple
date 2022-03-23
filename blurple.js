/* Code by Vyxo */

module.exports = {
  hex: {
    blurple: '#5865F2',
    dark: '#36393F',
    darker: '#2F3136',
    darkest: '#202225',
    black: '#000000',
    aqua: {
      light: '#1ABC9C',
      dark: '#11806A',
    },
    green: {
      light: '#2ECC71',
      dark: '#1F8B4C',
    },
    blue: {
      light: '#3498DB',
      dark: '#206694',
    },
    purple: {
      light: '#9B59B6',
      dark: '#71368A',
    },
    pink: {
      light: '#E91E63',
      dark: '#AD1457',
    },
    gold: {
      light: '#F1C40F',
      dark: '#C27C0E',
    },
    orange: {
      light: '#E67E22',
      dark: '#A84300',
    },
    red: {
      light: '#E74C3C',
      dark: '#992D22',
    },
  },
  css: () => {
    let root = ':root {\n'
    for (const [key, value] of Object.entries(module.exports.hex)) {
      if ((typeof value) === 'string') {
        root += `  --${key}: ${value};\n`
      } else {
        root += `  --${key}-light: ${value.light};\n`
        root += `  --${key}-dark: ${value.dark};\n`
      }
    }
    root += '}'
    return root
  },
  map: () => {
    let colors = new Map()
    for (const [key, value] of Object.entries(module.exports.hex)) {
      if ((typeof value) === 'string') {
        colors.set(`${key}`, value)
      } else {
        colors.set(`${key}_light`, value.light)
        colors.set(`${key}_dark`, value.dark)
      }
    }
    return colors
  }, 
  denary: () => {
    var colors = {
      
    }
    for (const [key, value] of Object.entries(module.exports.hex)) {
      if ((typeof value) === 'string') { 
        colors[key] = parseInt(value.slice(1), 10)
      } else {
        const multi = {
          
        }
        for (const [role, variant] of Object.entries(value)) {
          multi[role] = variant
        }
        colors[key] = multi
      }
    }
    return colors
  }
}