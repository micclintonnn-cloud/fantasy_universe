/**
 * Privacy-First Measurement & Event Tracking for Sorvia
 *
 * Requirements:
 * - Distinguish purchase-link clicks from verified sales.
 * - Zero personal data (emails, names) in telemetry payloads.
 * - Works offline & statically without throwing exceptions.
 * - Ready for integration with Cloudflare Web Analytics or custom serverless ingest.
 */

export type AnalyticsEventType =
  | 'page_view'
  | 'visa_applied'
  | 'sample_read_opened'
  | 'sample_scroll_depth'
  | 'purchase_link_clicked'
  | 'atlas_marker_inspected'
  | 'lore_entry_viewed'
  | 'newsletter_subscribed';

export interface AnalyticsEvent {
  event: AnalyticsEventType;
  properties?: Record<string, string | number | boolean>;
  timestamp: number;
}

class SorviaAnalyticsTracker {
  private eventsLog: AnalyticsEvent[] = [];

  /**
   * Track custom user interaction
   * Ensures no personal data (PII) is included in properties
   */
  public track(event: AnalyticsEventType, properties: Record<string, string | number | boolean> = {}): void {
    // Sanitize any accidental sensitive keys
    const sanitizedProps = { ...properties };
    delete sanitizedProps['email'];
    delete sanitizedProps['name'];
    delete sanitizedProps['phone'];

    const payload: AnalyticsEvent = {
      event,
      properties: sanitizedProps,
      timestamp: Date.now(),
    };

    this.eventsLog.push(payload);

    if (process.env.NODE_ENV !== 'production') {
      console.log(`[Sorvia Analytics Event: ${event}]`, sanitizedProps);
    }

    // In browser, dispatch custom DOM event for decoupled integrations
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('sorvia:telemetry', { detail: payload })
      );
    }
  }

  /**
   * Specifically track when an outbound or internal purchase link is clicked.
   * NOTE: As defined in requirements, this records INTENT TO PURCHASE only,
   * NOT a verified sale.
   */
  public trackPurchaseClick(platform: string, itemSku: string): void {
    this.track('purchase_link_clicked', {
      platform,
      itemSku,
      type: 'intent_click',
      verified_sale: false,
    });
  }

  /**
   * Track sample chapter engagement depth
   */
  public trackSampleEngagement(percent: number, readingTimeSeconds: number): void {
    this.track('sample_scroll_depth', {
      depth_percent: percent,
      duration_seconds: readingTimeSeconds,
    });
  }

  /**
   * Track explorer visa application without logging personal contact info
   */
  public trackVisaApplication(explorerArchetype: string): void {
    this.track('visa_applied', {
      archetype: explorerArchetype,
      status: 'provisional_recorded',
    });
  }

  public getLoggedEvents(): AnalyticsEvent[] {
    return [...this.eventsLog];
  }
}

export const analytics = new SorviaAnalyticsTracker();

