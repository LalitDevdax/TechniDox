import { ref } from 'vue'

/**
 * Reusable clipboard copy composable.
 * Uses Navigator Clipboard API with a cross-browser fallback mechanism.
 * Maintains a reactive state that resets after the specified timeout.
 *
 * @param {number} timeout - Reset delay in milliseconds (default: 2000)
 */
export default function useCopyToClipboard(timeout = 2000) {
  const isCopied = ref(false)
  let timer = null

  const copy = async (text) => {
    if (!text) return false

    try {
      await navigator.clipboard.writeText(text)
      triggerSuccessState()
      return true
    } catch (err) {
      console.warn('Modern clipboard API failed, attempting fallback...', err)
      return fallbackCopy(text)
    }
  }

  const triggerSuccessState = () => {
    isCopied.value = true
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      isCopied.value = false
    }, timeout)
  }

  const fallbackCopy = (text) => {
    try {
      const textArea = document.createElement('textarea')
      textArea.value = text
      // Prevent scrolling on focus
      textArea.style.position = 'fixed'
      textArea.style.top = '0'
      textArea.style.left = '0'
      textArea.style.opacity = '0'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      
      const successful = document.execCommand('copy')
      document.body.removeChild(textArea)

      if (successful) {
        triggerSuccessState()
        return true
      }
    } catch (err) {
      console.error('Fallback clipboard copy failed:', err)
    }
    return false
  }

  return {
    isCopied,
    copy
  }
}
