window.addEventListener('load', function () {
  const clone = document.querySelectorAll('.clone')
  clone.forEach(item => {
    const content = item.innerHTML
    item.innerHTML = content + content + content
  })
})

document.addEventListener('DOMContentLoaded', function () {
  // Counter Animation Function
  function animateCounter(element, start, end, duration, suffix = '') {
    const startTime = performance.now()

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Use easeOutCubic for smooth animation
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(start + (end - start) * easedProgress)

      element.textContent = currentValue + suffix

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        // Ensure we always end with the exact target value
        element.textContent = end + suffix
      }
    }

    requestAnimationFrame(updateCounter)
  }

  // Initialize Intersection Observer for counter animation
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.counter')

        counters.forEach((counter, index) => {
          const target = parseInt(counter.getAttribute('data-target'))
          const suffix = counter.getAttribute('data-suffix') || ''

          // Add staggered delay for each counter
          setTimeout(() => {
            animateCounter(counter, 0, target, 1000, suffix)
          }, index * 200)
        })

        // Unobserve after animation starts
        counterObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe the stats section
  const statsSection = document.getElementById('stats-section')
  if (statsSection) {
    counterObserver.observe(statsSection)
  }
})
