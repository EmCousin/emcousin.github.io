class Dock {
  static DEFAULTS = {
    maxScale: 1.5,
    minScale: 1,
    effectRadius: 150,
  }

  static STORAGE_KEY = 'dock-cursor-x'

  constructor(container, options = {}) {
    this.container = container
    this.icons = Array.from(container.querySelectorAll('[data-dock-item]'))
    this.config = { ...Dock.DEFAULTS, ...options }
    this.isActive = false
  }

  connect() {
    if (!this.container || this.icons.length === 0) return
    if (!this.isLargeScreen()) return

    this.container.addEventListener('mouseenter', () => this.activate())
    this.container.addEventListener('mouseleave', () => this.deactivate())
    this.container.addEventListener('mousemove', (e) => this.handleMouseMove(e))

    this.icons.forEach((icon) => {
      icon.addEventListener('click', (e) => this.handleClick(e))
    })

    this.restoreState()
  }

  activate() {
    this.isActive = true
  }

  deactivate() {
    this.isActive = false
    this.clearStoredPosition()
    this.resetIcons()
  }

  handleClick(event) {
    sessionStorage.setItem(Dock.STORAGE_KEY, event.clientX.toString())
  }

  restoreState() {
    const storedX = sessionStorage.getItem(Dock.STORAGE_KEY)
    if (!storedX) return

    const cursorX = parseFloat(storedX)
    this.isActive = true
    this.applyEffect(cursorX, null)
  }

  clearStoredPosition() {
    sessionStorage.removeItem(Dock.STORAGE_KEY)
  }

  handleMouseMove(event) {
    if (!this.isActive) return

    this.clearStoredPosition()
    this.applyEffect(event.clientX, event.clientY)
  }

  applyEffect(cursorX, cursorY) {
    const scales = []

    this.icons.forEach((icon) => {
      const rect = icon.getBoundingClientRect()
      const iconCenterX = rect.left + rect.width / 2
      const iconCenterY = rect.top + rect.height / 2

      const distanceX = Math.abs(cursorX - iconCenterX)

      let verticalFactor = 1
      if (cursorY !== null) {
        const distanceY = Math.abs(cursorY - iconCenterY)
        verticalFactor = this.calculateVerticalFactor(distanceY)
      }

      scales.push(this.calculateScale(distanceX, verticalFactor))
    })

    this.icons.forEach((icon, index) => {
      const scale = scales[index]
      const translateY = this.calculateTranslateY(scale)
      const translateX = this.calculateTranslateX(scales, index)

      this.applyTransform(icon, scale, translateX, translateY)
    })
  }

  calculateVerticalFactor(distanceY) {
    const innerRadius = 30
    const outerRadius = 150

    if (distanceY <= innerRadius) return 1
    if (distanceY >= outerRadius) return 0

    const normalized = (distanceY - innerRadius) / (outerRadius - innerRadius)
    return Math.cos((normalized * Math.PI) / 2)
  }

  calculateScale(distanceX, verticalFactor) {
    const { maxScale, minScale, effectRadius } = this.config

    if (distanceX >= effectRadius) return minScale

    const normalized = distanceX / effectRadius
    const factor = Math.cos((normalized * Math.PI) / 2)

    const scaleRange = (maxScale - minScale) * factor * verticalFactor
    return minScale + scaleRange
  }

  calculateTranslateY(scale) {
    const { maxScale, minScale } = this.config
    const maxTranslate = -8

    const normalized = (scale - minScale) / (maxScale - minScale)
    return maxTranslate * normalized
  }

  calculateTranslateX(scales, index) {
    const { minScale } = this.config
    let offset = 0

    for (let i = 0; i < index; i++) {
      const extraWidth = (scales[i] - minScale) * 56
      offset += extraWidth / 2
    }

    for (let i = index + 1; i < scales.length; i++) {
      const extraWidth = (scales[i] - minScale) * 56
      offset -= extraWidth / 2
    }

    return offset
  }

  applyTransform(icon, scale, translateX, translateY) {
    icon.style.transform = `translateX(${translateX}px) scale(${scale}) translateY(${translateY}px)`
  }

  resetIcons() {
    this.icons.forEach((icon) => {
      icon.style.transform = ''
    })
  }

  isLargeScreen() {
    return window.matchMedia('(min-width: 1024px)').matches
  }

  static initAll(selector = '[data-dock]', options = {}) {
    document.querySelectorAll(selector).forEach((container) => {
      new Dock(container, options).connect()
    })
  }
}

Dock.initAll()
