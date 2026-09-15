// GA4 helpers.
//
// Every form on this site calls preventDefault() and posts to Formspree over
// fetch, so the browser's native submit event never fires and GA4's enhanced
// measurement can only ever see form_start, never form_submit. Conversions
// have to be reported explicitly, from the success branch of each handler,
// after the endpoint confirms the write.

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>,
) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }
};

// One key event across every form. form_location tells them apart in GA4.
export const trackLeadGeneration = (formLocation: string) => {
  trackEvent("generate_lead", { form_location: formLocation });
};
