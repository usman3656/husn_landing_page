"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getConsent } from "@/components/cookie-banner";

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

function realKey(k: string | undefined): k is string {
  return Boolean(k && !k.includes("stub"));
}

export function Analytics() {
  const [consent, setConsentState] = useState<"granted" | "denied" | null>(null);

  useEffect(() => {
    setConsentState(getConsent());
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setConsentState(detail === "granted" ? "granted" : "denied");
    };
    window.addEventListener("husn:consent", onChange);
    return () => window.removeEventListener("husn:consent", onChange);
  }, []);

  return (
    <>
      {/* Plausible: cookieless, no consent gate required */}
      {PLAUSIBLE_DOMAIN && !PLAUSIBLE_DOMAIN.includes("stub") && (
        <Script
          defer
          data-domain={PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}

      {/* PostHog: consent-gated */}
      {realKey(POSTHOG_KEY) && consent === "granted" && (
        <Script id="posthog-init" strategy="afterInteractive">
          {`
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]);t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('${POSTHOG_KEY}', {api_host:'${POSTHOG_HOST}', capture_pageview: true});
          `}
        </Script>
      )}
    </>
  );
}
