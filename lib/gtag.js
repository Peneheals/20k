export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (action, { category, label, ...rest }) => {
  window.gtag('event', action, {
    ...( category ? { event_category: category } : {} ),
    ...( label ? { event_label: label } : {} ),
    ...rest
  })
}
